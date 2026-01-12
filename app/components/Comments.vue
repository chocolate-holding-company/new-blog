<script setup lang="ts">
const props = defineProps<{ postId: string }>();
const { comments, submitComment, fetchComments, loading, success, error } =
 useComments(props.postId);

const form = reactive({ name: "", content: "", fax: "" });

onMounted(() => fetchComments());

const handleComment = async () => {
 await submitComment(form.name, form.content, form.fax);
 if (success.value) {
  form.name = "";
  form.content = "";
 }
};
</script>

<template>
 <section class="comments-container">
  <h3 class="comments-title">Comments ({{ comments.length }})</h3>

  <div v-if="comments.length > 0" class="comments-list">
   <div v-for="c in comments" :key="c.id" class="comment-card">
    <div class="comment-header">
     <span class="user-name">{{ c.userName }}</span>
     <span class="comment-date">{{
      c.createdAt?.toDate().toLocaleDateString()
     }}</span>
    </div>
    <p class="comment-text">{{ c.content }}</p>

    <div v-if="c.adminReply" class="admin-reply-box">
     <span class="admin-label">Admin Response</span>
     <p class="admin-text">{{ c.adminReply }}</p>
    </div>
   </div>
  </div>

  <p v-else class="no-comments">
   No comments yet. Be the first to start the conversation!
  </p>

  <div class="comment-form-wrapper">
   <h4>Leave a Comment</h4>
   <form @submit.prevent="handleComment">
    <input v-model="form.fax" type="text" class="hidden-field" tabindex="-1" />

    <div class="form-group">
     <input v-model="form.name" type="text" placeholder="Your Name" required />
    </div>

    <div class="form-group">
     <textarea
      v-model="form.content"
      placeholder="Your thoughts..."
      rows="4"
      required
     ></textarea>
    </div>

    <button type="submit" :disabled="loading" class="submit-btn">
     <BaseSpinner v-if="loading" />
     {{ loading ? "Posting..." : "Post Comment" }}
    </button>

    <p v-if="error" class="message error-message">{{ error }}</p>
    <p v-if="success" class="message success-message">
     Thanks! Sent for moderation.
    </p>
   </form>
  </div>
 </section>
</template>
