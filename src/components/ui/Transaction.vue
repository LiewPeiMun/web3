<template>
  <section class="flex flex-col px-11 py-8 text-base text-white whitespace-nowrap bg-gray-800 rounded-2xl max-w-[705px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
    <h1 class="text-5xl max-md:max-w-full max-md:text-4xl">Transaction</h1>
    <form @submit.prevent="handleSubmit" class="mt-10">
      <label for="amount" class="self-start ml-12 max-md:ml-2.5">Amount(RM)</label>
      <input
        type="number"
        id="amount"
        v-model="amount"
        class="shrink-0 self-end mt-2.5 max-w-full h-9 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_0px_2px_rgba(0,0,0,0.02)] w-[580px] max-md:mr-2.5"
        aria-label="Enter amount in RM"
      />
      <button
        type="submit"
        class="self-end px-4 py-2 mt-6 font-medium text-white rounded-lg bg-zinc-500 leading-[150%] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      >
        submit
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Transaction',
  setup() {
    const amount = ref<number | null>(null);

    const handleSubmit = () => {
      // Handle form submission logic here
      console.log('Submitted amount:', amount.value);
    };

    return {
      amount,
      handleSubmit,
    };
  },
});
</script>