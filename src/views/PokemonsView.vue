<script setup>
import { onMounted } from 'vue';
import { usePokemonStore } from '../../stores/pokemonStore';
import PokemonCard from '../components/PokemonCard.vue';

const pokemonStore = usePokemonStore();

onMounted(async () => {
  pokemonStore.getAllPokemons();
})

</script>

<template>
  <div class="card-container" v-show="pokemonStore.collection.loaded">
    <PokemonCard :name="pokemon.name" :types="pokemon.types" v-for="pokemon in pokemonStore.collection.items" :key="pokemon.name">
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