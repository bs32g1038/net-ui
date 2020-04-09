<template>
    <div class="net-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
import { findComponentsDownward } from 'net-ui/src/utils/util';
import Emitter from 'net-ui/src/mixins/emitter';

export default {
    name: 'NetCheckboxGroup',
    mixins: [Emitter],
    props: {
        value: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            currentValue: this.value,
            childrens: [],
        };
    },
    watch: {
        value(value) {
            this.updateModel();
        },
    },
    methods: {
        updateModel() {
            const value = this.value;
            this.childrens = findComponentsDownward(this, 'NetCheckbox');

            if (this.childrens) {
                this.childrens.forEach(child => {
                    child.model = value;
                    child.currentValue = value.indexOf(child.label) >= 0;
                    child.isGroup = true;
                });
            }
        },
        change(data) {
            this.currentValue = data;
            this.$emit('input', data);
            this.$emit('on-change', data);
        },
    },
    mounted() {
        this.updateModel();
    },
};
</script>
