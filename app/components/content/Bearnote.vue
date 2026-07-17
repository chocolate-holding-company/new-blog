<template>
 <div :class="['bear-note', typeClass]">
  <span class="icon">{{ icon }}</span>
  <div class="content">
   <slot />
  </div>
 </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
 // 'type' will determine the color and icon
 type: {
  type: String,
  default: "info",
  validator: (value) => ["warning", "success", "info"].includes(value),
 },
});

// Logic to change the icon and class based on the prop
const typeClass = computed(() => props.type);

const icon = computed(() => {
 switch (props.type) {
  case "warning":
   return "⚠️";
  case "success":
   return "✨";
  case "danger":
   return "❌";
  case "info":
   return "🗒️";
  default:
   return "🗒️";
 }
});
</script>

<style>
.bear-note {
 display: flex;
 align-items: center;
 /* align-content: center; */
 padding: 14px 18px;
 margin: 2rem 0;
 border-radius: 6px;
 border: 1px solid transparent;
 border-left-width: 5px;
 line-height: 1.5;
}

.icon {
 font-size: 1.2rem;
 flex-shrink: 0;
 margin-right: 15px;
}

.content {
 color: #2d3748;
 font-weight: 500;
}

.content p {
 margin: 0 !important;
}

/* Dynamic Styles */
.warning {
 background-color: #fffbeb;
 border-color: #fef3c7;
 border-left-color: #f59e0b;
}

.warning p {
 color: #f59e0b;
}

.info p {
 color: #3b82f6;
}

.success p {
 color: #22c55e;
}

.danger p {
 color: #dd0e0e;
}

.success {
 background-color: #f0fdf4;
 border-color: #dcfce7;
 border-left-color: #22c55e;
}

.info {
 background-color: #eff6ff;
 border-color: #dbeafe;
 border-left-color: #3b82f6;
}

.danger {
 background-color: #f5e0e0;
 border-color: #fedbdb;
 border-left-color: #e04949;
}
</style>
