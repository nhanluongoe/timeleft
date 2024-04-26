<script setup lang="ts">
import { ref } from "vue";

type Step = "age" | "expected-age";

const emit = defineEmits([ "setExpectedAge", "setAge", "onCompleted" ]);

const step = ref<Step>("age");

const age = ref(0);
const expectedAge = ref(0);

function handleFirstStep(value: number) {
    emit("setAge", value);
    step.value = "expected-age";
}

function complete(value: number) {
    emit("setExpectedAge", value);
    step.value = "age";
    emit("onCompleted");
}

function goBack() {
    step.value = "age";
}

</script>

<template>
    <div
        class="py-8 px-16 rounded-2xl flex flex-col gap-5 justify-center items-center md:w-1/2 mx-auto bg-white shadow-xl relative">
        <button class="link-btn absolute top-2 left-0" :class=" { invisible: step === 'age' } " @click=" goBack ">←
            Back</button>
        <template v-if="step === 'age'">
            <div>
                <label for="age" class="input-label">What is your age?</label>
                <input id="age" type="number" v-model=" age " class="input" min="0"></input>
            </div>
            <button @click="handleFirstStep(age)" class="primary-btn" :class=" { 'disabled-btn': age === 0 } "
                :disabled=" age === 0 ">Next</button>
        </template>

        <template v-if="step === 'expected-age'">
            <div>
                <label for="expected-age" class="input-label">How old do you expect to live?</label>
                <input id="expected-age" type="number" v-model=" expectedAge " class="input" min="0"></input>
            </div>
            <button @click="complete(expectedAge)" class="primary-btn" :class=" { 'disabled-btn': expectedAge === 0 } "
                :disabled=" expectedAge === 0 ">Let's see!</button>
        </template>
    </div>
</template>
