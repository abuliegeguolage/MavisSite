<script setup lang="ts">

</script>

<template>
  <section class="logo">
    <h1>Mavis</h1>
    <h2>Site</h2>
  </section>
  <section class="button-line">
    <RouterLink to="/introduction">
      <v-btn class="link-btn">→ Get Started</v-btn>
    </RouterLink>
  </section>
</template>

<style scoped lang="scss">
.logo {
  margin: auto;
  padding-top: 100px;
  padding-bottom: 40px;
  width: 450px;

  @media screen and (max-width: 767px) {
    padding-top: 150px;
    padding-bottom: 30px;
    width: 100%;
  }

  h1 {
    font-size: 150px;
    line-height: 120px;
    text-align: center;
    color: var(--deeper-primary);

    @media screen and (max-width: 767px) {
      font-size: 80px;
      line-height: 80px;
    }
  }

  h2 {
    font-size: 120px;
    line-height: 100px;
    text-align: center;
    color: var(--primary-color);

    @media screen and (max-width: 767px) {
      font-size: 60px;
      line-height: 60px;
    }
  }
}

.button-line {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 400px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 300px;
  }

  .link-btn {
    color: var(--secondary-color);
    background-color: var(--deeper-primary);
    border-radius: 50px;
  }
}
</style>
