import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "@/pages/HomePage";
import CharacterDetailsPage from "@/pages/CharacterDetailsPage";
import NotFound from "@/pages/NotFound";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/character/:id",
        name: "characterDetails",
        component: CharacterDetailsPage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
