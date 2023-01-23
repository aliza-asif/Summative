<script setup>
import axios from "axios";
import { ref } from "vue";
import SiteModal from "../components/SiteModal.vue";
import { useStore } from "../store/index.js";

const store = useStore();
const genre = ref(28);
const criteria = ref("");
const searchResults = ref([]);
const page = ref(1);
const totalPages = ref(0);
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getGenres = async () => {
  searchResults.value = [];
  criteria.value = "";
  await store.getMovies(genre.value);
};

const search = async (direction) => {
  page.value += direction;

  let data = (
    await axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "4ac047e4be310dc740b5885103e7ee2b",
        query: criteria.value,
        include_adult: false,
        page: page.value,
      },
    })
  ).data;

  totalPages.value = data.total_pages;

  searchResults.value = data.results.map((movie) => {
    return {
      id: movie.id,
      image: movie.poster_path,
    };
  });
};

// SHOULD ONLY BE RUN ONCE!!!!
// await store.populateFirestore();
</script>

<template>
  <div class="big-container">
  <input class="searchbar" placeholder=" 🔍 Search Movies..." type="search" v-model="criteria" @keydown.enter="search(0)" />
  <br />
  <RouterLink to="/cart" custom v-slot="{ navigate }">
    <div class="icon"><button @click="navigate" role="link"><img src="download.png"></button></div>
  </RouterLink>
  <br />
  <p>Select Genre:</p>
  <select class="dropdown" v-model="genre" @change="getGenres()">
    <option value="Action">Action</option>
    <option value="Family">Family</option>
    <option value="Science Fiction">Science Fiction</option>
    <option value="Adventure">Adventure</option>
    <option value="Fantasy">Fantasy</option>
  </select>
  <template v-if="searchResults.length">
    <div class="navigation">
      <h1>{{ `Page ${page} of ${totalPages}` }}</h1>
        <div class="pagebutton"><button class="pb" v-show="page> 1" @click="search(-1)">Prev </button> <button class="fill"> </button>
        <button class="pb" v-show="page < totalPages" @click="search(1)">Next</button></div> <br> <br>
    </div>
  </template>
  <div class="purchase-container">
    <template v-if="searchResults.length">
      <img
        v-for="movie in searchResults"
        :id="movie.id"
        @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.image}`"
      />
    </template>
    <template v-else>
      <img
        v-for="movie in store.movies"
        :id="movie.id"
        @click="openModal(movie.id)"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
    </template>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  </div>
</div>
</template>

<style scoped>

p{
  color: white;
  font-size: larger;
  margin-bottom: 10px;
}
.fill {
  background-color: black;
}

.pb{
    width: 10%;
    padding: 5px;
}
.big-container{
  background-color: black;
  padding-bottom: 100%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
}
h1{
  color: white;
}
.purchase-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

img {
  width: 90%;
  height: 90%;
}
.icon {
  height: 100px;
  width: 100px;
  float: right;
  margin-right: 20px;
}

.searchbar{
  width: 80%;
  height: 40px;
  font-size: large;
}

.dropdown{
  width: 20%;
  height: 30px;
  font-size: medium;
}
</style>