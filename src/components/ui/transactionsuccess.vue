<template>
  <section class="flex flex-col items-end pt-20 pr-9 pb-9 pl-20 bg-gray-800 rounded-2xl max-w-[673px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
    <h2 class="mt-6 text-3xl text-center text-zinc-100 max-md:max-w-full">
      Transaction successfully Saved.
    </h2>
    <button
      class="px-4 py-2 mt-10 text-base font-medium leading-6 text-white whitespace-nowrap rounded-lg bg-zinc-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      @click="handleNoted"
    >
      Noted
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TransactionSuccess',
  methods: {
    handleNoted() {
      // Handle button click
    },
  },
});
</script>