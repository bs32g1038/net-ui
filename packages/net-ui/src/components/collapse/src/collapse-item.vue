<template>
    <div
        class="net-collapse__item"
        :class="{
            'net-collapse__item--active': isActive,
            'net-collapse__item--disabled': disabled,
        }"
    >
        <div class="net-collapse__header" @click="toggle">
            <i class="icon net-collapse__icon icon-chevron-right"></i>
            <slot name="title" v-if="$slots.title"></slot>
            <div v-else>{{ title }}</div>
        </div>
        <collapse-transition>
            <div class="net-collapse__body" v-show="isActive">
                <div class="net-collapse__content">
                    <slot></slot>
                </div>
            </div>
        </collapse-transition>
    </div>
</template>

<script>
import CollapseTransition from 'net-ui/src/utils/collapse-transition';

export default {
    name: 'NetCollapseItem',
    components: {
        CollapseTransition,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        name: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            index: 0,
            isActive: false,
        };
    },
    methods: {
        toggle() {
            if (this.disabled) return false;

            this.$parent.toggle({
                name: this.name || this.index,
                isActive: this.isActive,
            });
        },
    },
};
</script>
