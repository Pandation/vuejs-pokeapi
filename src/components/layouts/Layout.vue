<script setup>

</script>

<template>
 <header>
   <div class="banner"><img src="/images/pokemon-banner.webp" alt=""></div>
     <div class="wrapper">
      <nav>
        <RouterLink to="/">Pokémons</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
 <slot/>
</template>

<style>
header {
   margin-bottom: 35px;
}
div.banner {
   width: 100%;
   height: auto;
}
div.banner > img {
   height: 100%;
}
</style>