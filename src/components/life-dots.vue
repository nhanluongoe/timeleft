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
  <section class="py-8 px-16 rounded-2xl flex flex-col gap-5 justify-center w-full mx-auto bg-white shadow-xl relative">
    <h1 class="text-xl font-semibold text-center">{{ title }}</h1>
    <div>
      <p class="text-center">
        You have lived for
        <strong>
          {{ $filters.formatNumber(value) }}
        </strong>
        <span class="inline-block w-3 h-3 bg-gray-400 rounded-full ml-1">
        </span>
        and have
        <strong>
          {{ $filters.formatNumber(expectedValue - value) }}
        </strong>
        <span class="inline-block w-3 h-3 bg-[#6980e5] rounded-full ml-1">
        </span>
        left
      </p>
    </div>
    <div class="flex flex-wrap gap-1">
      <div v-for="_ in Array(value)" class="h-2 w-2 rounded-full bg-gray-400"></div>
      <template v-if="timeLeft > 0">
        <div v-for="_ in Array(timeLeft)" class="h-2 w-2 rounded-full bg-[#6980e5]"></div>
      </template>
    </div>
  </section>
</template>
