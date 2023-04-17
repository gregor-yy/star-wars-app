<template>
    <Layout>
        <router-view />
    </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/Layout";

export default defineComponent({
    components: { Layout },
    name: "App",
});
</script>

<style>
@import url("@/styles/global.css");
</style>
