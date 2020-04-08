<template>
    <content-md></content-md>
</template>

<script>
import ContentMd from '@/markdown/en/i18n.md';
export default {
    components: {
        ContentMd,
    },
    layout(context) {
        return 'docs-en';
    },
};
</script>
