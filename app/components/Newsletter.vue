<script setup lang="ts">
const { subscribe, loading, success, error } = useNewsletter();
const email = ref("");
const honeypot = ref("");

const onSubscribe = async () => {
 await subscribe(email.value, honeypot.value);
 if (success.value) email.value = "";
};
</script>

<template>
 <section class="newsletter-wrapper">
  <h3>Join our inner circle</h3>
  <p class="description">
   Get curated insights and weekly updates delivered straight to your inbox.
  </p>

  <form @submit.prevent="onSubscribe" class="input-group">
   <input v-model="honeypot" type="text" style="display: none" tabindex="-1" />
   <input
    v-model="email"
    type="email"
    required
    aria-label="Email address"
    placeholder="Enter your email"
   />
   <button :disabled="loading" class="btn">
    <span v-if="loading"> <BaseSpinner /> Submitting... </span>
    <span v-else> Subscribe </span>
   </button>
  </form>
  <p v-if="error" class="msg-error">{{ error }}</p>
  <Transition name="fade">
   <p v-if="success" class="msg-success">Welcome to the family! 🎉</p>
  </Transition>
 </section>
</template>
