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

const eventStore = useEventsStore()
const events = computed(() => eventStore.events)
const amount = ref('')
const selectedEventId = ref<string | null>(null)

onMounted(() => {
  eventStore.fetchEvents()
})

const handleSubmit = async () => {
  const requestData = {
    UserId: sessionStorage.getItem('userID'),
    EventId: Number(selectedEventId.value),
    Amount: parseFloat(amount.value)
  }

  try {
    const response = await eventStore.submitTransaction(requestData)

    if (response?.status === 1) {
      console.log('Response:', response)
      console.log('Initial Amount:', response.donatedAmount.initialAmount)
      console.log('Deduction:', response.donatedAmount.deduction)
      console.log('Final Amount:', response.donatedAmount.finalAmount)
      console.log('Event Title:', response.event.title)

      // Redirect to the certification page
      location.href = '#/certification'
    } else {
      console.error('Submission failed:', response.message)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
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
