<template>
 <div ref="codeBlock">
  <slot />
 </div>
</template>
<script setup>
import Prism from "prismjs";

// Load languages as needed (based on your preload list)
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
const codeBlock = ref();
onMounted(() => {
 if (codeBlock.value) {
  Prism.highlightAllUnder(codeBlock.value);
 }
});
</script>
