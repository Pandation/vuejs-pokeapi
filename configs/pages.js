import PokemonsView from "../src/views/PokemonsView.vue";

const Pages = [
  {
    path: "/",
    name: "pokemons",
    component: PokemonsView,
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    menu: false,
    component: () => import("../src/views/PokemonView.vue"),
  },
  {
    path: "/abilities",
    name: "abilities",
    component: () => import("../src/views/PokemonView.vue"),
  },
  {
    path: "/abilities/:id",
    name: "abilitie",
    menu: false,
    component: () => import("../src/views/PokemonView.vue"),
  },
  {
    path: "/localizations",
    name: "localizations",
    component: () => import("../src/views/AboutView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../src/views/AboutView.vue"),
  },
];

export default Pages;
