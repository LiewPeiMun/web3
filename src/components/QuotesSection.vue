<template>
  <div class="outer-padding">
    <div class="small-banner-container">
      <div class="flex flex-col items-center py-12 px-6 rounded-lg shadow-lg gradient-bg">
        <h1 class="text-2xl font-bold text-white mb-4 text-center">
          "Fundraising is the gentle art of teaching the joy of giving."
        </h1>
        <div class="flex space-x-6">
          <div class="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-green-500 mb-1 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zm0 8l10 5-10 5-10-5 10-5zm0 8l10 5-10 5-10-5 10-5z"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-gray-200 text-xl font-medium">Volunteer</span>
          </div>
          <div class="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-blue-500 mb-1 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2l8 8h-6v6h-4v-6H4l8-8zm0 18v-4h4v4h4v-6h4v10H4V14h4v6h4z"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-gray-200 text-xl font-medium">Fundraise</span>
          </div>
          <div class="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 text-red-500 mb-1 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-gray-200 text-xl font-medium">Donate</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(90deg, #6a11cb, #2575fc);
}

.small-banner-container {
  padding: 16px; /* Adjust the padding as needed */
}

.outer-padding {
  padding: 24px;
  padding-right: 50px;
}

.transition {
  transition: transform 0.3s ease-in-out;
}

.transform {
  transform: scale(1);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.duration-500 {
  transition-duration: 500ms;
}
</style>
