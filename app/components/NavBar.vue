<template>
 <header
  :class="['navbar', { 'nav-hidden': !isVisible, 'menu-active': isMenuOpen }]"
 >
  <div class="nav-container">
   <Magnetic>
    <NuxtLink to="/" class="logo" @click="closeMenu">bylucas</NuxtLink>
   </Magnetic>

   <Magnetic>
    <button @click="toggleMenu" :class="['hamburger', { active: isMenuOpen }]">
     <span class="line"></span>
     <span class="line"></span>
    </button>
   </Magnetic>
  </div>

  <Transition name="overlay">
   <div v-if="isMenuOpen" class="menu-overlay" @click="handleOverlayClick">
    <nav class="menu-links">
     <div class="left-link">
      <Magnetic v-for="(link, i) in left_links" :key="link.name">
       <NuxtLink
        :to="link.path"
        class="nav-item"
        :style="{ transitionDelay: `${(i + 1) * 0.1}s` }"
        @click="closeMenu"
       >
        {{ link.name }}
       </NuxtLink>
      </Magnetic>
     </div>
     <div class="right-link">
      <Magnetic v-for="(link, i) in right_links" :key="link.name">
       <NuxtLink
        :to="link.path"
        class="nav-item"
        :style="{ transitionDelay: `${(i + 1) * 0.1}s` }"
        @click="closeMenu"
       >
        {{ link.name }}
       </NuxtLink>
      </Magnetic>
     </div>
    </nav>
   </div>
  </Transition>
 </header>
</template>

<script setup>
import { left_links, right_links } from "~/data/menu-links";
const route = useRoute();
const isVisible = ref(true);
const isMenuOpen = ref(false);
const lastY = ref(0);

const closeMenu = () => {
 isMenuOpen.value = false;
 document.body.style.overflow = "";
 document.body.classList.remove("menu-open");
};

const toggleMenu = () => {
 isMenuOpen.value = !isMenuOpen.value;
 if (isMenuOpen.value) {
  document.body.style.overflow = "hidden";
  document.body.classList.add("menu-open");
 } else {
  closeMenu();
 }
};

const handleOverlayClick = (e) => {
 if (e.target.classList.contains("menu-overlay")) closeMenu();
};

const handleScroll = () => {
 if (isMenuOpen.value) return;
 const currentY = window.scrollY;
 isVisible.value = currentY <= 80 || currentY < lastY.value;
 lastY.value = currentY;
};

onMounted(() => {
 window.addEventListener("scroll", handleScroll);
 window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
 });
});

onUnmounted(() => {
 window.removeEventListener("scroll", handleScroll);
 closeMenu();
});

watch(
 () => route.fullPath,
 () => closeMenu(),
);
</script>
