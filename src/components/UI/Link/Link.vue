<template>
    <router-link :to="to" :class="['link', className]">
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Link",
    props: {
        to: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: "",
        },
    },
});
</script>

<style scoped>
.link {
    position: relative;
    font-size: 20px;
    color: white;
    text-decoration: none;
}

.link::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0%;
    height: 4px;
    background: #4eedea;
    filter: blur(1px);
    transition: 200ms;
}

.link::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0%;
    height: 4px;
    background: #e75c55;
    filter: blur(1px);
    transition: 200ms;
}

.link:hover::after {
    width: 100%;
}

.link:hover::before {
    width: 100%;
}
</style>
