<template>
  <main
    ref="content"
    class="flex flex-col items-center px-9 pt-8 pb-20 bg-zinc-300 max-w-[534px] max-md:px-5 overflow-y-auto max-h-screen"
  >
    <header>
      <h1 class="text-xl font-bold uppercase text-zinc-500">EduChainAid</h1>
      <p class="mt-2 text-xs font-medium tracking-widest text-black uppercase">
        Fueling Undergraduate's Dreams
      </p>
    </header>
    <section
      class="flex flex-col self-stretch pt-20 pr-2.5 pb-5 pl-6 mt-5 bg-gray-800 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full"
    >
      <form class="mt-1 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-col gap-6 max-md:flex-col">
          <!-- User ID Section -->
          <div class="flex flex-col gap-2">
            <label for="userId" class="text-base font-medium leading-6 text-white">User ID:</label>
            <div
              class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]"
            >
              <span class="text-base font-medium text-gray-800">{{ formData.userId }}</span>
            </div>
          </div>
          <!-- Event ID Section -->
          <div class="flex flex-col gap-2">
            <label for="eventId" class="text-base font-medium leading-6 text-white"
              >Event ID:</label
            >
            <div
              class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]"
            >
              <input
                id="eventId"
                type="text"
                v-model="formData.eventId"
                class="bg-transparent border-none w-full h-[27px] text-gray-800"
              />
            </div>
          </div>
          <!-- Event Name Section -->
          <div class="flex flex-col gap-2">
            <label for="eventName" class="text-base font-medium leading-6 text-white"
              >Event Name:</label
            >
            <div
              class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]"
            >
              <input
                id="eventName"
                type="text"
                v-model="formData.eventName"
                class="bg-transparent border-none w-full h-[27px] text-gray-800"
              />
            </div>
          </div>
          <!-- Amount Section -->
          <div class="flex flex-col gap-2">
            <label for="amount" class="text-base font-medium leading-6 text-white"
              >Initial Donation:</label
            >
            <div
              class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]"
            >
              <input
                id="amount"
                type="text"
                v-model="formData.initialAmount"
                readonly
                class="bg-transparent border-none w-full h-[27px] text-gray-800"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="amount" class="text-base font-medium leading-6 text-white"
              >Deduction:</label
            >
            <div
              class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]"
            >
              <input
                id="amount"
                type="text"
                v-model="formData.deduction"
                readonly
                class="bg-transparent border-none w-full h-[27px] text-gray-800"
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="amount" class="text-base font-medium leading-6 text-white"
              >Final Amount:</label
            >
            <div
              class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]"
            >
              <input
                id="amount"
                type="text"
                v-model="formData.finalAmount"
                readonly
                class="bg-transparent border-none w-full h-[27px] text-gray-800"
              />
            </div>
          </div>
        </div>
      </form>
      <div
        class="flex gap-5 justify-between self-end mt-10 mr-6 text-base font-medium leading-6 text-white whitespace-nowrap max-md:mt-10 max-md:mr-2.5"
      >
        <button
          id="cancelButton"
          class="px-4 py-3.5 rounded-lg bg-zinc-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
        >
          Cancel
        </button>
        <button
          id="downloadButton"
          @click="downloadPDF"
          class="px-4 py-3.5 rounded-lg bg-green-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
        >
          Download
        </button>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
// @ts-ignore
import html2pdf from 'html2pdf.js'
import { useEventsStore } from '@/stores/useEventStore'

export default defineComponent({
  name: 'EduChainAid',
  setup() {
    const eventStore = useEventsStore()

    const formData = ref({
      userId: '',
      eventId: '',
      eventName: '',
      initialAmount: '',
      deduction: '',
      finalAmount: ''
    })

    onMounted(() => {
      if (eventStore.transactionResponse) {
        formData.value.userId = sessionStorage.getItem('userID') || ''
        formData.value.eventId = eventStore.transactionResponse.event.eventId.toString()
        formData.value.eventName = eventStore.transactionResponse.event.title
        formData.value.initialAmount =
          eventStore.transactionResponse.donatedAmount.initialAmount.toString()
        formData.value.deduction = eventStore.transactionResponse.donatedAmount.deduction.toString()
        formData.value.finalAmount =
          eventStore.transactionResponse.donatedAmount.finalAmount.toString()
      }
    })

    const downloadPDF = () => {
      // Hide the button
      const downloadButton = document.querySelector('#downloadButton') as HTMLElement
      const cancelButton = document.querySelector('#cancelButton') as HTMLElement
      if (downloadButton) downloadButton.style.display = 'none'
      if (cancelButton) cancelButton.style.display = 'none'
      // Move the form to the right
      const content = document.querySelector('main') as HTMLElement
      if (content) {
        // Add a class or inline styles to shift the content
        content.style.position = 'relative'
        content.style.left = '15px' // Adjust this value as needed
        content.style.transform = 'scale(0.8)' // Optional: for smoother movement
        content.style.margin = '0'
      }

      const options = {
        margin: 1,
        filename: 'edu-chain-aid.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }

      html2pdf()
        .from(content)
        .set(options)
        .save()
        .then(() => {
          // Reset the styles after the PDF is generated
          if (content) {
            content.style.position = ''
            content.style.left = ''
            content.style.transform = ''
          }

          // Show the button again after the PDF is generated
          if (downloadButton) downloadButton.style.display = 'block'
          if (cancelButton) cancelButton.style.display = 'block'
        })
    }

    return {
      formData,
      downloadPDF
    }
  }
})
</script>
