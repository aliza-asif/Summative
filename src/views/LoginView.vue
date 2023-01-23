<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const loginUserByEmail = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/purchase');
  } catch (error) {
  }
};

const loginUserByGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, provider);
  router.push('/purchase');
};
</script>

<template>
  <div class="home-container">
    <h5>Login by Google</h5>
    <button @click="loginUserByGoogle">Google</button>
    <hr />
    <h5>Login by email</h5>
    <form @submit.prevent="loginUserByEmail()">
      <input v-model="email" type="email" placeholder="email" />
      <input v-model="password" type="password" placeholder="password" /> 
      <input type="submit" value="Login" />
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