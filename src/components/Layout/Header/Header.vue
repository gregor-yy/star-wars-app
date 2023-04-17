<template>
    <header class="header container glass">
        <nav class="menu">
            <Link to="/" :className="'logo'">Star Wars</Link>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Link from "@/components/UI/Link";

export default defineComponent({
    name: "Header",
    components: { Link },
});
</script>

<style scoped>
.header {
    position: fixed !important;
    top: 12px;
    left: 50%;
    transform: translate(-50%);
    padding: 24px 48px;
    border-radius: 12px;
    z-index: 10;
}

.menu {
    display: flex;
    align-items: center;
    gap: 24px;
}

.logo {
    font-family: "Star Wars", sans-serif;
    font-size: 24px;
    /* Шрифт кривоватый, добавил отступ сверху */
    padding-top: 2px;
}

@media (max-width: 768px) {
    .header {
        top: 0px;
        border-radius: 0px;
    }
    .menu {
        justify-content: center;
    }
}
</style>
