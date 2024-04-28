<script setup lang="ts">
type Props = {
  msg: string;
};
const props = defineProps<Props>();
</script>

<style scoped>

.bubble-chat {
  background-image: url("../assets/images/bubble-chat.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 250px;
  height: 200px;
}

</style>

<template>
  <div class="absolute right-0 translate-x-[10%] top-0 -translate-y-[80%] flex justify-center items-center bubble-chat">
    <p class="text-white w-4/5 text-center text-lg font-semibold">{{ msg }}</p>
  </div>
</template>