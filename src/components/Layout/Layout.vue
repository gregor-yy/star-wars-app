<template>
    <div class="layout">
        <Header />
        <main class="page">
            <slot></slot>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header";

export default defineComponent({
    name: "Layout",
    components: { Header },
});
</script>

<style scoped>
.layout {
    padding-top: 92px;
    min-width: 100%;
    min-height: 100vh;
}

.page {
    padding: 32px 0;
}
</style>
