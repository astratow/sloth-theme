<template>
  <div class="bg-indigo-600 text-white p-6 text-center rounded-md">
    <h1 class="text-2xl font-bold mb-2">Welcome to Our Store</h1>
    <p class="mb-4">Discover amazing products and deals</p>
    <button @click="clicked = !clicked" class="bg-white text-indigo-600 px-4 py-2 rounded">
      {{ clicked ? 'Thanks!' : 'Shop Now' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const clicked = ref(false)
</script>

<style scoped>
</style>