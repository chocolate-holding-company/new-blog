<script setup lang="ts">
// Define the structure of your blog post data
interface Post {
 _path: string;
 title: string;
 description: string;
 image: string;
 category: string;
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
  class="post-card bg-(--card-bg) rounded-(--border-radius) overflow-hidden"
  :class="[
   index % 3 === 0 ? 'delay-0' : '',
   index % 3 === 1 ? 'delay-150' : '',
   index % 3 === 2 ? 'delay-300' : '',
  ]"
  @click="navigateTo(post._path)"
 >
  <div class="post-image relative h-60 overflow-hidden">
   <img
    class="w-full h-full object-cover transition-(--transition)"
    :src="post.image"
    :alt="post.title"
    loading="lazy"
   />
   <div
    class="absolute top-(--spacing-md) right-(--spacing-md) bg-(--primary) text-white py-1.25 px-2.5 rounded-(--border-radius) text-[0.775rem] font-medium"
   >
    {{ post.category }}
   </div>
  </div>
  <div class="p-(--spacing-md)">
   <h3 class="mb-(--spacing-sm) text-[1.25rem]">
    {{ post.title }}
   </h3>
   <p
    class="post-description text-(--card-text) text-[0.95rem] overflow-hidden"
   >
    {{ post.description }}
   </p>
   <div
    class="text-[0.875rem] text-(--card-text) pt-(--spacing-sm) border-t-2 border-t-solid border-t-slate-200 font-medium"
   >
    <span class="post-date">{{ formatDate(post.date) }}</span>
   </div>
  </div>
 </article>
</template>

<style scoped>
.post-card {
 cursor: pointer;
 box-shadow: 0 2px 8px var(--shadow);
 cursor: pointer;
 transition: var(--transition);
 animation: fadeIn 0.5s ease;
}

.post-card:hover {
 transform: translateY(-8px);
 box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.post-card:hover .post-image img {
 transform: scale(1.05);
}

.post-description {
 display: -webkit-box;
 -webkit-line-clamp: 3;
 line-clamp: 3;
 -webkit-box-orient: vertical;
}

.post-card {
 /* Reveal Animation Start State */
 opacity: 0;
 transform: translateY(30px);
 transition:
  opacity 0.8s cubic-bezier(0.2, 1, 0.3, 1),
  transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
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
