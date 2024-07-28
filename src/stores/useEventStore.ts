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

interface DonatedAmount {
  initialAmount: number;
  deduction: number;
  finalAmount: number;
}

interface TransactionResponse {
  status: number;
  message: string;
  donatedAmount: DonatedAmount;
  event: Event;
}

interface EventsState {
  events: Event[];
  error: string | null;
  transactionResponse: TransactionResponse | null;
}

export const useEventsStore = defineStore('events', {
  state: (): EventsState => ({
    events: [],
    error: null,
    transactionResponse: null,
  }),
  actions: {
    async fetchEvents() {
      this.error = null;
      try {
        const response = await axios.get('http://subnetapi.runasp.net/Event/GetEvents');
        this.events = response.data;
      } catch (error: any) {
        console.error('Error fetching events:', error);
        this.error = 'Failed to fetch events.';
      }
    },
    async submitTransaction(requestData: { UserId: string | null; EventId: number; Amount: number }) {
      this.error = null;
      try {
        const response = await axios.post(
          'http://subnetapi.runasp.net/Donate/MemberDonation',
          requestData
        );
        this.transactionResponse = response.data;
        return response.data;
      } catch (error: any) {
        console.error('Error submitting transaction:', error);
        this.error = 'Failed to submit transaction.';
        return null;
      }
    },
  },
});
