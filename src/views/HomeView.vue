<template>
  <div class="home">
    <ScoreSelector></ScoreSelector>
  </div>
</template>

<script lang="ts" setup>
import ScoreSelector from '@/components/ScoreSelector/ScoreSelector.vue';
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
