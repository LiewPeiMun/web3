<template>
  <div class="margin-left">
    <div class="relative w-full max-w-full mx-auto overflow-hidden">
      <!-- Slides -->
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
          <img :src="slide" class="w-full h-auto object-cover" alt="image" />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2"
        @click="prevSlide"
      >
        <
      </button>
      <button
        class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2"
        @click="nextSlide"
      >
        >
      </button>

      <!-- Indicators -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="block w-4 h-4 bg-gray-700 rounded-full cursor-pointer"
          :class="{ 'bg-blue-500': index === currentIndex }"
        ></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Define the slides
const slides = ref([
  'src/assets/images/slider1.png',
  'src/assets/images/slider2.png',
  'src/assets/images/slider3.png'
])

// Track the current slide index
const currentIndex = ref(0)

// Go to the previous slide
const prevSlide = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : slides.value.length - 1
}

// Go to the next slide
const nextSlide = () => {
  currentIndex.value = currentIndex.value < slides.value.length - 1 ? currentIndex.value + 1 : 0
}

// Go to a specific slide
const goToSlide = (index: number) => {
  currentIndex.value = index
}

// Automatic sliding
let slideInterval: NodeJS.Timeout

onMounted(() => {
  slideInterval = setInterval(() => {
    nextSlide()
  }, 3000) // 3000 milliseconds = 3 seconds
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.margin-left {
  margin-left: -14px;
}
</style>
