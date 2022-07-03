import { createRouter, createWebHistory } from "vue-router";

import Pages from "../../configs/pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Pages.map(item => ({path : item.path, name : item.name, component: item.component})),
});

export default router;

