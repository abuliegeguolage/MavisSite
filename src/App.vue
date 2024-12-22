<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
main {
  margin: auto;
  width: 70vw;
  min-height: 90vh;
}
</style>
