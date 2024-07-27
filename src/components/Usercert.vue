<template>
  <main class="flex flex-col items-center px-9 pt-8 pb-20 bg-zinc-300 max-w-[534px] max-md:px-5">
    <header>
      <h1 class="text-xl font-bold uppercase text-zinc-500">EduChainAid</h1>
      <p class="mt-2 text-xs font-medium tracking-widest text-black uppercase">
        Fueling Undergraduate's Dreams
      </p>
    </header>
    <section class="flex flex-col self-stretch pt-20 pr-2.5 pb-5 pl-6 mt-5 bg-gray-800 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full">
      <form class="mt-11 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-col gap-6 max-md:flex-col">
          <!-- User ID Section -->
          <div class="flex flex-col gap-2">
            <label for="userId" class="text-base font-medium leading-6 text-white">User ID:</label>
            <div class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]">
              <span class="text-base font-medium text-gray-800">{{ formData.userId }}</span>
            </div>
          </div>
          <!-- Event ID Section -->
          <div class="flex flex-col gap-2">
            <label for="eventId" class="text-base font-medium leading-6 text-white">Event ID:</label>
            <div class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]">
              <input id="eventId" type="text" v-model="formData.eventId" class="bg-transparent border-none w-full h-[27px] text-gray-800" />
            </div>
          </div>
          <!-- Event Name Section -->
          <div class="flex flex-col gap-2">
            <label for="eventName" class="text-base font-medium leading-6 text-white">Event Name:</label>
            <div class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]">
              <input id="eventName" type="text" v-model="formData.eventName" class="bg-transparent border-none w-full h-[27px] text-gray-800" />
            </div>
          </div>
          <!-- Amount Section -->
          <div class="flex flex-col gap-2">
            <label for="amount" class="text-base font-medium leading-6 text-white">Amount:</label>
            <div class="bg-white rounded-lg border border-gray-300 border-solid p-2 shadow-[0px_0px_2px_rgba(0,0,0,0.02)]">
              <input id="amount" type="text" v-model="formData.amount" readonly class="bg-transparent border-none w-full h-[27px] text-gray-800" />
            </div>
          </div>
        </div>
      </form>
      <div class="flex gap-5 justify-between self-end mt-10 mr-6 text-base font-medium leading-6 text-white whitespace-nowrap max-md:mt-10 max-md:mr-2.5">
        <button class="px-4 py-3.5 rounded-lg bg-zinc-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
          Cancel
        </button>
        <button class="px-4 py-3.5 rounded-lg bg-green-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
          Download
        </button>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EduChainAid',
  setup() {
    // Static user info for demonstration purposes
    const formData = ref({
      userId: '123456',
      eventId: 'EVT7890',
      eventName: 'Annual Gala',
      amount: '150'  // Set amount here
    });

    return {
      formData,
    };
  },
});
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
