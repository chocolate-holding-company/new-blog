<template>
 <div class="home">
  <ReadingProgressBar />
  <section
   class="bg-gradient-to-b from-[var(--primary)]/70 to-red-900/90 py-(--spacing-xxl) text-center max-(--breakpoint-mobile):py-(--spacing-xl)"
  >
   <div class="container">
    <div class="max-w-200 mx-auto">
     <h1 class="hero-title text-slate-50 mb-(--spacing-md)">
      Hill Walking Made Easy
     </h1>
     <p
      class="hero-description text-lead-fluid text-slate-50 opacity-95 leading-8"
     >
      Discover expert guides, essential tips, and inspiring routes to make your
      hill walking adventures safe, enjoyable, and unforgettable.
     </p>
    </div>
   </div>
  </section>

  <Construction />
  <section
   class="py-(--spacing-xxl) max-(--breakpoint-mobile):py-(--spacing-xl)"
  >
   <div class="container">
    <div class="mb-(--spacing-xl) text-center">
     <h2 class="mb-(--spacing-lg)">Explore Our Guides</h2>
     <div class="flex flex-wrap gap-(--spacing-sm) justify-center">
      <button
       :class="[
        'filter-btn but-primary',
        { active: selectedCategory === 'All' },
       ]"
       @click="filterPosts('All')"
      >
       All Posts
      </button>
      <button
       v-for="category in categories"
       :key="category"
       :class="[
        'filter-btn but-primary',
        { active: selectedCategory === category },
       ]"
       @click="filterPosts(category)"
      >
       {{ category }}
      </button>
     </div>
    </div>

    <div
     class="grid grid-cols-1 justify-items-center gap-md mb-xl sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] sm:gap-lg sm:mb-xl w-full"
    >
     <PostCard
      v-for="(post, index) in displayedPosts"
      :key="post._path"
      :post="post"
      :index="index"
     />
    </div>
    <div class="text-center pt-(--spacing-lg)">
     <LoadingSpinner v-if="isLoading" />

     <button
      v-else-if="hasMorePosts"
      class="but-primary py-[8px] px-2.5"
      @click="loadMore"
     >
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

const siteRoot = "https://bylucas.org";

useSeoMeta({
 title: "Home | ByLucas",
 description:
  "A personal collection of long-distance hiking routes, cycling adventures, and web development references.",

 // Open Graph
 ogTitle: "Home | ByLucas",
 ogDescription:
  "A personal collection of long-distance hiking routes, cycling adventures, and web development references.",
 ogType: "website",
 ogUrl: siteRoot,
 ogImage: `${siteRoot}/images/default-share.webp`, // Your primary brand share image

 // Twitter Card
 twitterCard: "summary_large_image",
 twitterTitle: "Home | ByLucas",
 twitterDescription:
  "A personal collection of long-distance hiking routes, cycling adventures, and web development references.",
 twitterImage: `${siteRoot}/images/default-share.webp`,
});

useHead({
 htmlAttrs: {
  lang: "en",
 },
 link: [
  {
   rel: "canonical",
   href: siteRoot,
  },
 ],
});
</script>

<style>
.hero-title {
 animation: fadeInUp 0.8s ease;
}
.hero-description {
 animation: fadeInUp 0.8s ease 0.2s both;
}
@keyframes fadeInUp {
 from {
  opacity: 0;
  transform: translateY(30px);
 }
 to {
  opacity: 1;
  transform: translateY(0);
 }
}
.filter-btn {
 padding: 8px 10px;
}

.filter-btn.active {
 background-color: var(--primary);
 color: white;
 border-color: var(--primary);
}
</style>
