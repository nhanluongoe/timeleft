<script setup lang="ts">
type Props = {
  msg: string;
};
const props = defineProps<Props>();
</script>

<style scoped>
  .background {
    background-image: url("../assets/images/bubble-chat.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }
</style>

<template>
  <div class="absolute right-0 top-0 -translate-y-[80%] h-64 background flex justify-center items-center">
    <p class="text-white w-4/5 text-center text-lg font-semibold">{{ msg }}</p>
  </div>
</template>