<script setup lang="ts">
const { submitContact, loading, success, errors } = useContact();
const form = reactive({ name: "", email: "", message: "", fax_number: "" });

const handleSubmit = async () => {
 const ok = await submitContact({
  name: form.name,
  email: form.email,
  message: form.message,
  honeypot: form.fax_number,
 });
 if (ok) {
  form.name = "";
  form.email = "";
  form.message = "";
  form.fax_number = "";
 }
};
</script>

<template>
 <div
  class="form-wrapper my-(--spacing-md) mx-auto bg-slate-700 sm:p-(--spacing-lg)"
 >
  <h2 class="text-slate-50 mb-(--spacing-sm)">Contact Us</h2>
  <p class="text-slate-100 mb-(--spacing-sm text-[1.1rem])">
   Have a question or want to get in touch?<br />Fill out the form below.
  </p>
  <form @submit.prevent="handleSubmit">
   <div style="display: none" aria-hidden="true">
    <input v-model="form.fax_number" type="text" tabindex="-1" />
   </div>

   <div>
    <input
     v-model="form.name"
     type="text"
     placeholder="Name"
     class="input-field text-slate-600"
    />
    <p v-if="errors.name" class="err-text">{{ errors.name }}</p>
   </div>

   <div>
    <input
     v-model="form.email"
     type="text"
     placeholder="Email"
     class="input-field text-slate-600"
    />
    <p v-if="errors.email" class="err-text">{{ errors.email }}</p>
   </div>

   <div>
    <textarea
     v-model="form.message"
     placeholder="Message..."
     rows="4"
     class="input-field text-slate-600"
    ></textarea>
    <p v-if="errors.message" class="err-text">{{ errors.message }}</p>
   </div>

   <button :disabled="loading" class="btn">
    <span v-if="loading"> <BaseSpinner /> Submitting... </span>
    <span v-else> Submit </span>
   </button>

   <Transition name="fade">
    <div v-if="success" class="toast">Success! We'll be in touch.</div>
   </Transition>
  </form>
 </div>
</template>

<style scoped>
.form-wrapper {
 max-width: 550px;
 border-radius: 12px;

 @media (min-width: 700px) {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
 }
}
.err-text {
 color: var(--error-color) !important;
 font-size: 0.95rem !important;
 font-weight: 500;
 margin-top: 4px;
 background-color: white;
 border-radius: 3px;
 padding: 8px 10px;
 width: 260px;
 margin-left: auto;
 margin-right: auto;
}
.toast {
 background: var(--success-color);
 color: white;
 padding: 12px;
 border-radius: 8px;
 text-align: center;
 margin-top: 1.1rem;
}
.input-field {
 margin-top: 12px;
 margin-bottom: 12px;
}

/* Buttons */
.btn {
 margin-top: 1rem;
 padding: 8px 12px;
 border: 2px solid #3b82f6;
 border-radius: 8px;
 font-size: 0.9rem;
 color: white;
}

.btn:hover {
 background-color: #3b82f6;
}
.btn:disabled {
 background-color: #94a3b8;
 cursor: not-allowed;
}
/* Transitions */
.fade-enter-active,
.fade-leave-active {
 transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}
</style>
