<template>
    <div class="CharactersList__body">
        <div v-if="characters.length > 0 && loading === false" class="CharactersList__list">
            <CharacterItem v-for="character in characters" :character="character" :key="character.id" />
        </div>
        <div v-if="characters.length === 0 && loading === false" class="CharactersList__empty">The list is empty</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ICharacter } from "@/types/Character";

import CharacterItem from "@/components/widgets/CharacterItem";

// TODO: Тут я не совсем понял как описывать одним интерфейсом пропсы, поэтому описываю отдельно каждый, потом подразберусь
// да и в целом почему-то автозаполнение не работает, IDE мне не подсказывает о вложенностях ICharacter

// interface CharactersListProps {
//     characters: ICharacter[];
//     loading: boolean;
// }

export default defineComponent({
    name: "CharactersList",
    components: { CharacterItem },
    props: {
        characters: {
            type: Array as () => ICharacter[],
            required: true,
        },
        loading: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
});
</script>

<style scoped>
.CharactersList__body {
    padding: 24px 0;
}

.CharactersList__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.CharactersList__empty {
    font-size: 24px;
    text-align: center;
}

@media (max-width: 1024px) {
    .CharactersList__list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .CharactersList__list {
        grid-template-columns: 1fr;
    }
}
</style>
