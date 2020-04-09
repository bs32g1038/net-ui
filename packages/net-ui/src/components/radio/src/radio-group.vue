<template>
    <div class="net-radio-group">
        <slot></slot>
    </div>
</template>

<script>
import Emitter from 'net-ui/src/mixins/emitter';

export default {
    name: 'AtRadioGroup',
    props: {
        value: [String, Number],
        size: String,
        fill: String,
        textColor: String,
    },
    mixins: [Emitter],
    watch: {
        value(value) {
            this.$emit('radio-group-change', value);
            this.broadcast('AtRadio', 'init-data', value);
        },
    },
    mounted() {
        this.broadcast('AtRadio', 'init-data', this.value);
    },
};
</script>
