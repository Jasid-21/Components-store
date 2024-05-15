<template>
  <div class="carousel">
    <CarouselItem v-for="(i, idx) of items" :index="idx" :current="index">
      {{ i }}
    </CarouselItem>

    <div class="carousel-btn left-btn" @click="back">
      <fai icon="fa-solid fa-chevron-left"></fai>
    </div>
    <div class="carousel-btn right-btn" @click="next">
      <fai icon="fa-solid fa-chevron-right"></fai>
    </div>
  </div>
</template>

<script setup lang="ts">
import CarouselItem from './CarouselItem.vue';
import { computed, onMounted, ref } from 'vue';

const items = ref<string[]>(["Juan", "José", "María", "Jorge", "Jessica", "Josefina"]);
const index = ref<number>(0);

const next = () => {
  if (index.value == items.value.length - 1) return;
  index.value++;
}

const back = () => {
  if (index.value == 0) return;
  index.value--;
}
</script>

<style scoped>
.carousel {
  height: 250px;
  position: relative;
  margin-top: 100px;
  user-select: none;
  isolation: isolate;
}

.carousel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: rgb(137, 137, 255);
  color: rgb(0, 0, 142);
  font-size: 1.2rem;

  position: absolute;
  top: 50%;
  translate: -50% 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-btn:hover {
  background-color: rgb(120, 120, 255);
}

.left-btn {
  left: 120px;
}

.right-btn {
  right: 120px;
}
</style>
