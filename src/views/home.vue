<script setup lang="ts">
import { ref } from 'vue';
import LifeVisualization from '@/components/life-visualization.vue';

const expectedAge = ref(0);   
const age = ref(0);
</script>

<template>

  <label for="age">What is your age?</label>
  <input id="age" type="number" v-model="age"></input>

  <label for="expected-age">How old do you expect to live?</label>
  <input id="expected-age" type="number" v-model="expectedAge" />

  <LifeVisualization :expected-age="expectedAge" :age="age"/>
</template>