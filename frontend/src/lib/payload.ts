import type { Media, Service, Portfolio, Blog, User } from '../types/payload';

const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3001';

interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

interface PayloadQuery {
  where?: Record<string, unknown>;
  sort?: string;
  limit?: number;
  page?: number;
}

// Generic fetch function for Payload collections
async function fetchPayload<T>(
  collection: string,
  query?: PayloadQuery
): Promise<PayloadResponse<T>> {
  const params = new URLSearchParams();
  
  if (query) {
    if (query.where) {
      params.append('where', JSON.stringify(query.where));
    }
    if (query.sort) {
      params.append('sort', query.sort);
    }
    if (query.limit) {
      params.append('limit', query.limit.toString());
    }
    if (query.page) {
      params.append('page', query.page.toString());
    }
  }

  const queryString = params.toString();
  const url = `${PAYLOAD_URL}/api/${collection}${queryString ? `?${queryString}` : ''}`;
  
  const response = await fetch(url, {
    next: { revalidate: 60 }, // Revalidate every minute
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${collection}`);
  }

  return response.json();
}

// Services
export async function getServices(query?: PayloadQuery) {
  return fetchPayload<Service>('services', query);
}

export async function getServiceBySlug(slug: string) {
  const response = await fetchPayload<Service>('services', {
    where: { slug: { equals: slug } }
  });
  return response.docs[0];
}

// Portfolio
export async function getPortfolio(query?: PayloadQuery) {
  return fetchPayload<Portfolio>('portfolio', query);
}

export async function getPortfolioBySlug(slug: string) {
  const response = await fetchPayload<Portfolio>('portfolio', {
    where: { slug: { equals: slug } }
  });
  return response.docs[0];
}

export async function getFeaturedPortfolio() {
  return fetchPayload<Portfolio>('portfolio', {
    where: { featured: { equals: true } }
  });
}

// Blog
export async function getBlogPosts(query?: PayloadQuery) {
  return fetchPayload<Blog>('blog', query);
}

export async function getBlogPostBySlug(slug: string) {
  const response = await fetchPayload<Blog>('blog', {
    where: { slug: { equals: slug } }
  });
  return response.docs[0];
}

// Media
export async function getMedia(query?: PayloadQuery) {
  return fetchPayload<Media>('media', query);
}

// Users
export async function getUsers(query?: PayloadQuery) {
  return fetchPayload<User>('users', query);
}

// Site Settings
export async function getSiteSettings() {
  const response = await fetch(`${PAYLOAD_URL}/api/globals/site-settings`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch site settings');
  }

  return response.json();
} 