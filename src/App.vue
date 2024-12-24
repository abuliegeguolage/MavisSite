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
  padding: 0 5vw;
  width: 80vw;
  min-height: 90vh;
  background-color: rgba(255, 255, 255, .7);
}
</style>
