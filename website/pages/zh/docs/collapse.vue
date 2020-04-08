<template>
    <content-md></content-md>
</template>

<script>
import ContentMd from '@/markdown/zh/collapse.md';
export default {
    components: {
        ContentMd,
    },
    layout(context) {
        return 'docs';
    },
};
</script>
