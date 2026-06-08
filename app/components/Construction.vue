<template>
 <div class="flex items-center justify-center border-b pb-5">
  <div class="max-w-4xl text-center">
   <div
    class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 animate-bounce"
   >
    <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="1.5"
     stroke="currentColor"
     class="w-8 h-8"
    >
     <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743.14a4.5 4.5 0 006.364-6.364 4.5 4.5 0 00-6.364 0c-.328.328-.328.866 0 1.194l.823.823a1.5 1.5 0 01-1.06 2.56h-1.258c-.626 0-1.145.442-1.246 1.059l-.044.27z"
     />
    </svg>
   </div>

   <h1 class="text-4xl font-bold tracking-tight text-page-text sm:text-5xl">
    bylucas is <span class="text-indigo-600">tinkering.</span>
   </h1>

   <p class="mt-6 text-lg leading-8 text-muted-text">
    The labs at
    <span class="font-semibold text-page-text">bylucas.org</span> are currently
    active. I'm running some final stress tests and squashing the last few bugs
    to make sure everything is pixel-perfect.
   </p>

   <div class="mt-10 flex items-center justify-center gap-x-6">
    <div class="flex items-center space-x-2 text-sm font-medium text-slate-500">
     <span class="relative flex h-3 w-3">
      <span
       class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
      ></span>
      <span
       class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
      ></span>
     </span>
     <span class="text-muted-text">Tests currently passing</span>
    </div>
   </div>
  </div>
 </div>
</template>
