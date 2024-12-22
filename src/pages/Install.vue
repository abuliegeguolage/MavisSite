<script setup lang="ts">
import { ref } from 'vue';
const tab = ref(null);
</script>

<template>
    <h3 class="big-title">
        如何將Mavis加入您的團隊？
    </h3>

    <v-card class="card">
        <v-tabs v-model="tab" class="tab-box">
            <v-tab value="jobBank" class="tab">104 人力銀行</v-tab>
            <v-tab value="email" class="tab">電子信箱</v-tab>
        </v-tabs>
        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="jobBank" class="text">
                    歡迎透過
                    <a href="https://www.104.com.tw">104 人力銀行</a>
                    發出邀請！
                </v-tabs-window-item>

                <v-tabs-window-item value="email" class="text">
                    寄信到 mavis48937078@gmail.com 即可～
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<style scoped lang="scss">
h3 {
    padding-top: 20vh;
}

.card {

    .tab-box {
        background-color: var(--deeper-primary);

        .tab {
            color: var(--secondary-color);
        }
    }

    .text {
        cursor: text;
        color: var(--primary-color);

        a {
            text-decoration: underline;
            color: var(--deeper-primary);
            border-radius: 6px;
            transition: .3s;

            &:hover {
                background-color: var(--secondary-color);
                box-shadow: 0 0 10px var(--secondary-color);
            }
        }
    }
}
</style>