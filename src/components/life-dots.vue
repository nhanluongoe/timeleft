<script setup lang="ts">
import { computed, defineProps } from "vue";
import BubbleChat from "./bubble-chat.vue";

type Props = {
  type: "days" | "weeks" | "months" | "years";
  value: number;
  expectedValue: number;
};

const props = defineProps<Props>();

const timeLeft = computed(() => props.expectedValue - props.value);
const title = computed(() => `In ${props.type}`.toUpperCase());
const bubbleMsg = computed(() => {
  if (props.type === "days") {
    return "Looks like you have a lot of time left! 🥳";
  }
  if (props.type === "weeks") {
    return "Still a lot of time to enjoy! 🎉";
  }

  if (props.type === "months") {
    return "Not much as you think, right? 🤔";
  }

  return "Time flies fast, enjoy it! 🙂";
});
</script>

<template>
  <section
    class="py-8 px-16 rounded-2xl flex flex-col gap-5 justify-center w-full mx-auto bg-white shadow-xl relative"
    :id="props.type"
  >
    <BubbleChat :msg="bubbleMsg" />
    <h1 class="text-xl font-semibold text-center text-gray-500">{{ title }}</h1>
    <div class="flex flex-wrap gap-1">
      <div
        v-for="_ in Array(value)"
        class="h-2 w-2 rounded-full bg-gray-400"
      ></div>
      <template v-if="timeLeft > 0">
        <div
          v-for="_ in Array(timeLeft)"
          class="h-2 w-2 rounded-full bg-[#4f80db]"
        ></div>
      </template>
    </div>
    <div>
      <p class="text-center">
        You have lived for
        <strong class="text-gray-400">
          {{ $filters.formatNumber(value) }}
        </strong>
        <span class="inline-block w-3 h-3 bg-gray-400 rounded-full ml-1">
        </span>
        and have
        <strong class="text-[#4f80db]">
          {{ $filters.formatNumber(expectedValue - value) }}
        </strong>
        <span class="inline-block w-3 h-3 bg-[#4f80db] rounded-full ml-1">
        </span>
        left
      </p>
    </div>
  </section>
</template>
