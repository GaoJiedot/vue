<script setup>
defineProps(['movie'])
</script>

<template>
  <h1>电影详情</h1>
  <div class="movie-card">
    <div class="movie-image">
      <img :src="'/movies/' + movie.title + '.webp'" :alt="movie.title + ' cover'" />
    </div>
    <div class="movie-info">
      <h2>{{ movie.title }}</h2>
      <h5>Directed by {{ movie.director }}</h5>
      <p class="year-genre"><strong>Year:</strong> {{ movie.year }} | <strong>Genre:</strong> {{ movie.genre }}</p>
      <p>{{ movie.description }}</p>
    </div>
  </div>
</template>
<style scoped>
.movie-card {
  display: flex;
  align-items: flex-start;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: #fff;
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-image img {
  width: 150px;
  height: 225px; /* Assuming a typical DVD cover aspect ratio */
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.movie-info h2 {
  color: #333;
  font-size: 24px;
}

.movie-info h5 {
  color: #666;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 10px;
}

.movie-info .year-genre {
  color: #444;
  font-size: 14px;
  margin-bottom: 20px;
}

.movie-info p {
  color: #555;
  font-size: 14px;
  line-height: 1.6;
}
</style>