<script setup lang="ts">
type Props = {
  msg: string;
};
defineProps<Props>();
</script>

<style scoped>
.bubble-chat {
  background-image: url("../assets/images/bubble-chat.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

<template>
  <div
    class="absolute right-0 translate-x-[10%] top-0 -translate-y-[80%] flex justify-center items-center bubble-chat md:w-[250px] md:h-[200px] w-[150px] h-[120px]"
  >
    <p class="text-white w-4/5 text-center text-sm md:text-lg font-semibold">
      {{ msg }}
    </p>
  </div>
</template>
