<template>
    <span class="net-badge" :class="[status ? `net-badge--${status}` : '', { 'net-badge--alone': !$slots.default }]">
        <slot></slot>
        <sup
            class="net-badge__content"
            :class="{
                'net-badge--corner': $slots.default,
                'net-badge--dot': dot,
            }"
            v-show="show"
            v-text="content"
        ></sup>
    </span>
</template>

<script>
export default {
    name: 'NetBadge',
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        maxNum: {
            type: Number,
            default: 99,
        },
        dot: {
            type: Boolean,
            default: false,
        },
        show: {
            type: Boolean,
            default: true,
        },
        status: {
            type: String,
            default: 'error',
        },
    },
    computed: {
        content() {
            if (this.dot) return;

            const value = this.value;
            const maxNum = this.maxNum;

            if (typeof value === 'number' && typeof maxNum === 'number') {
                return value > maxNum ? `${maxNum}+` : value;
            }

            return value;
        },
    },
};
</script>
