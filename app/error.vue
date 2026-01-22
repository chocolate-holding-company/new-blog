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

<style>
.error-wrap {
 height: 50vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}

.error-wrap h3 {
 font-size: 5rem;
 color: red;
}

.error-wrap p {
 font-size: 1.5rem;
 letter-spacing: 1px;
 font-weight: 600;
}

.error-wrap button {
 font-size: 1.1rem;
 letter-spacing: 1px;
 font-style: italic;
}

.error-wrap button:hover {
 color: rgb(72, 72, 226);
 text-decoration: underline;
}

@media (min-width: 768px) {
 .error-wrap h3 {
  font-size: 7rem;
 }
 .error-wrap p {
  font-size: 1.7rem;
 }
 .error-wrap button {
  font-size: 1.2rem;
 }
}
</style>
