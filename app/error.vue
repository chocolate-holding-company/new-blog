<template>
 <div class="error-wrap">
  <h3>{{ error.statusCode }}</h3>
  <p>{{ error.message }}</p>
  <button @click="handleError">Go Home...</button>
 </div>
</template>

<script setup>
defineProps({
 error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
