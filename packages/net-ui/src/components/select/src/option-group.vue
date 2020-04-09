<template>
    <ul class="net-option-group">
        <li class="net-option-group__label">{{ label }}</li>
        <ul class="net-option-group__list">
            <slot></slot>
        </ul>
    </ul>
</template>

<script>
export default {
    name: 'NetOptionGroup',
    props: {
        label: {
            type: String,
            required: true,
        },
    },
};
</script>
