<script setup lang="ts">
import { ref } from "vue";

type Step = "age" | "expected-age";

const emit = defineEmits([ "setExpectedAge", "setAge" ]);

const step = ref<Step>("age");

const age = ref(0);
const expectedAge = ref(0);

function setAge(value: number) {
    emit("setAge", value);
    step.value = "expected-age";
}

function setExpectedAge(value: number) {
    emit("setExpectedAge", value);
    step.value = "age";
}
</script>

<template>
    <div class="border p-2 rounded-lg flex flex-col gap-5 justify-center items-center">
        <template v-if="step === 'age'">
            <div>
                <label for="age" class="input-label">What is your age?</label>
                <input id="age" type="number" v-model=" age " class="input"></input>
            </div>
            <button @click="setAge(age)" class="primary-btn">Next</button>
        </template>

        <template v-if="step === 'expected-age'">
            <div>
                <label for="expected-age" class="input-label">How old do you expect to live?</label>
                <input id="expected-age" type="number" v-model=" expectedAge " class="input"></input>
            </div>
            <button @click="setExpectedAge(expectedAge)" class="primary-btn">Let's see!</button>
        </template>
    </div>
</template>
