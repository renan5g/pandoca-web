export const obrasData = [
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test cap',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 23,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
  {
    cover: 'https://www.tsukimangas.com/imgs/8578.jpg',
    scan: {
      cover: 'src/assets/icons/favicon.svg',
      name: 'Padaria Scans',
    },
    title: 'Nazotoki Yori mo Taihen da',
    updatedAt: 'Há 3 dias',
    favorites: 80,
    lastChapter: {
      name: 'test ca',
      number: '12',
      url: '',
    },
    chapters: 145,
  },
] as IObra[];

export type IObra = {
  title: string;
  cover: string;
  updatedAt: string;
  lastChapter?: {
    url: string;
    name: string;
    number: string;
  };
  favorites?: number;
  scan: {
    cover: string;
    name: string;
  };
  chapters: number;
};
