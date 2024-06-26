import project06 from "./Img/bg-one.png";

export interface BlogPostProps {
  url: string;
  data: string;
  title: string;
  description: string;
  text: string;
  imageUrl?: string;
  alt: string,
}

const myPost: BlogPostProps[] = [
  {
    url: '/blogpost/post1',
    data: "1 апреля 2024",
    title: 'Как заставить девушек конкурировать за тебя',
    description: 'В мире современных отношений, где выбор партнера кажется бесконечным, привлечение внимания девушек становится искусством. Но что если я скажу вам, что есть способы не просто привлечь их внимание, но и заставить их конкурировать за вас? Да, это возможно.',
    text: 'В мире современных отношений, где выбор партнера кажется бесконечным, привлечение внимания девушек становится искусством. \nНо что если я скажу вам, что есть способы не просто привлечь их внимание, но и заставить их конкурировать за вас? Да, это возможно. В этой статье мы рассмотрим несколько стратегий, которые помогут вам стать центром внимания и вызвать интерес у девушек.',
    imageUrl: project06,
    alt: 'Name none',
  },
  {
    url: '/blogpost/post2',
    data: "1.апреля.24",
    title: 'Как заставить девушек конкурировать за тебя',
    description: 'В мире современных отношений, где выбор партнера кажется бесконечным, привлечение внимания девушек становится искусством. Но что если я скажу вам, что есть способы не просто привлечь их внимание, но и заставить их конкурировать за вас? Да, это возможно.',
    text: 'В мире современных отношений, где выбор партнера кажется бесконечным, привлечение внимания девушек становится искусством. \nНо что если я скажу вам, что есть способы не просто привлечь их внимание, но и заставить их конкурировать за вас? Да, это возможно. В этой статье мы рассмотрим несколько стратегий, которые помогут вам стать центром внимания и вызвать интерес у девушек.',
    alt: 'Name none',
   imageUrl: project06,
  },
  {
    url: '/blogpost/post3',
    data: "1.апреля.24",
    title: 'Post 2',
    description: 'Description for post 2',
    text: '<p>Text content for post 2</p>...',
     alt: 'Name none',

  },
  {
    url: '/blogpost/post3',
    data: "1.апреля.24",
    title: 'Post 2',
    description: 'Description for post 2',
    text: '<p>Text content for post 2</p>...',
     alt: 'Name none',

  },
];

export default myPost;
