<template>
  <div class="carousel-item" :class="current_mode">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type ItemMode = 'hidden' | 'prev-hidden' | 'prev' | 'current' | 'next' | 'next-hidden';
const props = defineProps<{
  index: number;
  current: number;
}>();

const mode = ref<ItemMode[]>([
  'hidden',
  'prev-hidden',
  'prev',
  'current',
  'next',
  'next-hidden'
]);
const current_mode = computed((): ItemMode => {
  switch (props.index - props.current) {
    case -2:
      return 'prev-hidden';
      break;
    case -1:
      return 'prev';
      break;
    case 0:
      return 'current';
      break;
    case 1:
      return 'next';
      break;
    case 2:
      return 'next-hidden';
      break;
    default:
      return 'hidden';
  }
})
</script>

<style scoped>
.carousel-item {
  width: 250px;
  height: 250px;

  border: 2px solid rgb(105, 105, 105);
  background-color: gray;

  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;

  position: absolute;
  top: 0; left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition-property: opacity, translate, scale;
  transition-duration: 180ms;
}

.hidden {
  display: none;
}

.prev-hidden, .next-hidden {
  scale: 0.8;
  opacity: 0;
  z-index: 0;
}

.prev, .next {
  scale: 0.9;
  opacity: 0.65;
  z-index: 2;
}

.prev-hidden {
  translate: -210% -25%;
}

.prev {
  translate: -130% -10%;
}

.current {
  opacity: 1;
  translate: -50% 0;
  z-index: 4;
}

.next {
  translate: 30% -10%;
}

.next-hidden {
  translate: 110% -25%;
}
</style>
