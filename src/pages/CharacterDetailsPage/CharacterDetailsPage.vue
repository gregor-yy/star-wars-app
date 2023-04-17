<template>
    <section class="container">
        <div v-if="character && !loading">
            <h1 class="CharacterDetails__title">{{ character.name }}</h1>
            <div class="CharacterDetails__description glass">
                <p><strong>Birth year: </strong>{{ character.birth_year }}</p>
                <p><strong>Eye color: </strong>{{ character.eye_color }}</p>
                <p><strong>Gender: </strong>{{ character.gender }}</p>
                <p><strong>Height: </strong>{{ character.height }}</p>
                <p><strong>Mass: </strong>{{ character.mass }}</p>
                <p><strong>Skin color: </strong>{{ character.skin_color }}</p>
            </div>
        </div>
        <Preloader v-else />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import axios from "axios";

import router from "@/router";

import { ICharacter } from "@/types/Character";

import Preloader from "@/components/UI/Preloader";

export default defineComponent({
    name: "CharacterDetailsPage",
    components: { Preloader },
    data() {
        return {
            loading: false as Boolean,
            character: null as null | Object as ICharacter,
        };
    },
    methods: {
        ...mapActions(["addVisitedCharacters"]),
        async getCharacterById() {
            try {
                this.loading = true;
                const id = this.$route.params.id;
                const { data } = await axios.get<ICharacter>(`https://swapi.dev/api/people/${id}`);
                /* TODO: можно доработать, объект внутри себя содержит ссылки на планеты, корабли и т.д.
                 Было бы неплохо их тоже выводить */
                this.character = data;
                this.addVisitedCharacters(data);
                this.loading = false;
            } catch {
                // TODO: По хорошему доработать, чтобы statusCode и statusText прокидывались из error
                router.push(`/404`);
            }
        },
    },

    mounted() {
        this.getCharacterById();
    },
});
</script>

<style scoped>
.CharacterDetails__title {
    font-size: 36px;
}
.CharacterDetails__description {
    padding: 24px;
    border-radius: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}
.CharacterDetails__description p {
    font-size: 24px;
}
</style>
