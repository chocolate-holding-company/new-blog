import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const useContact = () => {
 const { $db } = useNuxtApp();
 const loading = ref(false);
 const success = ref(false);
 const errors = ref<Record<string, string>>({});

 const validate = (data: {
  name: string;
  email: string;
  message: string;
  honeypot: string;
 }) => {
  const errs: Record<string, string> = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Honeypot check: If filled, it's a bot
  if (data.honeypot) return false;

  if (data.name.length <= 3) errs.name = "Name must be more than 3 characters.";
  if (!emailRegex.test(data.email)) errs.email = "Invalid email format.";

  // Word count logic
  const words = data.message
   .trim()
   .split(/\s+/)
   .filter((word) => word.length > 0);
  if (words.length < 10)
   errs.message = `Need 10 words (currently ${words.length}).`;

  errors.value = errs;
  return Object.keys(errs).length === 0;
 };

 const submitContact = async (formData: {
  name: string;
  email: string;
  message: string;
  honeypot: string;
 }) => {
  if (!validate(formData)) {
   // If honeypot caught a bot, we pretend it worked so the bot stops trying
   if (formData.honeypot) {
    success.value = true;
    return true;
   }
   return false;
  }

  loading.value = true;
  try {
   await addDoc(collection($db, "contacts"), {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    createdAt: serverTimestamp(),
   });
   success.value = true;
   setTimeout(() => (success.value = false), 5000);
   return true;
  } catch (e) {
   errors.value = { form: "Error saving to database." };
   return false;
  } finally {
   loading.value = false;
  }
 };

 return { submitContact, loading, success, errors };
};
