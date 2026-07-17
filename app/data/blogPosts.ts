export interface BlogPost {
 _path: string;
 title: string;
 description: string;
 image: string;
 category: string;
 date: string;
}

export const blogPosts: BlogPost[] = [
 {
  _path: "/blog/markdown-guide",
  title: "A Guide to Markdown",
  description:
   "Markdown guide showing all the tags and goodness of Markdown and why you should use it for all your blog writing.",
  image:
   "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Beginner",
  date: "2026-09-11",
 },

 {
  _path: "/blog/delhi",
  title: "Delhi",
  description:
   "Delhi an introduction to incredible India, the famous roads, budget hotels, the first real curry, the heat and ooh! that smell, what a culture shock.",
  image:
   "https://images.pexels.com/photos/20083843/pexels-photo-20083843.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "India",
  date: "2026-07-05",
 },
 {
  _path: "/blog/command-line",
  title: "Command Line Cheat Sheet",
  description:
   "A comprehensive guide to the must-have equipment for safe and enjoyable hill walking adventures.",
  image:
   "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Gear",
  date: "2024-11-10",
 },
 {
  _path: "/blog/packing-list",
  title: "Packing List",
  description:
   "Packing for a cycle tour in India takes some planning, we need to be light yet carry all essential clothing and bike tools and fit all into two 20ltr panniers.",
  image: "/images/packing-two.webp",
  category: "India",
  date: "2026-07-06",
 },
 {
  _path: "/blog/conclusion",
  title: "In Conclusion",
  description:
   "Cycle problems encountered while touring India included brake and pannier problems. The bike performed well but had a long-standing problem with brake discs.",
  image: "/images/in-conclusion.webp",
  category: "India",
  date: "2026-07-15",
 },
 {
  _path: "/blog/planning-your-first-multi-day-trek",
  title: "Planning Your First Multi-Day Trek",
  description:
   "Expert tips for organizing and executing a successful multi-day hill walking adventure.",
  image:
   "https://images.pexels.com/photos/1271968/pexels-photo-1271968.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Advanced",
  date: "2024-10-15",
 },
 {
  _path: "/blog/wildlife-spotting-guide",
  title: "Wildlife Spotting Guide",
  description:
   "Learn to identify and safely observe the diverse wildlife you'll encounter on hill walks.",
  image:
   "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Nature",
  date: "2024-11-01",
 },
 {
  _path: "/blog/winter-hill-walking-safety",
  title: "Winter Hill Walking Safety",
  description:
   "Stay safe on winter hill walks with essential tips for cold weather conditions.",
  image:
   "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Safety",
  date: "2024-10-30",
 },
 {
  _path: "/blog/about",
  title: "About Walking",
  description: "You cas walk for ever in some cases.",
  image:
   "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Advanced",
  date: "2024-10-15",
 },
 {
  _path: "/blog/was-jesus-the-son-of-god",
  title: "Is there any evidence that Jesus, the son of god, existed?",
  description:
   "Historians distinguish between the Jesus of history, a real man in 1st-century Judea, and the Christ of faith, the divine figure of Christian theology",
  image: "/images/is-jesus-son-of-god.webp",
  category: "Routes",
  date: "2024-12-08",
 },
 {
  _path: "/blog/pedal-to-israel",
  title: "Pedal to Israel",
  description:
   "Historians distinguish between the Jesus of history, a real man in 1st-century Judea, and the Christ of faith, the divine figure of Christian theology",
  image: "/images/israel-header-image.webp",
  category: "Routes",
  date: "2026-01-24",
 },
 {
  _path: "/blog/iphone",
  title: "The New iPhone Page",
  description:
   "this is the new page from the iphone and its bloody hard work. but if you was travelling you wouldnt need to take the laptop",
  image: "/images/phone.png",
  category: "Advanced",
  date: "2026-06-11",
 },
];
