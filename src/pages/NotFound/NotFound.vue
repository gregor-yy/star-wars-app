<template>
    <div class="container">
        <div class="error glass">
            <h1 class="statusCode">404</h1>
            <p class="statusText">Что-то пошло не так!</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NotFound",
});
</script>

<style scoped>
.error {
    border-radius: 24px;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.statusCode {
    font-size: 64px;
}
.statusText {
    font-size: 32px;
}
</style>
