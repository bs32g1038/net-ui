<template>
    <color-md></color-md>
</template>

<script>
import ColorMd from '@/markdown/zh/design.md';
export default {
    components: {
        ColorMd,
    },
    layout(context) {
        return 'resource';
    },
};
</script>
