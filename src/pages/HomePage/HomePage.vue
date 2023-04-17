<template>
    <div class="container">
        <div class="HomePage__content">
            <h1 class="content__title">Character list</h1>
            <Input v-model="searchValue" @input="handleInput" placeholder="Search character..." />
            <CharactersList :characters="characters" :loading="loading" />
            <Preloader v-show="loading === true" />
            <h2 class="content__title">History visited characters</h2>
            <CharactersList :characters="getVisitedCharacters" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Input from "@/components/UI/Input";
import Preloader from "@/components/UI/Preloader";

import CharactersList from "@/components/widgets/CharactersList";

import axios from "axios";

import { ICharacter } from "@/types/Character";

import { mapGetters } from "vuex";
import router from "@/router";

// TODO: по хорошему всё это добро тоже надо на Vuex переписать

export default defineComponent({
    name: "HomePage",
    components: { Input, Preloader, CharactersList },
    data() {
        return {
            loading: false,
            searchValue: "",
            characters: [] as ICharacter[],
            timeoutId: null as ReturnType<typeof setTimeout> | null,
        };
    },
    methods: {
        async getCharacters(search?: string) {
            try {
                this.loading = true;
                const response = await axios.get<{ results: ICharacter[] }>("https://swapi.dev/api/people/", {
                    params: { search: search },
                });
                const newCharacters: ICharacter[] = response.data.results;
                this.characters = newCharacters;
                this.loading = false;
            } catch {
                // TODO: По хорошему доработать, чтобы statusCode и statusText прокидывались из error
                router.push("/404");
            }
        },
        handleInput() {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.getCharacters(this.searchValue);
                this.timeoutId = null;
            }, 500);
        },
    },
    computed: {
        ...mapGetters(["getVisitedCharacters"]),
    },
    mounted() {
        this.getCharacters();
    },
});
</script>

<style scoped>
.HomePage__content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}
.content__title {
    margin-bottom: 24px;
}
</style>
