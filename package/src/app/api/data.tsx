import { Icon } from "@iconify/react/dist/iconify.js";
export const ProductType: { id: number; section: string; link: string[]; }[] = [
  {
    id: 1,
    section: "Explore",
    link: ['How It Works', 'Our Story', 'Testimonials', 'Pricing'],
  },
  {
    id: 2,
    section: "Resources",
    link: ['FAQs', 'Contact Us']
  },
  {
    id: 3,
    section: "Legal",
    link: ['Privacy Policy', 'Terms of Service', 'Refund Policy']
  },

];


export const Aboutdata: { heading: string; imgSrc: string; paragraph: string; link: string; }[] = [
  {
    heading: "How It Works",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/aboutus/imgOne.svg`,
    paragraph:
      "Parents enter their child's name, age, and interests and complete payment — we'll handle the rest.",
    link: "Learn more",
  },
  {
    heading: "AI Story Generation",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/aboutus/imgTwo.svg`,
    paragraph:
      "Our storytelling AI crafts a unique adventure starring your child, weaving their interests into every page.",
    link: "Learn more",
  },
  {
    heading: "Delivery Options",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/aboutus/imgThree.svg`,
    paragraph:
      "Receive a downloadable PDF or a beautifully printed paperback — the perfect gift beyond the screen.",
    link: "Learn more",
  },
];

export const DataType: { profession: string; name: string; imgSrc: string; }[] = [
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/wework/avatar.svg`,
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/wework/avatar3.svg`,
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/wework/avatar4.svg`,
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/wework/avatar.svg`,
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/wework/avatar3.svg`,
  },
  {
    profession: "Co-founder",
    name: "John Doe",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/wework/avatar4.svg`,
  },
];

export const postData: { heading: string; imgSrc: string; }[] = [
  {
    heading: "Adventure in Space",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/featured/feat1.jpg`,
  },
  {
    heading: "Dinosaur Discovery",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/featured/feat2.jpg`,
  },
  {
    heading: "Underwater Kingdom",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/featured/feat3.jpg`,
  },
  {
    heading: "Fairy Tale Magic",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/featured/feat4.jpg`,
  },
];

export const Testimonials: { profession: string; comment: string; imgSrc: string; name: string; rating: number }[] = [
  {
    name: "David R.",
    profession: "Dad of Aaron (age 6)",
    comment:
      "Aaron's face lit up when he saw his name in the story! The adventure was so personalized and magical—he wants to read it every night.",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/testimonials/david-r.jpg`,
    rating: 5,
  },
  {
    name: "Emily M.",
    profession: "Mom of Zoe (age 4)",
    comment:
      "We were amazed at how the book captured Zoe’s interests. She keeps showing it to everyone and feels like a true hero!",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/testimonials/emily-m.jpg`,
    rating: 5,
  },
  {
    name: "Tony M.",
    profession: "Parent",
    comment:
      "The AI created a story that felt truly unique to our family. It’s a keepsake we’ll treasure forever.",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/testimonials/tony-m.jpg`,
    rating: 4,
  },
  {
    name: "Sarah L.",
    profession: "Mom of twins",
    comment:
      "Both my kids got their own stories based on their personalities! Bedtime has never been this fun or special.",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/testimonials/sarah-l.jpg`,
    rating: 5,
  },
  {
    name: "Jorge M.",
    profession: "Dad of Mateo (age 7)",
    comment:
      "Seeing Mateo’s love of dinosaurs woven into his story was incredible. Highly recommend for any parent!",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/testimonials/jorge-m.jpg`,
    rating: 5,
  },
  {
    name: "Maya P.",
    profession: "Mom of Leela (age 5)",
    comment:
      "The process was so easy and the result was beautiful. Leela’s confidence has grown since becoming the star of her own book!",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/testimonials/maya-p.jpg`,
    rating: 5,
  },
];


export const Article: { time: string; heading: string; heading2: string; date: string; imgSrc: string; name: string; }[] = [
  {
    time: "8 min",
    heading: "The Magic of Personalized",
    heading2: "Stories for Children",
    name: "Published on StoryTime Insights",
    date: "June 15, 2025",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/articles/article.png`,
  },
  {
    time: "6 min",
    heading: "How AI is Revolutionizing",
    heading2: "Children's Literature",
    name: "Published on TechForTots",
    date: "June 10, 2025",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/articles/article2.png`,
  },
  {
    time: "7 min",
    heading: "Creating Lasting Memories",
    heading2: "Through Custom Stories",
    name: "Published on Parenting Today",
    date: "June 5, 2025",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/articles/article3.png`,
  },
  {
    time: "9 min",
    heading: "The Science Behind",
    heading2: "Personalized Learning",
    name: "Published on EduTech Journal",
    date: "May 28, 2025",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/articles/article.png`,
  },
  {
    time: "5 min",
    heading: "Why Every Child Deserves",
    heading2: "Their Own Story",
    name: "Published on Child Development",
    date: "May 20, 2025",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/articles/article2.png`,
  },
  {
    time: "10 min",
    heading: "From Imagination to Reality:",
    heading2: "The Making of a Story",
    name: "Published on Creative Minds",
    date: "May 15, 2025",
    imgSrc: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/articles/article3.png`,
  },
];
