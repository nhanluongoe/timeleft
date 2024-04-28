<script setup lang="ts">
import Footer from '@/components/footer.vue';
</script>


<style scoped>
.gradient-bg {
  background-image: linear-gradient(135deg, #b5f7eb 0%, #9face6 100%);
}
</style>


<template>
  <div class="min-h-screen flex flex-col justify-between gradient-bg">
    <header class="m-5 relative">
      <img src="/images/logo.png" alt="logo" class="w-44 absolute left-1/2 -translate-x-1/2" />
    </header>

    <main class="container mx-auto">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
