import { defineStore } from 'pinia';
import axios from 'axios';
import type { ICatState, ICatItem } from '@/types/cat';

export const useCatStore = defineStore('api', {
  state: (): ICatState => ({
    apiData: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get<ICatItem[]>('/api/Item/GetItems');
        this.apiData = response.data;
        console.log("this.apiData", response.data);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
