<template>
  <main class="flex flex-col px-8 py-8 text-base text-white bg-gray-800 rounded-2xl max-w-[705px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
    <h1 class="text-5xl max-md:max-w-full max-md:text-4xl">LOGIN</h1>
    <form @submit.prevent="handleSubmit" class="mt-4">
      <label for="email" class="block mb-2">Email address</label>
      <div class="flex flex-col w-full max-w-[580px]">
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="w-full h-9 bg-white rounded-lg border border-gray-300 border-solid shadow-[0px_0px_2px_rgba(0,0,0,0.02)] text-black"
        />
        <button
          type="submit"
          class="mt-0 px-4 py-2 w-max font-medium text-white rounded-lg bg-green-500 leading-[150%] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        >
          Submit
        </button>
      </div>
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

<style scoped>
/* Optional scoped styles */
</style>
