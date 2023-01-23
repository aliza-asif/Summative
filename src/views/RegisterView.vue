<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const username = ref("");
const email = ref("");
const password1 = ref("");
const password2 = ref("");

const registerUserByEmail = async () => {
  if (password1.value !== password2.value) {
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password1.value);
  } catch (error) {
  }
};

const registerUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
};
</script>

<template>
  <div class="home-container">
    <h5>Register by Google</h5>
    <button @click="registerUserByGoogle">Google</button>
    <hr />
    <h5>Register by email</h5>
    <form @submit.prevent="registerUserByEmail()">
      <input v-model="username" type="text" placeholder="username" />
      <input v-model="email" type="email" placeholder="email" /> 
      <input v-model="password1" type="password" placeholder="password" />
      <input v-model="password2" type="password" placeholder="re-enter password" /> 
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 3rem;
  background-color: black;
}

h5{
  color: white;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
}

input{
  margin-bottom: 20px;
  width: 350px;
  height: 30px;
}

button{
  width: 350px;
  height: 30px;
}

</style>