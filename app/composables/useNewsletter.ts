import {
 collection,
 addDoc,
 query,
 where,
 getDocs,
 serverTimestamp,
} from "firebase/firestore";

export const useNewsletter = () => {
 const { $db } = useNuxtApp();
 const loading = ref(false);
 const success = ref(false);
 const error = ref<string | null>(null);

 const subscribe = async (email: string, honeypot: string) => {
  error.value = null;

  // 1. Honeypot check
  if (honeypot) {
   success.value = true;
   return;
  }

  // 2. Email Pattern Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
   error.value = "Please enter a valid email address.";
   return;
  }

  loading.value = true;
  try {
   // 3. Duplicate check
   const q = query(collection($db, "newsletter"), where("email", "==", email));
   const querySnapshot = await getDocs(q);

   if (!querySnapshot.empty) {
    error.value = "This email is already on the list.";
    return;
   }

   // 4. Save to Firestore
   await addDoc(collection($db, "newsletter"), {
    email,
    subscribedAt: serverTimestamp(),
   });

   success.value = true;
   setTimeout(() => (success.value = false), 5000);
  } catch (e) {
   error.value = "An error occurred. Please try again.";
  } finally {
   loading.value = false;
  }
 };

 return { subscribe, loading, success, error };
};
