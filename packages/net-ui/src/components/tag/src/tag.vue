<template>
    <transition name="fade">
        <span class="net-tag" :class="[colorClass]" :style="colorStyle">
            <span class="net-tag__text"><slot></slot></span>
            <i class="icon icon-x net-tag__close" v-if="closable" @click="closeAction"></i>
        </span>
    </transition>
</template>

<script>
const colorArr = ['default', 'primary', 'success', 'error', 'warning', 'info'];

export default {
    name: 'AtTag',
    props: {
        name: {
            type: [String, Number],
        },
        color: {
            type: String,
            default: 'default',
        },
        closable: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        colorClass() {
            return colorArr.indexOf(this.color) > -1 ? `net-tag--${this.color}` : '';
        },
        colorStyle() {
            if (colorArr.indexOf(this.color) > -1) return '';
            return {
                borderColor: this.color,
                backgroundColor: this.color,
            };
        },
    },
    methods: {
        closeAction(evt) {
            if (typeof this.name === 'undefined') {
                this.$emit('on-close', evt);
            } else {
                this.$emit('on-close', evt, this.name);
            }
        },
    },
};
</script>
