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
  <section class="test-container">
   <div class="content-box">
    <div class="icon-wrapper">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="icon"
     >
      <path
       stroke-linecap="round"
       stroke-linejoin="round"
       d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743.14a4.5 4.5 0 006.364-6.364 4.5 4.5 0 00-6.364 0c-.328.328-.328.866 0 1.194l.823.823a1.5 1.5 0 01-1.06 2.56h-1.258c-.626 0-1.145.442-1.246 1.059l-.044.27z"
      />
     </svg>
    </div>

    <h1>bylucas is <span class="highlight">tinkering.</span></h1>

    <p class="description">
     The labs at <strong>bylucas.org</strong> are currently active. I'm running
     some final stress tests and squashing the last few bugs to make sure
     everything is pixel-perfect.
    </p>

    <div class="status-wrapper">
     <div class="status-indicator">
      <span class="ping"></span>
      <span class="dot"></span>
     </div>
     <span class="status-text">Tests currently passing</span>
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
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
 ),
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
