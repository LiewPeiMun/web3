<template>
  <div class="bg-gray-100">
    <Navbar />
    <CarouselSlider />
    <DonationSlider />
    <NewSection />
    <QuotesSection />
    <div class="img">
      <img :src="'src/assets/images/tiering.png'" />
    </div>
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import CarouselSlider from '@/components/CarouselSlider.vue'
import DonationSlider from '@/components/DonationSlider.vue'
import NewSection from '@/components/NewsSection.vue'
import QuotesSection from '@/components/QuotesSection.vue'
import FooterView from '@/components/FooterView.vue'
</script>

<style scoped>
.img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
