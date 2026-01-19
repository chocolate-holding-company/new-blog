<script setup>
const magnetic = ref(null);

const handleMouseMove = (e) => {
 const item = magnetic.value;
 if (!item) return;

 const rect = item.getBoundingClientRect();

 // Calculate center of the element
 const centerX = rect.left + rect.width / 2;
 const centerY = rect.top + rect.height / 2;

 // Calculate distance from mouse to center
 const deltaX = e.clientX - centerX;
 const deltaY = e.clientY - centerY;

 // Move the element (0.3 = 30% of the distance)
 item.style.transform = `translate(${deltaX * 0.3}px, ${deltaY * 0.3}px)`;
};

const handleMouseLeave = () => {
 if (magnetic.value) {
  magnetic.value.style.transform = `translate(0px, 0px)`;
 }
};
</script>

<template>
 <div
  ref="magnetic"
  class="magnetic-wrap"
  @mousemove="handleMouseMove"
  @mouseleave="handleMouseLeave"
 >
  <slot />
 </div>
</template>

<style scoped>
.magnetic-wrap {
 display: block;
 transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
 will-change: transform;
}
</style>
