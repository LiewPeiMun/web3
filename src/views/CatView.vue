<template>
  <div>
    <h1 class="text-3xl font-bold underline">HTTP API</h1>
    <button @click="fetchCat">Fetch Api</button>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-for="item in apiData" :key="item.id">
        ID: {{ item.id }}, Name: {{ item.name }}, Status: {{ item.status }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCatStore } from '@/stores/cat';

// Access the Pinia store
const catStore = useCatStore();

// Function to fetch data from the API
const fetchCat = async () => {
  await catStore.fetchData();
};

// Use computed properties to map the store state
const loading = computed(() => catStore.loading);
const apiData = computed(() => catStore.apiData);
const error = computed(() => catStore.error);
</script>
