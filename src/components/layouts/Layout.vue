
<script setup>
import Header from "./Header.vue";

</script>
<template>
  <Header/>
  <slot />
</template>

<style>
header {
  margin-bottom: 35px;
}

div.banner {
  width: 100%;
  height: auto;
}

div.banner>img {
  width: 100%;
  height: auto;
}
</style>