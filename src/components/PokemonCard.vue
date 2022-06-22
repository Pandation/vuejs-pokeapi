<script setup>
const props = defineProps(["types", "name"])

function getLinearGradientForTypes(types) {
    const colorArray = {
        poison: 'rgb(179, 1, 179)',
        fire: 'rgb(255, 106, 52)',
        dragon: '',
        ghost: '',
        steel: '',
        rock: '',
        ground: '',
        electric: '',
        water: 'rgb(86, 119, 230)',
        grass: 'rgb(0, 165, 0)',
        flying: 'lightblue',
        bug: 'lightgreen',
        normal: 'lightgray',
    }

    return 'linear-gradient(to bottom right,' + colorArray[types[0]] + ', ' + (colorArray[types[1]] || 'white') + ')';
}
</script>

<template>
    <RouterLink :to="'/pokemon/' + props.name">
        <div class="card" :style="{ backgroundImage: getLinearGradientForTypes(props.types) }">
            <h1>
                <slot name="name" />
            </h1>
            <div class="types">
                <div class="type" :class="type" v-for="type in props.types">{{ type }}</div>
            </div>
            <div class="img">
                <slot name="img" />
            </div>
        </div>
    </RouterLink>
</template>

<style>
div.card {
    height: 300px;
    width: 240px;
    background-color: whitesmoke;
    color: black;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px;
    border-radius: 10px;
    margin: 10px;
}

div.card>h1 {
    text-transform: capitalize;
    font-weight: bold;
}

div.types {
    width: 100%;
    display: flex;
    justify-content: center;
}


div.type {
    padding: 2px 20px;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: solid 1px black;
    text-transform: uppercase;
    font-weight: bold;
}

div.img {
    width: 100%;
    text-align: center;
}

img {
    width: auto;
    height: 150px;
}

div.poison {
    color: white;
    background-color: purple;
}

div.grass {
    color: white;
    background-color: green;
}

div.fire {
    color: white;
    background-color: orangered;
}

div.water {
    color: white;
    background-color: rgb(86, 119, 230);
}

div.flying {
    color: black;
    background-color: lightblue;
}

div.bug {
    color: black;
    background-color: lightgreen;
}

div.normal {
    color: black;
    background-color: lightgray;
}

div.electric {
    color: black;
    background-color: yellow;
}
</style>