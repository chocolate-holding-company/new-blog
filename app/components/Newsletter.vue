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
 <section
  class="max-w-[700px] mx-auto mb-(--spacing-xxl) py-[48px] px-[32px] bg-(--aux-bg) border border-(--aux-border) rounded-lg text-center shadow-lg sm:py-[60px] sm:px-[72px]"
 >
  <h3 class="text-(--aux-text) mb-8 font-bold">Join our inner circle</h3>
  <p class="text-(--aux-text) mb-6 text-lg">
   Get curated insights and weekly updates delivered straight to your inbox.
  </p>

  <form @submit.prevent="onSubscribe" class="flex flex-col gap-6 text-center">
   <input v-model="honeypot" type="text" style="display: none" tabindex="-1" />
   <input
    v-model="email"
    type="email"
    required
    aria-label="Email address"
    placeholder="Enter your email"
    class="mb-2"
   />
   <button :disabled="loading" class="but-primary mx-auto w-40 py-2 px-3">
    <span v-if="loading"> <BaseSpinner /> Submitting... </span>
    <span v-else> Subscribe </span>
   </button>
  </form>
  <p v-if="error" class="msg-error mt-20 font-semibold">{{ error }}</p>
  <Transition name="fade">
   <p
    v-if="success"
    class="msg-success mt-10 font-semibold text-(--success-color)"
   >
    Welcome to the family! 🎉
   </p>
  </Transition>
 </section>
</template>
