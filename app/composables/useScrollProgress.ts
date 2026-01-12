export const useScrollProgress = (threshold: number = 500) => {
 const isVisible = ref(false);
 const progress = ref(0);

 const radius = 20;
 const circumference = 2 * Math.PI * radius;

 const updateScroll = (): void => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  isVisible.value = scrollTop > threshold;

  if (docHeight > 0) {
   progress.value = scrollTop / docHeight;
  }
 };

 const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
 };

 const dashOffset = computed(() => {
  return circumference - progress.value * circumference;
 });

 onMounted(() => {
  window.addEventListener("scroll", updateScroll);
  updateScroll();
 });

 onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
 });

 return {
  isVisible,
  progress,
  dashOffset,
  circumference,
  radius,
  scrollToTop,
 };
};
