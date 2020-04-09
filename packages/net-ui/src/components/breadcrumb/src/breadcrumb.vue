<template>
    <div class="net-breadcrumb">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AtBreadcrumb',
    props: {
        separator: {
            type: String,
            default: '/',
        },
    },
};
</script>
