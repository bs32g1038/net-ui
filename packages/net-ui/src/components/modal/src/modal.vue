<template>
    <div>
        <transition name="fade">
            <div class="net-modal__mask" v-show="visible" @click="handleMaskClick"></div>
        </transition>
        <!-- / mask -->
        <div
            class="net-modal__wrapper"
            :class="{
                'net-modal--hidden': !wrapShow,
                'net-modal--confirm': isIconType,
                [`net-modal--confirm-${type}`]: isIconType,
            }"
            @click.self="handleWrapperClick"
        >
            <transition name="fade">
                <div class="net-modal" :style="modalStyle" v-show="visible">
                    <div class="net-modal__header" v-if="showHead && ($slots.header || this.title)">
                        <div class="net-modal__title">
                            <slot name="header">
                                <p>{{ title }}</p>
                            </slot>
                        </div>
                    </div>
                    <div class="net-modal__body">
                        <slot>
                            <p>{{ content }}</p>
                            <div class="net-modal__input" v-if="showInput">
                                <net-input
                                    v-model="inputValue"
                                    :placeholder="inputPlaceholder"
                                    @keyup.enter.native="handleAction('confirm')"
                                    ref="input"
                                ></net-input>
                            </div>
                        </slot>
                    </div>
                    <div class="net-modal__footer" v-if="showFooter">
                        <slot name="footer">
                            <net-button v-show="showCancelButton" @click.native="handleAction('cancel')">{{
                                localeCancelText
                            }}</net-button>
                            <net-button
                                type="primary"
                                v-show="showConfirmButton"
                                @click.native="handleAction('confirm')"
                                >{{ localeOKText }}</net-button
                            >
                        </slot>
                    </div>
                    <i v-if="isIconType" class="icon net-modal__icon" :class="iconClass"></i>
                    <span v-if="showClose" class="net-modal__close" @click="handleAction('cancel')"
                        ><i class="icon icon-x"></i
                    ></span>
                </div>
            </transition>
        </div>
        <!-- / wrap -->
    </div>
</template>

<script>
import { t } from 'net-ui/src/locale';

export default {
    name: 'NetModal',
    props: {
        title: String,
        content: String,
        value: {
            type: Boolean,
            default: false,
        },
        cancelText: {
            type: String,
        },
        okText: {
            type: String,
        },
        maskClosable: {
            type: Boolean,
            default: true,
        },
        showHead: {
            type: Boolean,
            default: true,
        },
        showClose: {
            type: Boolean,
            default: true,
        },
        showFooter: {
            type: Boolean,
            default: true,
        },
        showInput: {
            type: Boolean,
            default: false,
        },
        width: {
            type: [Number, String],
            default: 520,
        },
        closeOnPressEsc: {
            type: Boolean,
            default: true,
        },
        styles: {
            type: Object,
            default() {
                return {};
            },
        },
        type: String,
    },
    data() {
        return {
            wrapShow: false,
            showCancelButton: true,
            showConfirmButton: true,
            action: '',
            visible: this.value,
            inputValue: null,
            inputPlaceholder: '',
            callback: null,
        };
    },
    computed: {
        iconClass() {
            const classArr = {
                success: 'icon-check-circle',
                error: 'icon-x-circle',
                warning: 'icon-alert-circle',
                info: 'icon-info',
            };

            return classArr[this.type] || '';
        },
        isIconType() {
            return ['success', 'error', 'warning', 'info'].indexOf(this.type) > -1;
        },
        modalStyle() {
            const style = {};
            const styleWidth = {
                width: `${this.width}px`,
            };

            Object.assign(style, styleWidth, this.styles);

            return style;
        },
        localeOKText() {
            return typeof this.okText === 'undefined' ? t('at.modal.okText') : this.okText;
        },
        localeCancelText() {
            return typeof this.cancelText === 'undefined' ? t('at.modal.cancelText') : this.cancelText;
        },
    },
    watch: {
        value(val) {
            this.visible = val;
        },
        visible(val) {
            if (val) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.wrapShow = true;
            } else {
                this.timer = setTimeout(() => {
                    this.wrapShow = false;
                }, 300);
            }
        },
    },
    methods: {
        doClose() {
            this.visible = false;
            this.$emit('input', false);
            this.$emit('on-cancel');

            if (this.action && this.callback) {
                this.callback(this.action, this);
            }
        },
        handleMaskClick(evt) {
            if (this.maskClosable) {
                this.doClose();
            }
        },
        handleWrapperClick(evt) {
            if (this.maskClosable) {
                this.doClose();
            }
        },
        handleAction(action) {
            this.action = action;

            if (action === 'confirm') {
                this.$emit('input', false);
                this.$emit('on-confirm');
            }

            this.doClose();
        },
        handleKeyCode(evt) {
            if (this.visible && this.showClose) {
                if (evt.keyCode === 27) {
                    // Escape
                    this.doClose();
                }
            }
        },
    },
    mounted() {
        if (this.visible) {
            this.wrapShow = true;
        }

        document.addEventListener('keydown', this.handleKeyCode);
    },
    beforeDestory() {
        document.removeEventListener('keydown', this.handleKeyCode);
    },
};
</script>
