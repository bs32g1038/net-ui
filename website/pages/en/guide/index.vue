<template>
    <div>test</div>
</template>

<script>
export default {
    layout(context) {
        // Universal keys
        const { redirect } = context;
        redirect('/en/guide/color');
    },
};
</script>
