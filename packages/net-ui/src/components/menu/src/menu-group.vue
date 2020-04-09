<template>
    <ul class="net-menu__item-group">
        <li class="net-menu__item-group-title">{{ title }}</li>
        <ul class="net-menu__item-group-list">
            <slot></slot>
        </ul>
    </ul>
</template>

<script>
export default {
    name: 'NetMenuItemGroup',
    props: {
        title: {
            type: String,
            default: '',
        },
    },
};
</script>
