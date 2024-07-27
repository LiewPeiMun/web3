// stores/events.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface Event {
  eventId: number;
  title: string;
  goal: number;
  imageSrc: string;
  amount: number;
}

interface EventsState {
  events: Event[];
  error: string | null;
}

export const useEventsStore = defineStore('events', {
  state: (): EventsState => ({
    events: [],
    error: null,
  }),
  actions: {
    async fetchEvents() {
      this.error = null;

      try {
        const response = await axios.get('http://subnetapi.runasp.net/Event/GetEvents');
        this.events = response.data;
        console.log("response", this.events)
      } catch (error: any) {
        console.error('Error fetching events:', error);
        this.error = 'Failed to fetch events.';
      }
    },
  },
});
