<script lang="ts" setup>
import BackToTop from "~/components/BackToTop.vue";
import NavBar from "~/components/NavBar.vue";

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
 return queryCollection("content").path(route.path).first();
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
