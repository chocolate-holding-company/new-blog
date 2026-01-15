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
  <div class="layout" id="main-content">
   <main class="main-content">
    <div class="blog-post">
     <div class="blog-post">
      <article class="post">
       <PostHeader />
       <div class="container">
        <div class="post-content">
         <transition name="fade" mode="out-in">
          <ContentRenderer v-if="page" :value="page" />
         </transition>
        </div>
        <Post-navigation />
       </div>
      </article>
     </div>
    </div>
    <Newsletter />

    <Comments :postId="postId" />
   </main>
   <BackToTop />
   <Footer />
  </div>
 </div>
</template>
