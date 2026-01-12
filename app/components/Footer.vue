<template>
 <footer class="footer">
  <div class="container">
   <div class="footer-content">
    <div class="footer-section">
     <h3>Hill Walking Made Easy</h3>
     <p>Your guide to exploring the hills safely and confidently.</p>
    </div>
   </div>
   <div class="footer-bottom">
    <p>
     &copy; {{ currentYear }} Hill Walking Made Easy |
     <a href="#" @click.prevent="showContactModal = true">Contact Us</a>
     |
     <a href="#" @click.prevent="showPrivacyModal = true">Privacy</a>
    </p>
    <Modal v-if="showPrivacyModal" @close="showPrivacyModal = false">
     <Privacy />
    </Modal>
    <Modal v-if="showContactModal" @close="showContactModal = false">
     <Contact />
    </Modal>
   </div>
  </div>
 </footer>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
const currentYear = new Date().getFullYear();
defineEmits(["openContact", "openPrivacy"]);
const showPrivacyModal = ref(false);
const showContactModal = ref(false);

let body = null;
onMounted(() => {
    body = typeof document !== "undefined" ? document.body : null;
    if (!body) return;
    if (showContactModal.value || showPrivacyModal.value) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }
});

const stopWatch = watch([showContactModal, showPrivacyModal], ([contact, privacy]) => {
    if (!body) return;
    if (contact || privacy) body.classList.add("no-scroll");
    else body.classList.remove("no-scroll");
});

onBeforeUnmount(() => {
    stopWatch();
    if (body) body.classList.remove("no-scroll");
});
</script>
