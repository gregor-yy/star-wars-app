<template>
    <input class="input" :value="modelValue" @input="updateInput" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Input",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event: InputEvent) {
            const inputValue = (event.target as HTMLInputElement).value;
            this.$emit("update:modelValue", inputValue);
        },
    },
});
</script>

<style scoped>
.input {
    background: transparent;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 12px 12px;
}
</style>
