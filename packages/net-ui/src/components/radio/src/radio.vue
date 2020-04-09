<template>
    <label class="net-radio">
        <span class="net-radio__input">
            <span
                class="net-radio__inner"
                :class="{
                    'net-radio--focus': focus,
                    'net-radio--checked': store === label,
                    'net-radio--disabled': disabled,
                }"
            ></span>
            <input
                type="radio"
                class="net-radio__original"
                v-model="store"
                :name="name"
                :value="label"
                :disabled="disabled"
                @focus="focus = true"
                @blur="focus = false"
            />
        </span>
        <span class="net-radio__label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
import Emitter from 'net-ui/src/mixins/emitter';

export default {
    name: 'NetRadio',
    props: {
        value: [String, Number],
        name: String,
        label: {
            type: [String, Number],
            required: true,
        },
        disabled: Boolean,
    },
    mixins: [Emitter],
    data() {
        return {
            store: this.value,
            focus: false,
            isGroup: false,
        };
    },
    watch: {
        store(store) {
            this.$emit('input', store);

            if (this.isGroup) {
                this.dispatch('NetRadioGroup', 'input', store);
            }
        },
        value(val) {
            this.store = val;
        },
    },
    mounted() {
        this.$on('init-data', data => {
            this.store = data;
            this.isGroup = true;
        });
    },
};
</script>
