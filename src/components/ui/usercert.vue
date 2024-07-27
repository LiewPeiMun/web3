<template>
    <main class="flex flex-col items-center px-9 pt-8 pb-20 font-medium bg-zinc-300 max-w-[534px] max-md:px-5">
      <header>
        <h1 class="text-xl font-bold uppercase text-zinc-500">EduChainAid</h1>
        <p class="mt-2 text-xs tracking-widest text-black uppercase">Fueling Undergraduate's Dreams</p>
      </header>
      <section class="flex flex-col self-stretch px-6 pt-20 pb-5 mt-5 text-base text-white bg-gray-800 rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <form>
          <div class="mt-11 leading-6 max-md:mt-10">
            <label for="userId" class="sr-only">User ID</label>
            <input type="text" id="userId" name="userId" class="bg-transparent border-b border-white w-full mb-4" aria-label="User ID" />
  
            <label for="eventId" class="sr-only">Event ID</label>
            <input type="text" id="eventId" name="eventId" class="bg-transparent border-b border-white w-full mb-4" aria-label="Event ID" />
  
            <label for="eventName" class="sr-only">Event Name</label>
            <input type="text" id="eventName" name="eventName" class="bg-transparent border-b border-white w-full mb-4" aria-label="Event Name" />
  
            <label for="amount" class="sr-only">Amount</label>
            <input type="number" id="amount" name="amount" class="bg-transparent border-b border-white w-full mb-4" aria-label="Amount" />
          </div>
          <div class="flex gap-5 justify-between self-end mt-40 whitespace-nowrap leading-[150%] max-md:mt-10">
            <button type="button" class="px-4 py-3.5 rounded-lg bg-zinc-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
              Cancel
            </button>
            <button type="submit" class="px-4 py-3.5 rounded-lg bg-zinc-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
              Download
            </button>
          </div>
        </form>
      </section>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'EduChainAid',
    // Add any necessary component logic here
  })
  </script>