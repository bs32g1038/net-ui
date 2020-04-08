<template>
    <content-md></content-md>
</template>

<script>
import ContentMd from '@/markdown/en/tag.md';
export default {
    components: {
        ContentMd,
    },
    layout(context) {
        return 'docs-en';
    },
};
</script>
