<script setup lang="ts">
// No import needed! useScrollProgress is auto-imported by Nuxt.
const { isVisible, dashOffset, circumference, radius, scrollToTop } =
 useScrollProgress(400);
</script>

<template>
 <button
  class="back-to-top"
  :class="{ 'is-visible': isVisible }"
  @click="scrollToTop"
 >
  <svg class="progress-ring" width="48" height="48">
   <circle
    class="progress-ring__circle"
    stroke="currentColor"
    stroke-width="3"
    fill="transparent"
    :r="radius"
    cx="24"
    cy="24"
    :style="{
     strokeDasharray: `${circumference} ${circumference}`,
     strokeDashoffset: dashOffset,
    }"
   />
  </svg>
  <svg
   class="arrow"
   viewBox="0 0 24 24"
   width="20"
   height="20"
   fill="none"
   stroke="currentColor"
  >
   <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
 </button>
</template>

<style scoped>
.back-to-top {
 position: fixed;
 bottom: 2rem;
 right: 2rem;
 z-index: 50;
 width: 48px;
 height: 48px;
 border-radius: 50%;
 background-color: #111; /* Dark background to pop the green ring */
 color: #00dc82; /* Progress ring and arrow color */
 border: none;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 opacity: 0;
 visibility: hidden;
 transform: translateY(20px);
 transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-to-top.is-visible {
 opacity: 1;
 visibility: visible;
 transform: translateY(0);
}

.progress-ring {
 position: absolute;
 top: 0;
 left: 0;
 transform: rotate(-90deg); /* Start the ring at the top */
}

.progress-ring__circle {
 transition: stroke-dashoffset 0.1s linear;
}

.arrow-icon {
 position: relative;
 z-index: 2;
 transition: transform 0.3s ease;
}

.back-to-top:hover .arrow-icon {
 transform: translateY(-3px);
}
</style>
