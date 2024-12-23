<script setup lang="ts">
import ProjeCard from '../components/ProjeCard.vue';
import findingFile from '../assets/images/finding-file.webp';
import weUseCookie from '../assets/images/we-use-cookie.webp';

const projectDatas = [
    {
        img: findingFile,
        name: 'Finding File',
        desc: '一個以創意交互功能為特色的網站。與小貓一起踏上尋找機密文件的旅程吧～',
        siteLink: 'https://abuliegeguolage.github.io/findingfile/#/',
        githubLink: 'https://github.com/abuliegeguolage/findingfile',
        raderValue: [6, 5, 5, 6, 3]
    },
    {
        img: weUseCookie,
        name: '都士嘉德官方網站',
        desc: '一個虛構餅乾店的官網。雖然餅乾和店都是假的，但網站是真的！',
        siteLink: 'https://abuliegeguolage.github.io/WeUseCookie/#/',
        githubLink: 'https://github.com/abuliegeguolage/WeUseCookie',
        raderValue: [5, 3, 3, 4, 6]
    }
];
</script>

<template>
    <h3 class="big-title">
        專案作品：
    </h3>
    <div class="card-box">
        <ProjeCard v-for="item in projectDatas" :data="item">
        </ProjeCard>
    </div>
</template>

<style scoped lang="scss">
.card-box {
    width: 100%;
}
</style>