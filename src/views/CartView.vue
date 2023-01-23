<script setup>
import { useStore } from "../store/index.js";

const store = useStore();
</script>

<template>
  <h1>Cart</h1>
  <div class="cart-container">
  <div class="box" v-for="movie in Array.from(store.cart.values())">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    <h1>{{ movie.title }}</h1>
    <h2>{{ movie.date }}</h2>
    <button @click="store.removeFromCart(movie.id)">Remove</button>
  </div>
</div>
</template>

<style scoped>

.box{
  margin-bottom: 60px;
}

h2{
  color: white;
}

.name{
  padding: 3px;
}
img {
  width: 200px;
  aspect-ratio: 2 / 3;
}
.cart-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background-color: black;
  padding: 30px;
  padding-bottom: 50%;
}

h1{
  color: white;
  background-color: black;
  margin-bottom: 0px;
  padding: 30px;
}
</style>