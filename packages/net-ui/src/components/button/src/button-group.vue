<template>
    <div class="net-btn-group" :class="[size ? `net-btn-group--${size}` : '']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'NetButtonGroup',
    props: {
        size: String,
        gap: {
            type: Number,
            default: -1,
        },
    },
};
</script>
