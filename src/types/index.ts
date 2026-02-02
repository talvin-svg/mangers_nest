export interface NavLink {
  label: string;
  href: string;
}

export interface Program {
  name: string;
  ages: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}
