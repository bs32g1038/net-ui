<template>
    <transition name="fade">
        <div
            class="net-loading-bar"
            :class="{
                [`net-loading-bar--${status}`]: status,
            }"
            :style="barStyle"
            v-show="show"
        >
            <div class="net-loading-bar__inner" :style="{ width: percent + '%' }"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'NetLoadingBar',
    data() {
        return {
            show: false,
            status: 'success',
            percent: 0,
            width: 2,
        };
    },
    computed: {
        barStyle() {
            return {
                height: `${this.width | 0 || 2}px`,
            };
        },
    },
};
</script>
