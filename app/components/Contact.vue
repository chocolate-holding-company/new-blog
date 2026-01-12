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
 <div class="form-wrapper">
  <h2>Contact Us</h2>
  <p>Have a question or want to get in touch?<br />Fill out the form below.</p>
  <form @submit.prevent="handleSubmit">
   <div style="display: none" aria-hidden="true">
    <input v-model="form.fax_number" type="text" tabindex="-1" />
   </div>

   <div>
    <input
     v-model="form.name"
     type="text"
     placeholder="Name"
     class="input-field"
    />
    <p v-if="errors.name" class="err-text">{{ errors.name }}</p>
   </div>

   <div>
    <input
     v-model="form.email"
     type="text"
     placeholder="Email"
     class="input-field"
    />
    <p v-if="errors.email" class="err-text">{{ errors.email }}</p>
   </div>

   <div>
    <textarea
     v-model="form.message"
     placeholder="Message..."
     rows="4"
     class="input-field"
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
