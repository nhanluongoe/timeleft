<script setup lang="ts">
import { computed, ref } from "vue";
import LifeDots from "./life-dots.vue";

type Props = {
  expectedAge: number;
  age: number;
};

type Mode = "days" | "weeks" | "months" | "years";

const DAYS_PER_YEAR = 365;
const WEEKS_PER_YEAR = 52;
const MONTHS_PER_YEAR = 12;

const props = defineProps<Props>();
const emits = defineEmits(["onBack"]);

const mode = ref<Mode>("days");
const modes: Mode[] = ["days", "weeks", "months", "years"];

const age = computed(() => props.age);
const days = computed(() => props.age * DAYS_PER_YEAR);
const weeks = computed(() => props.age * WEEKS_PER_YEAR);
const months = computed(() => props.age * MONTHS_PER_YEAR);

const expectedAge = computed(() => props.expectedAge);
const expectedDays = computed(() => props.expectedAge * DAYS_PER_YEAR);
const expectedWeeks = computed(() => props.expectedAge * WEEKS_PER_YEAR);
const expectedMonths = computed(() => props.expectedAge * MONTHS_PER_YEAR);

function complete() {
  emits("onBack");
}

function setMode(newMode: Mode) {
  mode.value = newMode;
}
</script>

<template>
  <div class="w-4/5 md:w-3/5 mx-auto flex gap-6 mb-12 md:mb-5">
    <button
      class="secondary-btn capitalize"
      v-for="mode in modes"
      @click="setMode(mode)"
    >
      {{ mode }}
    </button>
  </div>
  <div class="w-4/5 md:w-full mx-auto">
    <button class="link-btn w-20 mb-5" @click="complete">← Back</button>
    <LifeDots
      type="days"
      :value="days"
      :expected-value="expectedDays"
      v-if="mode === 'days'"
    />
    <LifeDots
      type="weeks"
      :value="weeks"
      :expected-value="expectedWeeks"
      v-if="mode === 'weeks'"
    />
    <LifeDots
      type="months"
      :value="months"
      :expected-value="expectedMonths"
      v-if="mode === 'months'"
    />
    <LifeDots
      type="years"
      :value="age"
      :expected-value="expectedAge"
      v-if="mode === 'years'"
    />
  </div>
</template>
