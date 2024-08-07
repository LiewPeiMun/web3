<template>
  <div class="margin-left">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center mb-3">Latest</h2>
      <div class="flex justify-end mb-1">
        <a href="#" class="text-blue-500 font-medium hover:underline">View More></a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="card in donationCards"
          :key="card.eventId"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="card.imageSrc" :alt="card.title" class="w-full" />
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-medium text-gray-800">{{ card.title }}</h3>
              <span class="text-sm font-medium text-gray-600">{{ getProgress(card) }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                class="bg-purple-600 rounded-full h-2.5"
                :style="{ width: `${getProgress(card)}%` }"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-gray-900">{{ card.amount }}</span>
              <span class="text-lg font-bold text-gray-900">of {{ card.goal }}</span>
            </div>
            <div class="mt-4 flex justify-center">
              <button
                @click="() => openModal(card)"
                class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalVisible"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-transparent p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
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
              <option v-for="event in events" :key="event.eventId" :value="event.eventId">
                {{ event.title }}
              </option>
            </select>

            <label for="amount" class="label">Amount (RM)</label>
            <div class="input-group">
              <input
                type="text"
                id="amount"
                v-model="amounts[selectedEventId]"
                class="input"
                aria-label="Enter amount in RM"
              />
              <button type="submit" class="submit-button">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useEventsStore } from '@/stores/useEventStore'
import axios from 'axios'

// Access the event store
const eventStore = useEventsStore()

// Reactive state
const isModalVisible = ref(false)
const selectedEventId = ref('')
const events = computed(() => eventStore.events)
const amounts = ref<{ [key: string]: string }>({})

// Fetch events on component mount
onMounted(async () => {
  await eventStore.fetchEvents()
})

// Computed property for donation cards
const donationCards = computed(() => eventStore.events)

// Method to calculate progress
const getProgress = computed(() => (card: { amount: number; goal: number }) => {
  return Math.min((card.amount / card.goal) * 100, 100).toFixed(2)
})
// Modal control methods
const openModal = (card: { eventId: number; title: string }) => {
  selectedEventId.value = card.eventId.toString()
  if (!amounts.value[selectedEventId.value]) {
    amounts.value[selectedEventId.value] = ''
  }
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
}

// Form submission handler
const handleSubmit = async () => {
  const requestData = {
    UserId: sessionStorage.getItem('userID'), // Convert UserId to number
    EventId: Number(selectedEventId.value), // Convert EventId to number
    Amount: parseFloat(amounts.value[selectedEventId.value]) // Convert Amount to number
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
img {
  height: 225px;
}

.margin-left {
  margin-left: -15px;
}

/* Modal styling */
.fixed {
  z-index: 1000;
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.form-container {
  background: rgba(44, 62, 80, 0.9);
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
