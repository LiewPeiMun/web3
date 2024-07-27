<template>
  <div class="about">
    <h1 @click="onClick">This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';

 const onClick = () => {
  router.push({name: "home"})
 }

</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
