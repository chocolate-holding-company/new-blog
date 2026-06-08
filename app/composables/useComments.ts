import {
 collection,
 addDoc,
 query,
 where,
 orderBy,
 onSnapshot,
 serverTimestamp,
 type Firestore,
} from "firebase/firestore";

interface Comment {
 id: string;
 userName: string;
 content: string;
 createdAt: any;
 isPending?: boolean; // Flag to identify local comments
 postId: string;
}

export const useComments = (postId: string) => {
 const { $db } = useNuxtApp() as unknown as { $db: Firestore };

 const serverComments = ref<Comment[]>([]);
 const localComments = ref<Comment[]>([]);
 const loading = ref(false);
 const success = ref(false);
 const error = ref<string | null>(null);

 // Computed property to merge live and local pending comments
 const comments = computed(() => {
  const combined = [...localComments.value, ...serverComments.value];
  // Sort by date (descending)
  return combined.sort((a, b) => {
   const dateA = a.createdAt?.seconds || Date.now();
   const dateB = b.createdAt?.seconds || Date.now();
   return dateB - dateA;
  });
 });

 const fetchComments = () => {
  // 1. Load pending comments from Local Storage
  const saved = localStorage.getItem(`pending_comments_${postId}`);
  if (saved) {
   localComments.value = JSON.parse(saved);
  }

  // 2. Listen to Firestore
  const q = query(
   collection($db, "comments"),
   where("postId", "==", postId),
   where("isApproved", "==", true),
   orderBy("createdAt", "desc"),
  );

  return onSnapshot(q, (snapshot) => {
   serverComments.value = snapshot.docs.map(
    (doc) =>
     ({
      id: doc.id,
      ...doc.data(),
     }) as Comment,
   );

   // 3. Clean up Local Storage: If a comment is now live, remove it from local
   localComments.value = localComments.value.filter(
    (local) =>
     !serverComments.value.some((server) => server.content === local.content),
   );
   saveLocal();
  });
 };

 const saveLocal = () => {
  localStorage.setItem(
   `pending_comments_${postId}`,
   JSON.stringify(localComments.value),
  );
 };

 const submitComment = async (
  name: string,
  content: string,
  honeypot: string,
 ) => {
  error.value = null;
  success.value = false;

  if (honeypot) {
   success.value = true;
   return;
  }

  const wordCount = content.trim().split(/\s+/).length;
  if (wordCount < 5) {
   error.value = `Comment is too short (${wordCount}/5 words).`;
   return;
  }

  loading.value = true;
  try {
   // Create the pending object
   const newPending: Comment = {
    id: Date.now().toString(),
    userName: name,
    content: content,
    postId: postId,
    isPending: true,
    createdAt: { seconds: Math.floor(Date.now() / 1000) }, // Fake Firestore timestamp
   };

   // Push to local state immediately
   localComments.value.push(newPending);
   saveLocal();

   await addDoc(collection($db, "comments"), {
    postId,
    userName: name,
    content,
    isApproved: false,
    createdAt: serverTimestamp(),
   });

   success.value = true;
   setTimeout(() => (success.value = false), 5000);
  } catch (e) {
   error.value = "Failed to post comment. Please try again.";
  } finally {
   loading.value = false;
  }
 };

 return { comments, submitComment, fetchComments, loading, success, error };
};
