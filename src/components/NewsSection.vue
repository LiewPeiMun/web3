<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-center">Explore News</h2>
  </div>
  <div class="flex justify-center items-center mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div class="p-4">
        <img :src="'src/assets/images/knowledge.png'" alt="knowledge" class="rounded-md">
      </div>
      <div class="p-4">
        <img :src="'src/assets/images/education.png'" alt="knowledge" class="rounded-md">
      </div>
      <div class="p-4">
        <img :src="'src/assets/images/sharing.png'" alt="sharing" class="rounded-md">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .flex {
    display: flex;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
</style>
