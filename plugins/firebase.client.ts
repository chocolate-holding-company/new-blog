// plugins/firebase.client.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
 const config = useRuntimeConfig().public;

 // Verification step: If this is empty, your nuxt.config.ts is the problem
 if (!config.firebaseApiKey) {
 }

 const firebaseConfig = {
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectId,
  storageBucket: config.firebaseStorageBucket,
  messagingSenderId: config.firebaseMessagingSenderId,
  appId: config.firebaseAppId,
 };

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 // Use this specific Nuxt 3 helper to ensure it's provided correctly
 nuxtApp.provide("db", db);
});
