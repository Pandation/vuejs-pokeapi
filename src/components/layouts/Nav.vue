<template>
    <nav>
        <ul>
            <li v-for="link in pagesLink">
                <RouterLink :to="link.path">{{ link.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import Pages from '../../../configs/pages';
import { RouterLink } from 'vue-router';

let pagesLink = [];
Pages.forEach(page => {
    if(page.menu === false) {
        return null
    }
    let name = page.name.split('');
    name[0] = name[0].toUpperCase();
    name = name.join('');

    pagesLink.push({
        path: page.path,
        name
    });
})
</script>

<style>
ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul li {
    text-align: center;
}
</style>
