<template>
<div>
      <h1>HTTP Cat API</h1>
      <input v-model="statusCode" placeholder="Enter HTTP Status Code" />
      <button @click="fetchCat">Fetch Cat</button>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <img v-else-if="apiData" :src="`https://http.cat/${statusCode}`" :alt="`HTTP Cat ${statusCode}`" />
    </div>
</template>
  
<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useCatStore } from '@/stores/cat';
  
  // Create a ref for the status code input
  const statusCode = ref<string>('');
  
  // Access the Pinia store
  const catStore = useCatStore();
  
  // Function to fetch data from the API
  const fetchCat = async () => {
    await catStore.fetchData(statusCode.value);
  };
  
  // Use computed properties to map the store state
  const loading = computed(() => catStore.loading);
  const apiData = computed(() => catStore.apiData);
  const error = computed(() => catStore.error);
</script>

  