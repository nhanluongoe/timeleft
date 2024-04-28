<script setup lang="ts">
import Footer from "@/components/footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between gradient-bg">
    <header class="m-5 relative flex mx-auto">
      <img src="/images/logo.png" alt="logo" class="w-28 md:w-36" />
    </header>

    <main class="container mx-auto">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.gradient-bg {
  background-image: linear-gradient(135deg, #b5f7eb 0%, #9face6 100%);
}
</style>
