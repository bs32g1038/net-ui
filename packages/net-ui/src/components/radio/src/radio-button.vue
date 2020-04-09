<template>
    <label
        class="net-radio-button"
        :class="[size ? `net-radio-button--${size}` : '', { 'net-radio--checked': store === label }]"
    >
        <input
            type="radio"
            class="net-radio-button__original"
            v-model="store"
            :value="label"
            :name="name"
            :disabled="disabled"
        />
        <span class="net-radio-button__inner" :style="store === label ? activeStyle : null">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'NetRadioButton',
    props: {
        name: String,
        label: {
            type: [String, Number],
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            size: this.$parent.size,
        };
    },
    computed: {
        store: {
            get() {
                return this.$parent.value;
            },
            set(newValue) {
                this.$parent.$emit('input', newValue);
            },
        },
        activeStyle() {
            const styles = {};

            if (this.$parent.fill) {
                styles.backgroundColor = this.$parent.fill;
                styles.borderColor = this.$parent.fill;
            }
            if (this.$parent.textColor) {
                styles.color = this.$parent.textColor;
            }

            return styles;
        },
    },
};
</script>
