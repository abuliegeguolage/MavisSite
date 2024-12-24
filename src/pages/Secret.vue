<script setup lang="ts">
import { ref } from 'vue';
import Presentation from '../components/Presentation.vue';
import cover from '../assets/images/slides/cover.webp';
import slideDirectory from '../assets/images/slides/slide-directory.webp';
import slide1 from '../assets/images/slides/slide1.webp';
import slide2 from '../assets/images/slides/slide2.webp';
import slide3 from '../assets/images/slides/slide3.webp';
import slide4 from '../assets/images/slides/slide4.webp';
import slide5 from '../assets/images/slides/slide5.webp';
import slide6 from '../assets/images/slides/slide6.webp';
import slide7 from '../assets/images/slides/slide7.webp';

const overlay = ref(false);

const slides = [cover, slideDirectory, slide1, slide2, slide3, slide4, slide5, slide6, slide7];

</script>

<template>
    <div class="wrapper">
        <h3 class="big-title">歡迎來到隱藏頁面！</h3>
        <div @click="overlay = !overlay" class="treasure-box">
            <div class="box-part lid"></div>
            <div class="box-part chest"></div>
            <div class="box-part lock"></div>
        </div>
    </div>
    <Presentation v-model="overlay" :slides="slides"></Presentation>
</template>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;

    .treasure-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 250px;
        height: 160px;
        border-radius: 50px;
        box-shadow: 0 0 50px white;
        transition: .3s;
        cursor: pointer;

        &:hover {
            box-shadow: 0 0 100px lightyellow;
        }

        .box-part {
            background-color: white;
            border: 2px solid var(--secondary-color);
            border-radius: 6px;
        }

        .lid {
            width: 100%;
            height: 40%;
            border-radius: 50px 50px 6px 6px;
        }

        .chest {
            width: 100%;
            height: 60%;
        }

        .lock {
            position: absolute;
            top: 30%;
            left: 40%;
            width: 20%;
            height: 20%;
            border-width: 4px;
        }
    }
}
</style>