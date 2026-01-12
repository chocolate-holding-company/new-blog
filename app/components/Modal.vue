<script setup>
defineEmits(["close"]);
</script>

<template>
 <div class="modal-overlay" @click.self="$emit('close')">
  <div class="modal-content">
   <button
    class="close-button"
    @click="$emit('close')"
    aria-label="Close modal"
   >
    <svg
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
    >
     <line x1="18" y1="6" x2="6" y2="18"></line>
     <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
   </button>
   <slot />
  </div>
 </div>
</template>
