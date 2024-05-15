<template>
  <nav class="xvx-creator-component basic-navbar"
    :style="styles">
    <div class="logo-container">
      <BasicLogo logo-url="./logo.png" website="My website"></BasicLogo>
    </div>
    <ul class="links-container">
      <slot name="links"></slot>
    </ul>
    <ul class="social-container">
      <slot name="social"></slot>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import BasicLogo from './BasicLogo.vue';
import { CSSProperties, computed } from 'vue';

const props = defineProps<{
  logoUrl?: string;
  height?: number;
  bg?: string;
  border?: string;
  fixed?: boolean;
}>();
const styles = computed((): CSSProperties => ({
  height: (props.height || '70') + 'px',
  background: props.bg,
  border: props.border,
  position: props.fixed ? 'fixed' : 'initial',
}));
</script>

<style scoped>
@import '@/comp_styles/variables';

nav {
  all: initial;
  background: var(--primary);
  padding: 8px;

  display: grid;
  grid-template-columns: auto auto 200px;
}

nav > div {
  border: 1px solid black;
}
</style>
