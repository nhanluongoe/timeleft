<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
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
  </div>
</template>
