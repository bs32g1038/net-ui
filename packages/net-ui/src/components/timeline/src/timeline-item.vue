<template>
    <div
        class="net-timeline__item"
        :class="{
            'net-timeline__item--last': isLastItem,
            'net-timeline__item--pending': isPendingItem,
            'net-timeline__item--custom': !!this.$slots.dot,
            [`net-timeline__item--${status}`]: status,
        }"
    >
        <div class="net-timeline__tail"></div>
        <div class="net-timeline__dot">
            <slot name="dot"></slot>
        </div>
        <div class="net-timeline__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NetTimelineItem',
    props: {
        color: {
            type: String,
            default: 'blue',
        },
    },
    data() {
        return {
            colors: {
                blue: 'default',
                red: 'error',
                green: 'success',
                yellow: 'warning',
            },
            defaultColor: 'blue',
            isLastItem: false,
            isPendingItem: false,
        };
    },
    computed: {
        status() {
            const colorKey = this.color;
            const status = this.colors[colorKey] || this.colors[this.defaultColor];

            return status;
        },
    },
    methods: {
        checkForLast() {
            const children = this.$parent.$children;
            const index = children.indexOf(this);
            const isPending = this.$parent.pending;
            const lastItemIndex = isPending ? children.length - 2 : children.length - 1;

            this.isLastItem = index === lastItemIndex;

            if (isPending) {
                this.isPendingItem = index === lastItemIndex + 1;
            }
        },
    },
    mounted() {
        this.checkForLast();
    },
};
</script>
