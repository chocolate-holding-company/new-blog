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

// Add an interface to clear red lines on 'c.userName' etc.
interface Comment {
 id: string;
 userName: string;
 content: string;
 createdAt: any;
}

export const useComments = (postId: string) => {
 const { $db } = useNuxtApp() as { $db: any };
 const comments = ref<any[]>([]);
 const loading = ref(false);
 const success = ref(false);
 const error = ref<string | null>(null); // New error state

 const fetchComments = () => {
  const q = query(
   collection($db, "comments"),
   where("postId", "==", postId),
   where("isApproved", "==", true),
   orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snapshot) => {
   comments.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
 };

 const submitComment = async (
  name: string,
  content: string,
  honeypot: string
 ) => {
  // Reset states
  error.value = null;
  success.value = false;

  if (honeypot) {
   success.value = true;
   return;
  }

  // Validation
  const wordCount = content.trim().split(/\s+/).length;
  if (wordCount < 5) {
   error.value = `Comment is too short (${wordCount}/5 words).`;
   return;
  }

  loading.value = true;
  try {
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
