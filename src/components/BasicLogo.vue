<template>
  <a class="xvx-creator-component basic-logo" :href="clickUrl">
    <img :src="logoUrl" alt="Logo" class="logo">
  </a>
</template>

<script setup lang="ts">
//<span class="website" v-if="website">{{ website }}</span>
const props = withDefaults(defineProps<{
  logoUrl: string;
  clickUrl?: string;
  website?: string;
  color?: string;
}>(), {
  clickUrl: '/',
});
</script>

<style scoped>
@import '@/comp_styles/variables';

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;   
  box-sizing: border-box;
}

a.xvx-creator-component {
  all: initial;
  
  max-width: 100%;
  height: 100%;
  border: 1px solid red;
  display: block;
}

a.xvx-creator-component img {
  border: 1px solid blue;
  max-height: min-content;
  width: auto;
  object-fit: cover;
}
</style>
