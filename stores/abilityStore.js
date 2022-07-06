import { defineStore } from "pinia";
import initialState from "./generics/initialState";
const baseUrl = "https://pokeapi.co/api/v2/pokemon"

//TODO:! finsh adapting model

export const useAbilityStore = defineStore("ability", {
  state: () => ({...initialState}),
  actions: {
    async getAllAbilities(filters = {}, page = 1,itemsPerPage = 20) {
        this.collection.fetching = true 
        let apiUrl = baseUrl;

        if(page > 1) {
          apiUrl+=`?offset=${page*itemsPerPage}` 
        }

        const data = await fetch(apiUrl);
        const res = await data.json();

        const response = await Promise.all(res.results.map(pokemon => fetch(baseUrl+ "/" + pokemon.name).then(res => res.json())))

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
