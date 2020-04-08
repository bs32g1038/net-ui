<template>
    <color-md></color-md>
</template>

<script>
import ColorMd from '@/markdown/en/design.md';
export default {
    components: {
        ColorMd,
    },
    layout(context) {
        return 'resource-en';
    },
};
</script>
