export type ProjectCategory = 'All' | 'food and drinks' | 'beauty and fragnance' | 'accesories' | 'invitations' | 'tech';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
  tools: string[];
  aspectRatio?: string;
}

export interface Exhibition {
  id: string;
  title: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ray Ban Couple Collection Sunglasses',
    category: 'accesories',
    image: 'https://i.ibb.co/WvtR9pDC/index-4.png',
    description: 'A collection specifically designed for couples. The sunglasses protect you and your partner for all vacations.',
    tools: ['Canva', 'Picsart']
  },
  {
    id: '2',
    title: 'Pringles Red Hot Chilli Chips',
    category: 'food and drinks',
    image: 'https://i.ibb.co/6c3qzYzB/index-6.png',
    description: 'New Pringles chips flavours exclusively for spice lovers',
    tools: ['Canva', 'Picsart']
  },
  {
    id: '3',
    title: 'DIWALI INVITATION POSTER',
    category: 'invitations',
    image: 'https://i.ibb.co/dsRpnt8t/MAKE-YOUR-DIWALI-MEMORABLE-WITH-RAJANI-FAMILY-1.png',
    description: 'a diwali party invitation where sacredness meets aesthetics',
    tools: ['Canva', 'Picsart']
  },
  {
    id: '4',
    title: 'DOT & KEY SUNSCREEN ADD POSTER',
    category: 'beauty and fragnance',
    image: 'https://i.ibb.co/WvfjMJfD/index-5.png',
    description: 'NEW IMPROVED SUNSCREEN BY DOT & KEY TO PROTECT YOU AND YOUR SKIN',
    tools: ['Canva']
  },
  {
    id: '5',
    title: 'FOKUS DRINK YELLOW',
    category: 'food and drinks',
    image: 'https://i.ibb.co/C3h455fN/Untitled-design.png',
    description: 'TROPICAL DRINK OF PINEAPPLE AND MANGO BY MALHAN BROTHERS ',
    tools: ['Canva', 'UPSCALER']
  },
  {
    id: '6',
    title: 'A BIRTHDAY PARTY INVITATION',
    category: 'invitations',
    image: 'https://i.ibb.co/LX9k2ZmD/ZIVA-2.png',
    description: 'invitation for a young girl based on ocean theme',
    tools: ['Canva', 'Picsart']
  },
  {
    id: '7',
    title: "OG LUXURY'S INTENSE PERFUME",
    category: 'beauty and fragnance',
    image: 'https://i.ibb.co/cS4bgNBG/index-9.png',
    description: 'INTENSE SMOKEY EXTRAIT DE PARFUM BY ASHISH CHACHLANI',
    tools: ['Canva', 'Picsart']
  },
  {
    id: '8',
    title: 'Official Nike Collab with Supreme',
    category: 'accesories',
    image: 'https://i.ibb.co/Z1hC129Z/Zuume-Rough-Bold.png',
    description: "Shoe collection where Nike Jordan's style meets Supreme's luxury",
    tools: ['Canva', 'Picsart']
  },
  {
    id: '9',
    title: 'NESCAFE STRONG COFFEE',
    category: 'food and drinks',
    image: 'https://i.ibb.co/JW6XmM7k/cold-brew-strong-you.png',
    description: 'A bold and refreshing cold brew coffee advertisement.',
    tools: ['Canva', 'Picsart']
  },
  {
    id: '10',
    title: 'Marshall speaker',
    category: 'tech',
    image: 'https://i.ibb.co/zVL69fv5/where-bass-meets-clearity-1.png',
    description: 'An add of a speaker where bass meets clearity.Here sound is blended with experence',
    tools: ['Canva', 'Picsart']
  },
  {
    id: '11',
    title: 'Magnum premium almond chocolate ice cream bar',
    category: 'food and drinks',
    image: 'https://i.ibb.co/S4nPWpFs/index-2.png',
    description: 'An add of a rich ice cream whose every bite gives feeling of richness and purity.',
    tools: ['Canva', 'Picsart']
  },
  {
    id: '12',
    title: 'boat Powerbank',
    category: 'tech',
    image: 'https://i.ibb.co/xqKd05pG/Cinzel.png',
    description: 'An add of a powerbank which will fuel your life without any bulk.',
    tools: ['Canva', 'Picsart']
  }
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: '1',
    title: 'We are cost friendly',
    description: 'Charges for your projects will be according to the amount of work in that project'
  },
  {
    id: '2',
    title: 'We make each and every project with creativity',
    description: 'We will make each every project with full efforts and make better as much as we can'
  },
  {
    id: '3',
    title: 'Service with speed',
    description: 'We will make your projects within 1-2 weeks'
  },
  {
    id: '4',
    title: 'Image quality',
    description: 'All your project would be in high resolution without any blur'
  }
];
