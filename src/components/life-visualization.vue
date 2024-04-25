<script setup lang="ts">
import { computed } from "vue";
import LifeDots from "./life-dots.vue";

type Props = {
  expectedAge: number;
  age: number;
};

const DAYS_PER_YEAR = 365;
const WEEKS_PER_YEAR = 52;
const MONTHS_PER_YEAR = 12;

const props = defineProps<Props>();

const age = computed(() => props.age);
const days = computed(() => props.age * DAYS_PER_YEAR);
const weeks = computed(() => props.age * WEEKS_PER_YEAR);
const months = computed(() => props.age * MONTHS_PER_YEAR);

const expectedAge = computed(() => props.expectedAge);
const expectedDays = computed(() => props.expectedAge * DAYS_PER_YEAR);
const expectedWeeks = computed(() => props.expectedAge * WEEKS_PER_YEAR);
const expectedMonths = computed(() => props.expectedAge * MONTHS_PER_YEAR);
</script>

<template>
  <LifeDots title="In Days" :value="days" :expected-value="expectedDays" />
  <LifeDots title="In Weeks" :value="weeks" :expected-value="expectedWeeks" />
  <LifeDots
    title="In Months"
    :value="months"
    :expected-value="expectedMonths"
  />
  <LifeDots title="In Years" :value="age" :expected-value="expectedAge" />
</template>