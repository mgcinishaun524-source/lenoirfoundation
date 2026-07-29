export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  thumbnail: string;
  isFeatured?: boolean;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  tag: string;
  bio: string;
}

export interface KeyConfig {
  key: string;
  finger: string; // 'left-pinky', 'left-ring', 'left-middle', 'left-index', 'thumb', 'right-index', 'right-middle', 'right-ring', 'right-pinky'
  colorClass: string;
  row: number;
}
