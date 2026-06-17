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
  <h3 class="comments-title text-(--main-text)">
   Comments ({{ comments.length }})
  </h3>

  <div v-if="comments.length > 0" class="comments-list">
   <div v-for="c in comments" :key="c.id" class="comment-card">
    <div class="comment-header">
     <span class="user-name">
      {{ c.userName }}
      <span v-if="c.isPending" class="moderation-badge">
       Awaiting Moderation
      </span>
     </span>
     <span class="comment-date">
      {{
       c.createdAt?.toDate
        ? c.createdAt.toDate().toLocaleDateString()
        : "Just now"
      }}
     </span>
    </div>
    <p class="comment-text text-(--aux-text)">{{ c.content }}</p>

    <div v-if="c.adminReply" class="admin-reply-box">
     <span class="admin-label">Admin Response</span>
     <p class="admin-text text-(--aux-text)">{{ c.adminReply }}</p>
    </div>
   </div>
  </div>

  <p v-else class="no-comments">
   No comments yet. Be the first to start the conversation!
  </p>

  <div class="comment-form-wrapper">
   <h4 class="text-(--aux-text)">Leave a Comment</h4>
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

    <button type="submit" :disabled="loading" class="submit-btn but-primary">
     <BaseSpinner v-if="loading" />
     {{ loading ? "Posting..." : "Post Comment" }}
    </button>

    <p v-if="error" class="message mx-auto error-message">{{ error }}</p>
    <p v-if="success" class="message mx-auto success-message">
     Thanks! Sent for moderation.
    </p>
   </form>
  </div>
 </section>
</template>

<style scoped>
.comments-container {
 margin-top: 4rem;
 padding-top: 2rem;
 border-top: 1px solid var(--border-color);

 @media (min-width: 680px) {
  width: 700px;
  margin-right: auto;
  margin-left: auto;
 }
 .comments-title {
  margin-bottom: 2.5rem;
  text-align: center;
 }

 .no-comments {
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--spacing-lg);
 }

 .comment-card {
  background: var(--aux-bg);
  padding: 1.35rem;
  border-radius: 8px;
  border: 1px solid var(--aux-border);
  margin-bottom: 2.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
 }

 .comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
 }

 .user-name {
  font-weight: bold;
  color: #2b6cb0;
 }

 .comment-date {
  font-size: 0.85rem;
  font-weight: 600;
  color: #a0aec0;
 }

 .admin-reply-box {
  margin-top: 1rem;
  margin-left: 1rem;
  padding: 1rem;
  background-color: #ebf8ff;
  border-left: 4px solid #3182ce;
  border-radius: 4px;
  @media (min-width: 760px) {
   margin-left: 1.5rem;
  }
 }

 .admin-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  color: #2c5282;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
 }

 .comment-form-wrapper {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
 }

 .form-group {
  margin-bottom: 2rem;
 }
 .submit-btn {
  margin-left: auto;
  margin-right: auto;
  /* display: block; */
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
 }
 .submit-btn:disabled {
  background-color: var(--primary);
  cursor: not-allowed;
 }
 .message {
  text-align: center;
  color: white;
  margin-top: 1.1rem;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  max-width: 400px;
 }

 .error-message {
  background: var(--error-color);
 }
 .success-message {
  background: var(--success-color);
 }

 .hidden-field {
  display: none;
 }
}
.moderation-badge {
 font-size: 0.7rem;
 background-color: #fef3c7; /* Light amber */
 color: #92400e; /* Dark amber text */
 padding: 2px 8px;
 border-radius: 12px;
 margin-left: 8px;
 font-weight: 600;
 text-transform: uppercase;
 letter-spacing: 0.025em;
 border: 1px solid #fcd34d;
}

/* Optional: Make the whole card look slightly faded/transparent */
.comment-card:has(.moderation-badge) {
 border-left: 4px solid #fcd34d;
 background-color: #fafafa;
}
</style>
