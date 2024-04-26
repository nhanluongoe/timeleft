<script setup lang="ts">
import AgeForm from "@/components/age-form.vue";
import LifeVisualization from "@/components/life-visualization.vue";
import { ref } from "vue";

type Step = "input" | "result"; 

const expectedAge = ref(0);
const age = ref(0);
const step = ref<Step>("input");

function setExpectedAge(value: number) {
  expectedAge.value = value;
}

function setAge(value: number) {
  age.value = value;
}

function complete () {
  step.value = "result";
}
</script>

<template>
  <AgeForm @set-age=" setAge " @set-expected-age=" setExpectedAge " v-if="step === 'input'" @on-completed="complete"/>
  <LifeVisualization :expected-age=" expectedAge " :age=" age " v-if="step === 'result'"/>
</template>
