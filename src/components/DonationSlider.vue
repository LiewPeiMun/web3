<template>
  <div class="margin-left">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center mb-3">Latest</h2>
      <div class="flex justify-end mb-1">
        <a href="#" class="text-blue-500 font-medium hover:underline">View More></a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(card, index) in donationCards"
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="card.imageSrc" :alt="card.title" class="w-full" />
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-medium text-gray-800">{{ card.title }}</h3>
              <span class="text-sm font-medium text-gray-600">{{ card.progress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                class="bg-purple-600 rounded-full h-2.5"
                :style="{ width: `${card.progress}%` }"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-gray-900">{{ card.amount }}</span>
              <span class="text-lg font-bold text-gray-900">of {{ card.goal }}</span>
            </div>
            <div class="mt-4 flex justify-center">
              <button
                class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const donationCards = ref([
  {
    imageSrc:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: 'Education',
    progress: 82,
    amount: '$8,848',
    goal: '$10,000'
  },
  {
    imageSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupKldbh5Dg6ksfTILPeU1Tk71zVudk_BXnw&s',
    title: 'Education',
    progress: 70,
    amount: '$8,000',
    goal: '$10,000'
  },
  {
    imageSrc:
      'https://static.vecteezy.com/system/resources/thumbnails/025/880/646/small/luminous-connectivity-abstract-screen-notebook-computer-mockup-in-dark-background-ai-generative-technology-photo.jpg',
    title: 'Education',
    progress: 10,
    amount: '$1,000',
    goal: '$10,000'
  }
])
</script>

<style lang="scss" scoped>
img {
  height: 225px;
}

.margin-left {
  margin-left: -15px;
}
</style>
