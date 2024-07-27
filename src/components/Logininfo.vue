<template>
  <div>
    <section v-if="!showPopup" class="form-container">
      <h1 class="title">Login</h1>
      <form @submit.prevent="handleLogin" class="form">
        <label for="email" class="label">Email address</label>
        <div class="input-group">
          <input
            type="email"
            id="email"
            v-model="email"
            class="input"
            aria-label="Enter your email address"
          />
          <button type="submit" class="submit-button">Submit</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/useAuthStore'

const authStore = useAuthStore()
const email = ref<string>('')
const showPopup = ref<boolean>(false)

// Method to handle form submission
const handleLogin = async () => {
  await authStore.login(email.value)
  showPopup.value = true
}
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

.popup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
}

.popup-message {
  color: #fff;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.noted-button {
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.noted-button:hover {
  background-color: #218838;
}
</style>
