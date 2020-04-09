<template>
    <div class="net-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'NetBreadcrumb',
    props: {
        separator: {
            type: String,
            default: '/',
        },
    },
};
</script>
