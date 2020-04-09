<template>
    <li
        class="net-dropdown-menu__item"
        :class="{
            'net-dropdown-menu__item--disabled': disabled,
            'net-dropdown-menu__item--divided': divided,
        }"
        @click.stop="handleClick"
    >
        <slot></slot>
    </li>
</template>

<script>
import Emitter from 'net-ui/src/mixins/emitter';

export default {
    name: 'NetDropdownItem',
    mixins: [Emitter],
    props: {
        name: {
            type: [String, Number],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        divided: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick(evt) {
            if (this.disabled) return;
            this.dispatch('NetDropdown', 'menu-item-click', this.name);
        },
    },
};
</script>
