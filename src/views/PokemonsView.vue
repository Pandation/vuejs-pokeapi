<script setup>
import { onMounted, reactive } from 'vue';
import PokemonCard from '../components/PokemonCard.vue';


let pokemons = reactive({
  results: [],
  count: 0,
  loaded: false
})

onMounted(async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  const res = await data.json();

  const response = await Promise.all(res.results.map(pokemon => fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name).then(res => res.json())))

  response.forEach(pok => {
    pok.img = pok.sprites['other']['official-artwork']['front_default']
    pok.types = pok.types.map(item => item.type.name)
  }
  )

  pokemons.results = response
  pokemons.loaded = true
  pokemons.count = res.count
})

</script>

<template>
  <div class="card-container" v-show="pokemons.loaded">
    <PokemonCard :name="pokemon.name" :types="pokemon.types" v-for="pokemon in pokemons.results" :key="pokemon.name">
      <template #name>{{ pokemon.name }}</template>
      <template #img><img :src="pokemon.img" /></template>
    </PokemonCard>
  </div>
</template>

<style>
div.card-container {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  flex-wrap: wrap;
}
</style>