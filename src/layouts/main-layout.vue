<script setup lang="ts">
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main class="container mx-auto">
    <RouterView />
  </main>

  <footer>Footer</footer>
</template>
