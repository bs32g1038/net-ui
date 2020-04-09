<template>
    <div
        class="net-input"
        :class="[
            size ? `net-input--${size}` : '',
            status ? `net-input--${status}` : '',
            {
                'net-input-group': $slots.prepend || $slots.append,
                'net-input--disabled': disabled,
                'net-input--prepend': $slots.prepend,
                'net-input--append': $slots.append,
                'net-input--icon': icon,
            },
        ]"
    >
        <!-- S prepend element -->
        <div
            class="net-input-group__prepend"
            :class="{ 'net-input-group--button': prependButton }"
            v-if="$slots.prepend"
        >
            <slot name="prepend"></slot>
        </div>
        <!-- E prepend element -->

        <!-- S input -->
        <input
            class="net-input__original"
            :type="type"
            :name="name"
            :value="currentValue"
            :placeholder="placeholder"
            :min="min"
            :max="max"
            :minlength="minlength"
            :maxlength="maxlength"
            :disabled="disabled"
            :readonly="readonly"
            :autofocus="autofocus"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="handleInput"
        />
        <!-- E input -->

        <!-- S icon -->
        <i class="net-input__icon icon" :class="iconClass" v-if="icon"></i>
        <!-- E icon -->

        <!-- S append element -->
        <div class="net-input-group__append" :class="{ 'net-input-group--button': appendButton }" v-if="$slots.append">
            <slot name="append"></slot>
        </div>
        <!-- E append element -->
    </div>
</template>

<script>
import Emitter from 'net-ui/src/mixins/emitter';

export default {
    name: 'NetInput',
    mixins: [Emitter],
    props: {
        type: {
            type: String,
            default: 'text',
        },
        value: [String, Number],
        name: String,
        placeholder: String,
        size: String,
        status: String,
        icon: String,
        prependButton: {
            type: Boolean,
            default: false,
        },
        appendButton: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
        maxlength: Number,
        minlength: Number,
        max: Number,
        min: Number,
    },
    computed: {
        iconClass() {
            const name = this.icon || this.status;
            return name ? `icon-${name}` : '';
        },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(val) {
            this.setCurrentValue(val);
        },
    },
    methods: {
        handleFocus(evt) {
            this.$emit('focus', evt);
        },
        handleBlur(evt) {
            this.$emit('blur', evt);
            this.dispatch('NetFormItem', 'on-form-item-blur', this.currentValue);
        },
        handleInput(evt) {
            const value = evt.target.value;
            this.$emit('input', value);
            this.$emit('change', value);
        },
        setCurrentValue(val) {
            if (val === this.currentValue) return;
            this.currentValue = val;
            this.dispatch('NetFormItem', 'on-form-item-change', this.currentValue);
        },
    },
};
</script>
