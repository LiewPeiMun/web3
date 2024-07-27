import { defineStore } from 'pinia';
import axios from 'axios';
import type { ICatState } from '@/types/cat';

export const useCatStore = defineStore('api', {
  state: (): ICatState => ({
    apiData: {},
    loading: false,
    error: null
  }),
  actions: {
    async fetchData(statusCode: string) {
      this.loading = true;
      try {
        const response = await axios.get(`https://http.cat/${statusCode}`);
        this.apiData = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
