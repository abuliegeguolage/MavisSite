<script setup lang="ts">
import { ref } from 'vue';
import { router } from '../router';
import navis from '../assets/navis.json';

const drawer = ref(false);

const knockTimes = ref(0);
const knockKnock = () => {
    if (++knockTimes.value >= 3) {
        router.push('/secret');
        knockTimes.value = 0;
    }
}

</script>

<template>
    <section class="header">
        <RouterLink to="/">
            <v-btn variant="text">
                <h2 class="logo">
                    <span class="shadow">
                        Site
                    </span>
                    <span class="noumenon">
                        Mavis
                    </span>

                </h2>
            </v-btn>
        </RouterLink>
        <div @click="knockKnock" class="secret"></div>
        <section class="navis">
            <ul class="tabs">
                <li v-for="item in navis">
                    <RouterLink :to="item.path">
                        <v-btn variant="text" class="navi-btn">
                            {{ item.name }}
                        </v-btn>
                    </RouterLink>
                </li>
            </ul>
            <v-layout>
                <v-navigation-drawer v-model="drawer" temporary class="drawer">
                    <v-list density="compact" nav>
                        <RouterLink v-for="item in navis" :to="item.path">
                            <v-list-item>
                                {{ item.name }}
                            </v-list-item>
                        </RouterLink>
                    </v-list>
                </v-navigation-drawer>
            </v-layout>

            <v-btn @click="drawer = !drawer" variant="text" class="tab-folder navi-tab">...</v-btn>
        </section>
    </section>
</template>

<style scoped lang="scss">
.header {
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    width: 100vw;
    height: 10vh;
    color: var(--secondary-color);
    background-color: var(--primary-color);
    border-bottom: 1px solid var(--deeper-primary);

    @media screen and (min-width: 768px) {
        padding-right: 50px;
    }

    .logo {
        cursor: pointer;

        .shadow {
            float: right;
            margin-left: -5px;
            font-style: italic;
            color: var(--transparent-secondary);
        }

        .noumenon {
            color: var(--secondary-color);
        }
    }

    .secret {
        position: absolute;
        left: 170px;
        width: 30px;
        height: 30px;
    }

    .navis {
        .tabs {
            display: flex;

            @media screen and (max-width: 767px) {
                display: none;
            }

            .navi-tab {
                background-color: var(--primary-color);
            }
        }

        .drawer {
            padding: 10px;
            width: 100%;
            color: var(--secondary-color);
            background-color: var(--primary-color);
        }

        .tab-folder {
            font-size: large;
            color: var(--secondary-color);

            @media screen and (min-width: 768px) {
                display: none;
            }
        }
    }
}
</style>