<template>
  <div class="score-selector">
    <div class="score-item" :class="{ active: idx < score }" @click="setScore(idx + 1)"
      v-for="(s, idx) of Array(max)">
      <fai icon="fa-solid fa-star"></fai>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits<{ (e: 'score-changed', value: number): void }>();
const props = withDefaults(defineProps<{
  max: number;
}>(), {
  max: 5,
});

const score = ref<number>(2);
watch(score, v => emit('score-changed', v));
const setScore = (v: number) => score.value = v;
</script>

<style scoped>
.score-selector {
  display: flex;
}

.score-selector:hover
.score-item:not(
  .score-item:hover ~ .score-item,
  .score-item.active
) {
  opacity: 0.8;
}

.score-item {
  opacity: 0.6;
  color: #acacac;
}

.score-item.active {
  opacity: 1;
  color: rgb(227, 227, 0);
}
</style>
