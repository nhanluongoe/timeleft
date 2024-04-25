<script setup lang="ts">
import AgeForm from "@/components/age-form.vue";
import LifeVisualization from "@/components/life-visualization.vue";
import { ref } from "vue";

const expectedAge = ref(0);
const age = ref(0);

function setExpectedAge(value: number) {
  expectedAge.value = value;
}

function setAge(value: number) {
  age.value = value;
}
</script>

<template>
  <AgeForm @set-age=" setAge " @set-expected-age=" setExpectedAge " />
  <LifeVisualization :expected-age=" expectedAge " :age=" age " />
</template>
