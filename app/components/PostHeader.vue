<template>
 <transition name="fade" mode="out-in">
  <header class="post-header">
   <div class="post-header-image">
    <img :src="post.image" :alt="post.title" />
    <div class="post-header-overlay">
     <div class="container">
      <div class="post-header-content">
       <div class="post-category">{{ post.category }}</div>
       <h1 class="post-title">{{ post.title }}</h1>
       <p class="post-description">{{ post.description }}</p>
       <div class="post-meta">
        <span class="post-date">{{ formatDate(post.date) }}</span>
       </div>
      </div>
     </div>
    </div>
   </div>
  </header>
 </transition>
</template>

<script setup>
import { computed } from "vue";
import { blogPosts } from "~/data/blogPosts";

const route = useRoute();

const postsSorted = [...blogPosts].sort(
 (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const post = computed(() => postsSorted.find((p) => p._path === route.path));

if (!post.value) {
 throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

const formatDate = (dateString) => {
 const options = { year: "numeric", month: "long", day: "numeric" };
 return new Date(dateString).toLocaleDateString("en-GB", options);
};

useHead({
 title: post.value.title,
 meta: [{ name: "description", content: post.value.seo_description }],
});
</script>
