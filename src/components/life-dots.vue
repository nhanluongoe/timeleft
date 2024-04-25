<script setup lang="ts">
import { computed, defineProps } from "vue";

type Props = {
  title: string;
  value: number;
  expectedValue: number;
};

const props = defineProps<Props>();

const timeLeft = computed(() => props.expectedValue - props.value);
</script>

<template>
  <section>
    <h1>{{ title }}</h1>
    <div class="flex flex-wrap gap-1">
      <div
        v-for="_ in Array(value)"
        class="h-2 w-2 rounded-full bg-gray-500"
      ></div>
      <template v-if="timeLeft > 0">
        <div
          v-for="_ in Array(timeLeft)"
          class="h-2 w-2 rounded-full bg-blue-500"
        ></div>
      </template>
    </div>
  </section>
</template>
