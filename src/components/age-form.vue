<script setup lang="ts">
import { ref } from "vue";

type Step = "age" | "expected-age";

const emit = defineEmits([ "setExpectedAge", "setAge", "onCompleted" ]);

const step = ref<Step>("age");

const age = ref<number>();
const expectedAge = ref<number>();

function handleFirstStep(value: number | undefined) {
    emit("setAge", value);
    step.value = "expected-age";
}

function complete(value: number | undefined) {
    emit("setExpectedAge", value);
    step.value = "age";
    emit("onCompleted");
}

function goBack() {
    step.value = "age";
}

</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateX(-20px);
    opacity: 0;
}
</style>

<template>
    <div class="py-8 px-16 rounded-2xl  md:w-1/2 mx-auto bg-white shadow-xl relative">
        <button class="link-btn absolute top-2 left-0" :class=" { invisible: step === 'age' } " @click=" goBack ">←
            Back</button>
        <Transition name="slide-fade">

            <div v-if="step === 'age'" class="flex flex-col gap-5 justify-center items-center">
                <div>
                    <label for="age" class="input-label">What is your age?</label>
                    <input id="age" type="number" v-model=" age " class="input" min="0" max="150"></input>
                </div>
                <button @click="handleFirstStep(age)" class="primary-btn" :class=" { 'disabled-btn': !age } "
                    :disabled=" !age ">Next</button>
            </div>
        </Transition>

        <Transition name="slide-fade">

            <div v-if="step === 'expected-age'" class="flex flex-col gap-5 justify-center items-center">
                <div>
                    <label for="expected-age" class="input-label">How old do you expect to live?</label>
                    <input id="expected-age" type="number" v-model=" expectedAge " class="input" min="0"
                        max="150"></input>
                </div>
                <button @click="complete(expectedAge)" class="primary-btn" :class=" { 'disabled-btn': !expectedAge } "
                    :disabled=" !expectedAge ">Let's see!</button>
            </div>
        </Transition>
    </div>
</template>
