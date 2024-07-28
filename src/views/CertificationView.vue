<script setup lang="ts">
import Usercert from '@/components/Usercert.vue'
</script>

<template>
  <div class="background-wrapper">
    <Usercert />
  </div>
</template>

<style lang="scss">
.background-wrapper {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust based on your layout requirements */
  overflow: hidden;
}

.background-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_640.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.8; /* Set the image opacity */
  z-index: -1; /* Ensure the image stays behind the content */
}

.background-wrapper > * {
  position: relative; /* Ensure content stays above the pseudo-element */
  z-index: 1;
}
</style>
