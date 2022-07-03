import { defineStore } from "pinia";

const initialSubstate = {
  loaded: false,
  fetching: false,
  error: {
    status: false,
    message: "",
  },
};

const initialState = {
  collection: {
      items: [],
      total: 0,
      ...initialSubstate
  },
  item: {
    data: {},
    ...initialSubstate
  }
};

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({...initialState}),
  actions: {
    async getAllPokemons(filters = {}, page = 1) {
        this.collection.fetching = true 

        const baseUrl = "https://pokeapi.co/api/v2/pokemon"
        let apiUrl = baseUrl;
        const offset = 20;

        if(page > 1) {
            apiUrl+=`?offset=${page*offset}` 
        }

        const data = await fetch(apiUrl);
        const res = await data.json();

        const response = await Promise.all(res.results.map(pokemon => fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name).then(res => res.json())))

        response.forEach(pok => {
            pok.img = pok.sprites['other']['official-artwork']['front_default']
            pok.types = pok.types.map(item => item.type.name)
        })

        this.collection.items = response
        this.collection.loaded = true
        this.collection.fetching = false 
        this.collection.total = res.count 
    }
  }
});
