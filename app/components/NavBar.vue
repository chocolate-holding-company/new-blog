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
     <Magnetic v-for="(link, i) in links" :key="link.name">
      <NuxtLink
       :to="link.path"
       class="nav-item"
       :style="{ transitionDelay: `${(i + 1) * 0.1}s` }"
       @click="closeMenu"
      >
       {{ link.name }}
      </NuxtLink>
     </Magnetic>
    </nav>
   </div>
  </Transition>
 </header>
</template>

<script setup>
const route = useRoute();
const isVisible = ref(true);
const isMenuOpen = ref(false);
const lastY = ref(0);

const links = [
 { name: "Home", path: "/" },
 { name: "Command Line", path: "/blog/command-line" },
 { name: "About", path: "/about" },
];

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
 () => closeMenu()
);
</script>

<style scoped>
.navbar {
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 60px;
 display: flex;
 align-items: center;
 /* Higher than your page content, but lower than the button */
 z-index: 9000;
 background: #333333;
 backdrop-filter: blur(10px);
 transition: transform 0.4s ease;
}

/* Logic for hiding/showing */
.nav-hidden {
 transform: translateY(-100%);
}

/* Logic for when menu is open */
.navbar.menu-active {
 background: transparent !important;
 backdrop-filter: none !important;
}

.nav-container {
 width: 100%;
 padding: 0 5%;
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.logo {
 font-size: 1.1rem;
 font-weight: 500;
 letter-spacing: 2px;
 color: white;
}

/* --- THE HAMBURGER (Stays on top) --- */
.hamburger {
 position: relative;
 background: none;
 border: none;
 cursor: pointer;
 padding: 15px;
 display: flex;
 flex-direction: column;
 gap: 6px;
 z-index: 10001; /* Highest priority */
}

.line {
 width: 30px;
 height: 2px;
 background: white;
 transition: 0.3s;
}

/* Switch to white 'X' when active */
.active .line {
 background: white !important;
}
.active .line:nth-child(1) {
 transform: translateY(4px) rotate(45deg);
}
.active .line:nth-child(2) {
 transform: translateY(-4px) rotate(-45deg);
}

/* --- THE OVERLAY --- */
.menu-overlay {
 position: fixed;
 inset: 0;
 width: 100vw;
 height: 100vh;
 background: black;
 /* Between the Navbar and the Hamburger */
 z-index: 9500;
 display: flex;
 justify-content: center;
 align-items: center;
}

.nav-item {
 color: white;
 font-size: 3rem;
 text-decoration: none;
 display: block;
 margin: 10px 0;
 opacity: 0;
 transform: translateX(30px);
 transition: 0.5s ease forwards;
}

/* Animating the links in */
.overlay-enter-to .nav-item,
.menu-overlay .nav-item {
 opacity: 1;
 transform: translateX(0);
}

/* --- MAGNETIC WRAPPER FIX --- */
/* Ensure the magnetic div doesn't block the button's layout */
.magnetic-wrap {
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 z-index: 10000; /* Higher than .menu-overlay */
}
</style>
