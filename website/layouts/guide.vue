<template>
    <div class="wrapper">
        <m-header></m-header>
        <div class="net-container row">
            <sidebar :data="navs"></sidebar>
            <div class="net-markdown col-sm-24 col-md-18 col-lg-20">
                <nuxt></nuxt>
            </div>
        </div>
        <m-footer></m-footer>
    </div>
</template>

<script>
import MHeader from '@/components/app-header';
import MFooter from '@/components/app-footer';
import Sidebar from '@/components/sidebar';
import navsConfig from '@/router/nav.config';

export default {
    components: {
        Sidebar,
        MHeader,
        MFooter,
    },
    data() {
        return {
            navs: navsConfig.zh.guide,
        };
    },
    methods: {
        afterLeave() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss">
@import '~@/assets/style/docs.scss';
.wrapper {
    background-color: #f8faff;
}
.page-header {
    position: relative !important;
}
.footer {
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);
}
</style>
