<template>
    <div class="net-rate">
        <ul
            class="net-rate__list"
            :class="{
                'net-rate--disabled': disabled,
            }"
            @mouseover="overRateHandle"
            @mouseleave="leaveRateHandle"
        >
            <li class="net-rate__item" :class="clacClass(index)" v-for="index in count" :key="index">
                <i
                    :class="['icon', 'net-rate__icon', icon]"
                    @mousemove="moveStarHandle(index, $event)"
                    @click="confirmValue(index)"
                >
                    <span :class="['icon', 'net-rate__left', icon]" type="half"></span>
                </i>
            </li>
        </ul>
        <div class="net-rate__text" v-if="showText">
            <slot>{{ currentValue }}</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NetRate',
    props: {
        value: {
            type: Number,
            default: 0,
            validator: val => val >= 0,
        },
        count: {
            type: Number,
            default: 5,
            validator: val => val >= 0,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        allowHalf: {
            type: Boolean,
            default: false,
        },
        showText: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: String,
            default: 'icon-star-on',
        },
    },
    data() {
        return {
            currentValue: this.value,
            hoverIndex: -1,
            lastHoverIndex: -1,
            isHoverRate: false,
            isHalf: this.allowHalf,
        };
    },
    watch: {
        value(val) {
            this.currentValue = val;
            this.$emit('on-change', val);
        },
        currentValue(val) {
            this.checkIsHalf(val);
        },
    },
    methods: {
        overRateHandle() {
            if (this.disabled) return;
            this.isHoverRate = true;
        },
        leaveRateHandle() {
            if (this.disabled) return;
            this.isHoverRate = false;
            this.hoverIndex = -1;
            this.lastHoverIndex = -1;
            this.checkIsHalf(this.currentValue);
        },
        moveStarHandle(index, event) {
            if (this.disabled) return;
            this.hoverIndex = index;

            if (this.allowHalf && event.target.getAttribute('type') === 'half') {
                this.isHalf = true;
            } else {
                this.isHalf = false;
            }

            // emit hover-change event
            const exactlyHoverIndex = this.isHalf ? index - 0.5 : index;
            if (exactlyHoverIndex !== this.lastHoverIndex) {
                this.$emit('on-hover-change', exactlyHoverIndex);
            }

            this.lastHoverIndex = exactlyHoverIndex;
        },
        confirmValue(index) {
            if (this.disabled) return;
            this.currentValue = this.isHalf ? index - 0.5 : index;
            this.$emit('on-change', this.currentValue);
            this.$emit('input', this.currentValue);
        },
        clacClass(index) {
            const STAR_ON_CLASS_NAME = 'net-rate__item--on';
            const STAR_OFF_CLASS_NAME = 'net-rate__item--off';
            const STAR_HALF_CLASS_NAME = 'net-rate__item--half';

            const isHalf = this.isHalf;
            const isHoverStar = this.hoverIndex !== -1;
            const currentIndex = isHoverStar ? this.hoverIndex : this.currentValue;
            const lastItemIndex = Math.ceil(currentIndex);

            return {
                [STAR_ON_CLASS_NAME]: isHalf ? index < lastItemIndex : index <= lastItemIndex,
                [STAR_HALF_CLASS_NAME]: index === lastItemIndex && isHalf,
                [STAR_OFF_CLASS_NAME]: index > lastItemIndex,
            };
        },
        checkIsHalf(val) {
            this.isHalf = this.allowHalf && val.toString().indexOf('.') >= 0;
        },
    },
};
</script>
