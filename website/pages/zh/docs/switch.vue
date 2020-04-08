<template>
    <content-md></content-md>
</template>

<script>
import ContentMd from '@/markdown/zh/switch.md';
export default {
    components: {
        ContentMd,
    },
    layout(context) {
        return 'docs';
    },
};
</script>
