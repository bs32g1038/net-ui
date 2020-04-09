<template>
    <form class="net-form" :class="[layout ? 'net-form--label-' + layout : '', inline ? 'net-form--inline' : '']">
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'NetForm',
    props: {
        model: Object,
        rules: Object,
        labelWidth: Number,
        layout: {
            type: String,
            validator: val => ['horizontal', 'vertical', 'inline'].indexOf(val) > -1,
        },
        inline: {
            type: Boolean,
            default: false,
        },
        showMessage: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            fields: [],
        };
    },
    methods: {
        resetFields() {
            this.fields.forEach(field => {
                field.resetField();
            });
        },
        validate(callback) {
            let valid = true;
            let count = 0;
            this.fields.forEach(field => {
                field.validate('', errors => {
                    if (errors) {
                        valid = false;
                    }
                    if (typeof callback === 'function' && ++count === this.fields.length) {
                        callback(valid);
                    }
                });
            });
        },
        validateField(prop, callback) {
            const field = this.fields.filter(field => field.prop === prop)[0];

            if (!field) {
                throw new Error('Must call validateField with valid prop string!');
            }

            field.validate('', callback);
        },
    },
    watch: {
        rules() {
            this.validate();
        },
    },
    created() {
        this.$on('on-form-item-add', field => {
            if (field) {
                this.fields.push(field);
            }
        });

        this.$on('on-form-item-remove', field => {
            if (field.prop) {
                this.fields.splice(this.fields.indexOf(field), 1);
            }
        });
    },
};
</script>
