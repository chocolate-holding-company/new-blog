<script setup lang="ts">
const isDark = ref(false);

// Initialize theme on mount
onMounted(() => {
 const savedTheme = localStorage.getItem("theme");
 if (
  savedTheme === "dark" ||
  (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
 ) {
  setDark(true);
 }
});

const toggleTheme = () => {
 setDark(!isDark.value);
};

function setDark(val: boolean) {
 isDark.value = val;
 if (val) {
  document.body.classList.add("dark");
  localStorage.setItem("theme", "dark");
 } else {
  document.body.classList.remove("dark");
  localStorage.setItem("theme", "light");
 }
}
</script>

<template>
 <button @click="toggleTheme" class="theme-toggle">
  {{ isDark ? "☀️" : "🌙" }}
 </button>
</template>

<style scoped>
.theme-toggle {
 cursor: pointer;
 margin-right: auto;
 margin-left: auto;
 display: block;
 font-size: 1.4rem;
 padding: 7px 10px;
 margin-bottom: 1.1rem;
 border-radius: 50%;
 border-top: 1px solid rgba(0, 0, 0, 0.6);
 background: #222;
}
</style>
