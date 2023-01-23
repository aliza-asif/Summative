<script setup></script>

<template>
  <div class="header-container">
    <h1>Le Film Forum </h1>
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">Login</button>
    </RouterLink> <button class="filler"></button>
    <RouterLink to="/register" custom v-slot="{ navigate }">
      <button @click="navigate" role="link">Register</button>
    </RouterLink>
  </div>
</template>

<style scoped>

.filler{
  background-color: black;
  width: 2px;
}
.header-container {
  padding: 1rem;
  border: 1px solid rgb(0, 0, 0);
  background-color: black;
  padding: 30px;
  padding-left: 50px;
}
button {
  height: 40px;
  width: 100px;
  font-size: 15px;
}
h1{
  color: white;
  font-size: 30px;
}
</style>