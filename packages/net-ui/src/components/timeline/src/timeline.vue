<template>
    <div
        class="net-timeline"
        :class="{
            'net-timeline--pending': pending,
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'NetTimeline',
    props: {
        pending: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        pending() {
            this.$children.forEach(child => {
                child.checkForLast();
            });
        },
    },
};
</script>
