<script setup lang="ts">

const overlay = defineModel({ default: false });

const props = defineProps<{
    slides: string[]
}>();

</script>

<template>
    <v-overlay v-model="overlay" class="overlay">
        <div class="presentation-box">
            <v-carousel hide-delimiters show-arrows="hover">
                <template v-slot:prev="{ props }">
                    <v-btn color="white" variant="elevated" @click="props.onClick" class="arrow">＜</v-btn>
                </template>
                <template v-slot:next="{ props }">
                    <v-btn color="white" variant="elevated" @click="props.onClick" class="arrow">＞</v-btn>
                </template>
                <v-carousel-item v-for="slide in props.slides" :src="slide" cover></v-carousel-item>
            </v-carousel>
        </div>
    </v-overlay>
</template>

<style scoped lang="scss">
.overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    .presentation-box {
        margin: auto;
        min-width: 80vw;

        .arrow {
            width: 40px;
            min-width: unset;
            height: 40px;
            line-height: 40px;
            align-items: center;
            border-radius: 50%;
        }
    }
}
</style>