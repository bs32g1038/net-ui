<template>
    <span
        class="net-switch"
        :class="[
            size ? `net-switch--${size}` : '',
            {
                'net-switch--disabled': disabled,
                'net-switch--checked': checkStatus,
            },
        ]"
        @click="toggleSwitch"
    >
        <span class="net-switch__text">
            <slot v-if="checkStatus" name="checkedText"></slot>
            <slot v-if="!checkStatus" name="unCheckedText"></slot>
        </span>
    </span>
</template>

<script>
export default {
    name: 'NetSwitch',
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: String,
    },
    data() {
        return {
            checkStatus: this.value,
        };
    },
    methods: {
        toggleSwitch() {
            if (this.disabled) return;

            this.checkStatus = !this.checkStatus;
            this.$emit('change', this.checkStatus);
        },
    },
};
</script>
