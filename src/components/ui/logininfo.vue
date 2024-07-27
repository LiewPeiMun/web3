<template>
  <main class="flex flex-col px-8 py-8 text-base text-white bg-gray-800 rounded-2xl max-w-[705px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
    <h1 class="text-5xl max-md:max-w-full max-md:text-4xl">LOG IN</h1>
    <form @submit.prevent="handleSubmit" class="mt-10">
      <div class="mb-4">
        <label for="email" class="block ml-12 max-md:ml-2.5">Email address</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="w-full mt-3.5 h-9 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_0px_2px_rgba(0,0,0,0.02)] max-md:mr-2.5"
        />
      </div>
      <button
        type="submit"
        class="self-end px-4 py-2 mt-6 font-medium text-white whitespace-nowrap rounded-lg bg-zinc-500 leading-[150%] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      >
        submit
      </button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const email = ref('');

    const handleSubmit = () => {
      // Handle form submission logic here
      console.log('Form submitted with email:', email.value);
    };

    return {
      email,
      handleSubmit,
    };
  },
});
</script>