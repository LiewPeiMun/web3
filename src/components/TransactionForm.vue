<template>
  <section class="form-container">
    <h1 class="title">Transaction</h1>
    <form @submit.prevent="handleSubmit" class="form">
      <label for="event-id" class="label">Donation Event</label>
      <select
        id="event-id"
        v-model="selectedEventId"
        class="input"
        aria-label="Select donation event"
      >
        <option v-for="event in events" :key="event.id" :value="event.id">
          {{ event.name }}
        </option>
      </select>
      
      <label for="amount" class="label">Amount (RM)</label>
      <div class="input-group">
        <input
          type="text"
          id="amount"
          v-model="amount"
          class="input"
          aria-label="Enter amount in RM"
        />
        <button type="submit" class="submit-button">Submit</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'TransactionForm',
  setup() {
    const amount = ref('');
    const selectedEventId = ref('');
    const events = ref<{ id: string; name: string }[]>([]);

    // Fetch donation events from API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://subnetapi.runasp.net/Event/GetEvents');
        events.value = response.data; // Adjust if the response structure is different
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    onMounted(() => {
      fetchEvents();
    });

    const handleSubmit = () => {
      console.log('Form submitted with amount:', amount.value);
      console.log('Selected donation event ID:', selectedEventId.value);
    };

    return {
      amount,
      selectedEventId,
      events,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.form-container {
  background: #2c3e50;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
  position: relative;
}

.title {
  color: #fff;
  margin-bottom: 20px;
  font-size: 24px;
}

.form {
  display: flex;
  flex-direction: column;
}

.label {
  color: #fff;
  margin-bottom: 8px;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input {
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
}

.submit-button {
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #218838;
}
</style>
