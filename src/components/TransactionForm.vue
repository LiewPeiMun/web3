<template>
  <section class="form-container">
    <h1 class="title">Transaction</h1>
    <form @submit.prevent="handleSubmit" class="form">
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

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TransactionForm',
  setup() {
    const amount = ref('');

    const handleSubmit = () => {
      console.log('Form submitted with amount:', amount.value);
    };

    return {
      amount,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.form-container {
  background: #2c3e50;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
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
