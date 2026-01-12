<template>
 <div class="spinner-container">
  <div class="spinner"></div>
 </div>
</template>

<style scoped>
.spinner-container {
 display: flex;
 justify-content: center;
 padding: 2rem;
}

.spinner {
 width: 40px;
 height: 40px;
 border: 3px solid rgba(0, 220, 130, 0.2); /* Nuxt Green transparent */
 border-top-color: #00dc82; /* Nuxt Green solid */
 border-radius: 50%;
 animation: spin 0.8s linear infinite;
}

@keyframes spin {
 to {
  transform: rotate(360deg);
 }
}
</style>
