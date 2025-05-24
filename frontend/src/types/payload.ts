export interface Media {
  id: string;
  alt: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: any; // Rich text content
  features: {
    title: string;
    description: string;
    icon?: Media;
  }[];
  pricing: {
    basePrice: number;
    currency: 'AUD' | 'USD';
    pricingNotes?: string;
  };
  featuredImage: Media;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage?: Media;
  };
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: 'archival' | 'conservation' | 'digitisation';
  description: any; // Rich text content
  beforeImages: {
    image: Media;
    caption?: string;
  }[];
  afterImages: {
    image: Media;
    caption?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  featured: boolean;
  completedDate: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage?: Media;
  };
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Rich text content
  featuredImage: Media;
  author: User;
  publishedDate: string;
  tags: {
    tag: string;
  }[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage?: Media;
  };
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'admin' | 'editor' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface SiteSettings {
  id: string;
  siteName: string;
  logo?: Media;
  contactEmail: string;
  phone: string;
  address: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
  updatedAt: string;
} 