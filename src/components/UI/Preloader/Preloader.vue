<template>
    <div class="preloader">
        <p>Loading</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Preloader",
});
</script>

<style scoped>
.preloader {
    padding: 48px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.preloader p {
    font-size: 32px;
}

.preloader p::after {
    content: "";
    animation: dotsLoader 1s infinite;
}

@keyframes dotsLoader {
    0% {
        content: "";
    }
    25% {
        content: ".";
    }
    50% {
        content: "..";
    }
    75% {
        content: "...";
    }
}
</style>
