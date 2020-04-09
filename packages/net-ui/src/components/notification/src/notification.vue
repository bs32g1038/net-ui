<template>
    <transition name="notification-fade" @after-leave="doDestory">
        <div
            class="net-notification"
            :class="{
                [`net-notification--${type}`]: type,
                'net-notification--with-message': message,
                'net-notification--hover': !showClose,
            }"
            :style="{ top: top ? top + 'px' : 'auto' }"
            v-show="isShow"
            @click="!showClose && handleClose()"
            @mouseleave="startTimer"
            @mouseenter="clearTimer"
        >
            <i class="icon net-notification__icon" :class="iconClass" v-if="showIcon"></i>
            <div class="net-notification__content">
                <p class="net-notification__title" v-if="title" v-text="title"></p>
                <p class="net-notification__message" v-if="message" v-text="message"></p>
            </div>
            <i class="icon icon-x net-notification__close" v-show="showClose" @click="handleClose"></i>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            type: '',
            title: '',
            message: '',
            isShow: false,
            duration: 4000,
            icon: '',
            showClose: true,
            onClose: null,
            top: null,
            timer: null,
            closed: false,
        };
    },
    watch: {
        closed(val) {
            if (val) {
                this.isShow = false;
            }
        },
    },
    computed: {
        iconClass() {
            const classArr = {
                success: 'icon-check-circle',
                error: 'icon-x-circle',
                warning: 'icon-alert-circle',
                info: 'icon-info',
            };
            return classArr[this.type] || this.icon;
        },
        showIcon() {
            return this.type;
        },
    },
    methods: {
        doDestory() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        handleClose() {
            this.closed = true;
            if (typeof this.onClose === 'function') {
                this.onClose();
            }
        },
        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.handleClose();
                    }
                }, this.duration);
            }
        },
        clearTimer() {
            clearTimeout(this.timer);
        },
    },
    mounted() {
        this.startTimer();
    },
};
</script>
