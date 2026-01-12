export const useReveal = () => {
 const observe = (el: HTMLElement) => {
  // 1. Respect Accessibility Settings
  const prefersReducedMotion = window.matchMedia(
   "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
   el.classList.add("reveal-active");
   return;
  }

  // 2. Setup Observer
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      // Add class to trigger CSS transition
      entry.target.classList.add("reveal-active");
      // Stop watching this specific element
      observer.unobserve(entry.target);
     }
    });
   },
   {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits the viewport
   }
  );

  observer.observe(el);
 };

 return { observe };
};
