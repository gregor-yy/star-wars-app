import { createStore } from "vuex";

import { visitedCharactersModule } from "./modules/visitedCharacters";

export default createStore({
    modules: {
        visitedCharacters: visitedCharactersModule,
    },
});
