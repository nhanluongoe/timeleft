<script setup lang="ts"></script>


<style scoped>
.gradient-bg {
  background-image: linear-gradient(135deg, #b5f7eb 0%, #9face6 100%);
}
</style>


<template>
  <div class="min-h-screen flex flex-col justify-between gradient-bg">
    <header class="m-5">
      <h1 class="text-center text-5xl font-bold">Time Left</h1>
    </header>

    <main class="container mx-auto">
      <RouterView />
    </main>

    <footer class="m-5">
      <p class="text-center text-gray-700">Made by <a href="https://nhanluongoe.me" class="font-semibold">Nhan Luong</a>
        with 🍀</p>
    </footer>
  </div>
</template>
