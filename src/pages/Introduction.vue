<script setup lang="ts">
const skills = ['HTML', 'CSS', 'JavaScript', 'Vue3', 'Sass', 'RWD'];
</script>

<template>
    <h3 class="big-title">簡介</h3>
    <p>Mavis 是一個充滿創意與熱情的前端工程師，現可支援以下技術：</p>
    <ul>
        <li v-for="skill in skills">．{{ skill }}</li>
    </ul>
    <p>
        若想了解實際運作成果，請移步
        <RouterLink to="/project" class="link">專案作品</RouterLink>
        。
    </p>
</template>

<style scoped lang="scss">
p {
    color: var(--primary-color);

    .link {
        color: var(--deeper-primary);
        text-decoration: underline;
        transition: .3s;

        &:hover {
            text-shadow: 0 0 6px var(--primary-color);
        }
    }
}

ul {
    padding: 10px 2em;

    li {
        color: var(--deeper-primary);
    }
}
</style>