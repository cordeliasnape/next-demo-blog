const CATEGORIES = [
  { name: "Tess", catslug: "tess" },
  { name: "General", catslug: "general" },
];

const POSTS = [
  {
    title: "Shake",
    image: "https://i.imgur.com/oJhvHnj.jpg",
    slug: "post-one",
    content:
      "In the muddy woods, Tess found herself in her element. She dashed through the wetness, shaking off droplets like a whirlwind. Mud splattered everywhere, turning her into a spotted mess. But even in the messiest state, Tess remained the cutest, her enthusiasm infectious as she pranced around, enjoying every splash and puddle.",
    category: "tess",
  },
  {
    title: "Babushka",
    image: "https://i.imgur.com/jNTn6Px.jpg",
    slug: "post-three",
    content:
      "Tess adored her red scarf. It was not just any scarf; it was her babushka scarf! She'd prance around, wrapping it like a wise babushka, seeking treats and admiration from everyone. Tess felt regal, as if the scarf bestowed her with ancient wisdom. People chuckled, but Tess reveled in her stylish wisdom.",
    category: "tess",
  },
  {
    title: "Goofy",
    image: "https://i.imgur.com/HbTDcG1.jpg",
    slug: "post-four",
    content:
      "Tess, the floppy black dog, found an oddity on the floor. It was a rubber chicken! She tilted her head, baffled by this squishy, yellow treasure. With a mix of curiosity and goofiness, Tess paraded around, the chicken flopping with each step. It became her new favorite toy, and she proudly displayed it to anyone who would watch.",
    category: "tess",
  },
];

export function getPosts() {
  return POSTS;
}

export function getPostsBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

// find only returns the first match, not all

export function getCategory() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}
