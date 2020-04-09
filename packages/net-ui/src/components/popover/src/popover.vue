<template>
    <div class="net-popover" v-clickoutside="handleClose" ref="parent">
        <span class="net-popover__trigger" ref="trigger">
            <slot></slot>
        </span>

        <transition :name="transition" @after-leave="doDestory">
            <div
                class="net-popover__popper"
                :class="[placement ? 'net-popover--' + placement : 'net-popover--top']"
                v-if="show"
                ref="popover"
            >
                <div class="net-popover__arrow"></div>
                <div class="net-popover__title" v-if="title">
                    <slot name="title"><div v-html="title"></div></slot>
                </div>
                <div class="net-popover__content">
                    <slot name="content"><div v-html="content"></div></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Clickoutside from 'net-ui/src/directives/clickoutside';
import PopoverMixin from 'net-ui/src/mixins/popover';

export default {
    name: 'AtPopover',
    mixins: [PopoverMixin],
    directives: { Clickoutside },
    props: {
        trigger: {
            type: String,
            default: 'click',
        },
        transition: {
            type: String,
            default: 'fade',
        },
    },
    watch: {
        value(value) {
            this.show = value;
        },
    },
    methods: {
        handleClose() {
            this.show = false;
        },
    },
};
</script>
