<script setup lang="ts">
const { progress } = useScrollProgress();
</script>

<template>
  <div class="progress-container">
    <div
      class="progress-bar"
      :style="{ transform: `scaleX(${progress})` }"
    ></div>
  </div>
</template>

<style scoped>
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.progress-bar {
  width: 100%;
  height: 100%;
  background-color: #00dc82; /* Nuxt Green */
  transform-origin: left;
  transition: transform 0.1s linear;
}
</style>