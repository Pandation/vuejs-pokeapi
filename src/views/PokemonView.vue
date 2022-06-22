<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


let route = useRoute();
let pokemon = ref({});

onMounted(async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/"+route.params.name);
  const res = await data.json();

  pokemon.value = res
  console.log(pokemon.value.types)
})

</script>

<template>
  <div>pokemon!!</div>
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