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
        <option value="" disabled>Select an event</option>
        <option v-for="event in events" :key="event.eventId" :value="event.eventId">
          {{ event.title }}
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

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useEventsStore } from '@/stores/useEventStore'
import axios from 'axios'

// Access the event store
const eventStore = useEventsStore()
const events = computed(() => eventStore.events)
const amount = ref('')
const selectedEventId = ref<string | null>(null)

onMounted(() => {
  eventStore.fetchEvents()
})

const handleSubmit = async () => {
  const requestData = {
    UserId: sessionStorage.getItem('userID'), // Convert UserId to number
    EventId: Number(selectedEventId.value), // Convert EventId to number
    Amount: parseFloat(amount.value) // Convert Amount to number
  }

  try {
    const response = await axios.post(
      'http://subnetapi.runasp.net/Donate/MemberDonation',
      requestData
    )

    if (response.data.status === 1) {
      location.reload()
    } else {
      console.error('Submission failed:', response.data.message)
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Error submitting form:', {
        message: error.message,
        status: error.response.status,
        data: error.response.data
      })
    } else {
      console.error('Unexpected error:', error)
    }
  }
}
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
