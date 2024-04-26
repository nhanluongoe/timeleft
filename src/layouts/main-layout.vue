<script setup lang="ts"></script>


<style scoped>
.gradient-bg {
  /* background-color: #bfe2fb; */
  /* background-image: linear-gradient(160deg, #bfe2fb 0%, #d9fff8 100%); */
  /* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */
  background-image: linear-gradient(135deg, #b5f7eb 0%, #9face6 100%);
}
</style>


<template>
  <div class="min-h-screen flex flex-col justify-between gradient-bg">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <main class="container mx-auto">
      <RouterView />
    </main>

    <footer class="my-5">
      <p class="text-center text-gray-700">Made By <a href="https://nhanluongoe.me" class="font-semibold">Nhan Luong</a> with 🍀</p>
    </footer>
  </div>
</template>
