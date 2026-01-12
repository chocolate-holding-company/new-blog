<template>
 <div class="home">
  <ReadingProgressBar />
  <section class="hero">
   <div class="container">
    <div class="hero-content">
     <h1 class="hero-title">Hill Walking Made Easy</h1>
     <p class="hero-description">
      Discover expert guides, essential tips, and inspiring routes to make your
      hill walking adventures safe, enjoyable, and unforgettable.
     </p>
    </div>
   </div>
  </section>

  <section class="posts-section">
   <div class="container">
    <div class="filter-section">
     <h2>Explore Our Guides</h2>
     <div class="filters">
      <button
       :class="['filter-btn', { active: selectedCategory === 'All' }]"
       @click="filterPosts('All')"
      >
       All Posts
      </button>
      <button
       v-for="category in categories"
       :key="category"
       :class="['filter-btn', { active: selectedCategory === category }]"
       @click="filterPosts(category)"
      >
       {{ category }}
      </button>
     </div>
    </div>

    <div class="posts-grid">
     <PostCard
      v-for="(post, index) in displayedPosts"
      :key="post._path"
      :post="post"
      :index="index"
     />
    </div>
    <div class="load-more-section">
     <LoadingSpinner v-if="isLoading" />

     <button v-else-if="hasMorePosts" class="load-more-btn" @click="loadMore">
      Load More Posts
     </button>
    </div>
   </div>
  </section>
  <BackToTop />
  <Footer />
 </div>
</template>

<script setup lang="ts">
import { blogPosts } from "~/data/blogPosts";

// Sort posts once on load
const posts = ref(
 [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
 )
);

const selectedCategory = ref("All");
const postsPerPage = 6;
const currentPage = ref(1);

const categories = computed(() => {
 const cats = new Set<string>();
 posts.value.forEach((post) => {
  if (post.category) cats.add(post.category);
 });
 return Array.from(cats).sort();
});

const filteredPosts = computed(() => {
 if (selectedCategory.value === "All") return posts.value;
 return posts.value.filter((post) => post.category === selectedCategory.value);
});

const displayedPosts = computed(() => {
 return filteredPosts.value.slice(0, currentPage.value * postsPerPage);
});

const hasMorePosts = computed(() => {
 return displayedPosts.value.length < filteredPosts.value.length;
});

const filterPosts = (category: string) => {
 selectedCategory.value = category;
 currentPage.value = 1;
};

const isLoading = ref(false);

const loadMore = async () => {
 isLoading.value = true;

 // Simulate a short delay (e.g., 500ms) for a smoother transition
 // In a real API call, you would await your fetch here instead
 await new Promise((resolve) => setTimeout(resolve, 500));

 currentPage.value++;
 isLoading.value = false;
};

useHead({
 title: "Hill Walking Made Easy",
 meta: [{ name: "description", content: "Expert guides for hill walking." }],
});
</script>
