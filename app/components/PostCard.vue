<script setup lang="ts">
// Define the structure of your blog post data
interface Post {
 _path: string;
 title: string;
 description: string;
 image: string;
 category: string;
 author: string;
 date: string;
}

const props = defineProps<{
 post: Post;
 index: number;
}>();

const { observe } = useReveal();
const cardRef = ref<HTMLElement | null>(null);

// Utility for date formatting
const formatDate = (dateString: string) => {
 const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
 };
 return new Date(dateString).toLocaleDateString("en-GB", options);
};

onMounted(() => {
 if (cardRef.value) observe(cardRef.value);
});
</script>

<template>
 <article
  ref="cardRef"
  class="post-card"
  :style="{ '--delay': index % 3 }"
  @click="navigateTo(post._path)"
 >
  <div class="post-image">
   <img :src="post.image" :alt="post.title" loading="lazy" />
   <div class="post-category">{{ post.category }}</div>
  </div>
  <div class="home-post-content">
   <h3>{{ post.title }}</h3>
   <p class="post-description">{{ post.description }}</p>
   <div class="post-meta">
    <span class="post-author">{{ post.author }}</span>
    <span class="post-date">{{ formatDate(post.date) }}</span>
   </div>
  </div>
 </article>
</template>

<style scoped>
.post-card {
 cursor: pointer;
 /* Reveal Animation Start State */
 opacity: 0;
 transform: translateY(30px);
 transition:
  opacity 0.8s cubic-bezier(0.2, 1, 0.3, 1),
  transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
 transition-delay: calc(var(--delay) * 0.15s);
}

.post-card.reveal-active {
 opacity: 1;
 transform: translateY(0);
}

/* Ensure your existing styles for post-image, h3, etc., stay here or in global CSS */
.post-image {
 position: relative;
 overflow: hidden;
 border-radius: 8px 8px 0 0;
}

.post-image img {
 width: 100%;
 height: 200px;
 object-fit: cover;
}
</style>
