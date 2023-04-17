<template>
    <article class="CharacterItem__body glass">
        <h2><strong>Name: </strong>{{ character.name }}</h2>
        <p><strong>Birth year: </strong>{{ character.birth_year }}</p>
        <Link :to="`/character/${character.url.replace('https://swapi.dev/api/people/', '')}`" :className="'CharacterItem__link'"
            >Go to details</Link
        >
    </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ICharacter } from "@/types/Character";

import Link from "@/components/UI/Link";

export default defineComponent({
    name: "CharacterItem",
    components: { Link },
    props: {
        character: {
            type: Object as PropType<ICharacter>,
            required: true,
        },
    },
});
</script>

<style scoped>
.CharacterItem__body {
    border-radius: 12px;
    padding: 12px;
}
.CharacterItem__link {
    display: block;
    width: min-content;
    white-space: nowrap;
    margin-left: auto;
}
</style>
