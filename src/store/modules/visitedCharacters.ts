import { ICharacter } from "@/types/Character";

import { Commit } from "vuex";

// TODO: Надо переделать, фуфло какое-то

interface IVisitedCharactersState {
    characters: ICharacter[];
}

export const visitedCharactersModule = {
    state: () => ({
        characters: [] as ICharacter[],
    }),
    getters: {
        getVisitedCharacters(state: IVisitedCharactersState) {
            return state.characters;
        },
    },
    mutations: {
        addVisitedCharacters(state: IVisitedCharactersState, character: ICharacter) {
            const newCharacters = state.characters.filter((ch) => ch.name !== character.name);
            newCharacters.unshift(character);
            state.characters = newCharacters;
        },
    },
    actions: {
        addVisitedCharacters({ commit }: { commit: Commit }, payload: ICharacter) {
            commit("addVisitedCharacters", payload);
        },
    },
};
