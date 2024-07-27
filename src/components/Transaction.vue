<template>
  <section class="flex flex-col px-5 py-8 text-base text-white bg-gray-800 rounded-2xl max-w-[705px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
    <h1 class="text-5xl max-md:max-w-full max-md:text-4xl">Transaction</h1>
    <form @submit.prevent="handleSubmit" class="mt-4">
      <label for="amount" class="block mb-2">Amount (RM)</label>
      <div class="flex flex-col w-full max-w-[580px]">
        <input
          type="text"
          id="amount"
          v-model="amount"
          class="w-full h-9 bg-white text-black rounded-lg border border-gray-300 border-solid shadow-[0px_0px_2px_rgba(0,0,0,0.02)]"
          aria-label="Enter amount in RM"
        />
        <button
          type="submit"
          class="mt-2 px-4 py-2 w-max font-medium text-white rounded-lg bg-green-500 leading-[150%] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        >
          Submit
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TransactionForm',
  setup() {
    const amount = ref(''); // Amount can be set to an empty string or any initial value

    const handleSubmit = () => {
      // Handle form submission logic here
      console.log('Form submitted with amount:', amount.value);
    };

    return {
      amount,
      handleSubmit,
    };
  },
});
</script>
