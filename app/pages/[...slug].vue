<script lang="ts" setup>
import { computed } from "vue";
import { blogPosts } from "~/data/blogPosts";

const route = useRoute();
const siteRoot = "https://bylucas.org";

const { data: page } = await useAsyncData(route.path, () => {
 return queryCollection("content").path(route.path).first();
});
//Pull the matching metadata object directly from your local TypeScript file
const currentPostMeta = computed(() => {
 return blogPosts.find((post) => post._path === route.path);
});

// Build the absolute image URL safely using your TS file data
const absoluteImageUrl = computed(() => {
 const imagePath = currentPostMeta.value?.image;

 if (!imagePath) return `${siteRoot}/images/default-share.webp`;
 if (imagePath.startsWith("http")) return imagePath;

 const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
 return `${siteRoot}${cleanPath}`;
});

// Bind the SEO variables cleanly to the local TS file values
useSeoMeta({
 title: () => currentPostMeta.value?.title ?? "Blog",
 description: () => currentPostMeta.value?.description ?? "",

 // Open Graph
 ogTitle: () => currentPostMeta.value?.title,
 ogDescription: () => currentPostMeta.value?.description,
 ogType: "article",
 ogUrl: () => `${siteRoot}${route.path}`,
 ogImage: () => absoluteImageUrl.value,

 // Twitter Card
 twitterCard: "summary_large_image",
 twitterTitle: () => currentPostMeta.value?.title,
 twitterDescription: () => currentPostMeta.value?.description,
 twitterImage: () => absoluteImageUrl.value,
});

// Structural header attributes
useHead({
 link: [
  {
   rel: "canonical",
   href: () => `${siteRoot}${route.path}`,
  },
 ],
});
const postId = computed(() => route.path);
</script>

<template>
 <div>
  <ReadingProgressBar />
  <NavBar />
  <div class="min-h-screen flex flex-col" id="main-content">
   <main class="flex-1 mb-15">
    <div class="mb-5">
     <article class="post">
      <PostHeader />
      <div class="container">
       <div class="prose max-w-[960px] table-custom post-content">
        <transition name="fade" mode="out-in">
         <ContentRenderer v-if="page" :value="page" />
        </transition>
       </div>
       <Post-navigation />
      </div>
     </article>
    </div>

    <Newsletter />

    <Comments :postId="postId" />
   </main>
   <BackToTop />
   <Footer />
  </div>
 </div>
</template>
