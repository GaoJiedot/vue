<script setup>
import {ref} from 'vue';
import Mock from "mockjs"
import axios from 'axios';
import localMovies from '/src/movies.json'
import Movie from "./MovieCard.vue";

Mock.mock('/mock/movies', 'get', {
  code: 200,
  data: localMovies
})

const movies = ref([])
const fetchMovies = async () => {
  try {
    const response = await axios.get('/mock/movies');
    movies.value = response.data.data;
  } catch (error) {
    console.error("There was an error fetching the movies: ", error);
  }

  console.log(movies)
};

const selectMovie = (movie) => {
  router.push({name: 'MovieDetail', params: {id: movie.id}});
};

fetchMovies()
</script>

<template>
  <div>
    <h1>电影列表</h1>
    <ul>
      <li v-for="movie in movies">
        <Movie :movie="movie"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>