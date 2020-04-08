<template>
    <content-md></content-md>
</template>

<script>
import ContentMd from '@/markdown/zh/notification.md';
export default {
    components: {
        ContentMd,
    },
    layout(context) {
        return 'docs';
    },
};
</script>
