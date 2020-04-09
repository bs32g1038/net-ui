<template>
    <div class="net-sidebar col-sm-24 col-md-6 col-lg-4">
        <nav class="net-nav">
            <template v-for="item in data">
                <div :key="item.title">
                    <h2 class="net-nav__title">{{ item.title }}</h2>
                    <ul class="net-nav__items">
                        <template v-if="item.items">
                            <li class="net-nav__item" v-for="navItem in item.items" :key="navItem.name.toLowerCase()">
                                <nuxt-link class="net-nav__page" :to="navItem.name.toLowerCase()">{{
                                    navItem.title
                                }}</nuxt-link>
                            </li>
                        </template>
                        <li class="net-nav__item active" v-for="group in item.groups" :key="group.title">
                            <a class="net-nav__group" @click="toggleMenu"
                                >{{ group.title }}<i class="icon icon-chevron-down"></i
                            ></a>
                            <ul class="net-nav__child-items">
                                <li class="net-nav__child-item" v-for="navItem in group.items" :key="navItem.title">
                                    <nuxt-link
                                        v-if="lang === 'zh'"
                                        class="net-nav__component"
                                        :to="navItem.name.toLowerCase()"
                                        >{{ navItem.name }}<span>{{ navItem.title }}</span></nuxt-link
                                    >
                                    <nuxt-link v-else class="net-nav__component" :to="navItem.name.toLowerCase()">{{
                                        navItem.title
                                    }}</nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </template>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: [],
        },
    },
    computed: {
        lang() {
            return this.$route.path.split('/')[1] || 'zh';
        },
    },
    methods: {
        toggleMenu(event) {
            const parentNode = event.target.parentNode;
            if (parentNode.classList.contains('active')) {
                parentNode.classList.remove('active');
            } else {
                parentNode.classList.add('active');
            }
        },
    },
};
</script>

<style lang="scss">
@import 'net-ui-theme/src/variables/index.scss';

.net-sidebar {
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    // max-width: 264px;
    color: #3f536e;
    background-color: #fff;
    border-right: 1px solid $grey-100;
    z-index: 99;
}

/**
 * Navigation
 */
.net-nav {
    font-size: 14px;

    &__title {
        padding: 0 24px 8px;
        color: #8dabc4;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    &__group {
        display: block;
        position: relative;
        padding: 6px 0 6px 24px;
        color: #2c405a;
        font-weight: normal;

        &:hover {
            color: $brand-blue-700;
        }
        i {
            position: absolute;
            top: 50%;
            right: 16px;
            margin-top: -7px;
            color: #a8c6df;
            font-size: 14px;
            transition: all 0.3s;
        }
        .active & {
            font-weight: bold;
        }
        .active & i {
            transform: rotate(-180deg);
        }
    }
    &__items {
        margin: 0 0 32px;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.8;
    }
    &__item {
        position: relative;
    }
    &__child-items {
        display: none;

        .active & {
            display: block;
        }
    }
    &__page {
        display: block;
        position: relative;
        padding: 8px 24px;
        color: #3f536e;
        font-weight: normal;
        line-height: 1.5;
        cursor: pointer;

        &:after {
            content: '';
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: #6190e8;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            box-shadow: 1px 0 12px 0 #6190e8;
        }

        &:hover {
            color: $brand-blue-400;
            background-color: rgba(236, 242, 252, 0.25);
        }
        &.active,
        &.nuxt-link-active {
            background-color: rgba(236, 242, 252, 0.2);

            &:after {
                display: inline-block;
            }
            &:hover {
                color: #3f536e;
            }
        }
    }
    &__component {
        display: block;
        position: relative;
        padding: 6px 24px 6px 32px;
        color: #616367;
        font-size: 14px;

        &:after {
            content: '';
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 6px;
            height: 100%;
            background: #6190e8;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            box-shadow: 1px 0 12px 0 #6190e8;
        }
        &:hover {
            color: $brand-blue-400;
            background-color: rgba(236, 242, 252, 0.25);
        }
        &.active,
        &.nuxt-link-active {
            background-color: rgba(236, 242, 252, 0.2);

            &:after {
                display: inline-block;
            }
            &:hover {
                color: #3f536e;
            }
        }
        span {
            padding-left: 6px;
            font-size: 12px;
            opacity: 0.6;
            // color: rgba(255,255,255,.6)
        }
    }
}
.net-nav__arrow {
    position: absolute;
    top: 18px;
    right: 12px;
    width: 16px;
    opacity: 0.25;
    margin: -4px 0 0;

    .active & {
        transform: rotate(180deg);
    }
}
.net-nsc,
.net-nsc:focus,
.net-nsc:hover,
.net-nsc:active,
.net-nsc:visited {
    color: #fff;
}
</style>
