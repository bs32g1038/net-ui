<template>
    <div class="net-tooltip">
        <span class="net-tooltip__trigger" ref="trigger">
            <slot></slot>
        </span>

        <transition :name="transition" @after-leave="doDestory">
            <div
                class="net-tooltip__popper"
                :class="[placement ? 'net-tooltip--' + placement : 'net-tooltip--top']"
                v-if="show"
                ref="popover"
            >
                <div class="net-tooltip__arrow"></div>
                <div class="net-tooltip__content">
                    <slot name="content"><div v-text="content"></div></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import PopoverMixin from 'net-ui/src/mixins/popover';

export default {
    name: 'AtTooltip',
    mixins: [PopoverMixin],
    props: {
        trigger: {
            type: String,
            default: 'hover',
        },
        transition: {
            type: String,
            default: 'fade',
        },
    },
};
</script>
