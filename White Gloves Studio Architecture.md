# White Gloves Studio - Full Architecture Documentation

## Project Overview

A premium marketing website for White Gloves Studio's digitisation and conservation services, built with Next.js frontend and Payload CMS backend for content management.

## Technology Stack

- **Frontend**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Payload CMS (self-hosted on Render)
- **Forms**: Netlify Forms
- **Database**: MongoDB (for Payload CMS)
- **Deployment**: 
  - Frontend: Netlify
  - Backend: Render
  - Media: Cloudinary/AWS S3

## File & Folder Structure

```
white-gloves-studio/
├── frontend/                           # Next.js application
│   ├── src/
│   │   ├── app/                        # App Router pages
│   │   │   ├── globals.css             # Global styles + Tailwind imports
│   │   │   ├── layout.tsx              # Root layout component
│   │   │   ├── page.tsx                # Homepage
│   │   │   ├── services/
│   │   │   │   ├── page.tsx            # Services overview page
│   │   │   │   ├── archival/page.tsx   # Archival services
│   │   │   │   ├── conservation/page.tsx # Conservation services
│   │   │   │   └── digitisation/page.tsx # Digitisation services
│   │   │   ├── portfolio/
│   │   │   │   ├── page.tsx            # Portfolio gallery overview
│   │   │   │   └── [slug]/page.tsx     # Individual project pages
│   │   │   ├── pricing/
│   │   │   │   └── page.tsx            # Pricing information
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx            # Blog listing page
│   │   │   │   └── [slug]/page.tsx     # Individual blog posts
│   │   │   ├── contact/
│   │   │   │   └── page.tsx            # Contact form page
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx            # Privacy policy
│   │   │   ├── terms/
│   │   │   │   └── page.tsx            # Terms and conditions
│   │   │   └── api/
│   │   │       ├── revalidate/route.ts # Webhook for CMS updates
│   │   │       └── contact/route.ts    # Contact form handler
│   │   ├── components/                 # Reusable UI components
│   │   │   ├── ui/                     # Base UI components
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Gallery.tsx
│   │   │   │   └── FormField.tsx
│   │   │   ├── layout/                 # Layout components
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   ├── sections/               # Page sections
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   ├── PortfolioGrid.tsx
│   │   │   │   ├── TestimonialSlider.tsx
│   │   │   │   └── ContactForm.tsx
│   │   │   └── blog/                   # Blog-specific components
│   │   │       ├── BlogCard.tsx
│   │   │       ├── BlogContent.tsx
│   │   │       └── BlogSidebar.tsx
│   │   ├── lib/                        # Utility functions and configurations
│   │   │   ├── payload.ts              # Payload CMS client configuration
│   │   │   ├── utils.ts                # General utility functions
│   │   │   ├── constants.ts            # Site constants and config
│   │   │   └── types.ts                # TypeScript type definitions
│   │   └── styles/                     # Additional styling
│   │       └── components.css          # Component-specific styles
│   ├── public/                         # Static assets
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── hero-bg.jpg
│   │   │   └── icons/
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── tailwind.config.js              # Tailwind configuration
│   ├── next.config.js                  # Next.js configuration
│   ├── package.json
│   └── tsconfig.json
│
├── cms/                                # Payload CMS backend
│   ├── src/
│   │   ├── collections/                # CMS content collections
│   │   │   ├── Services.ts             # Service pages collection
│   │   │   ├── PortfolioProjects.ts    # Portfolio projects collection
│   │   │   ├── BlogPosts.ts            # Blog posts collection
│   │   │   ├── Pages.ts                # Static pages collection
│   │   │   ├── Media.ts                # Media/images collection
│   │   │   └── Users.ts                # Admin users collection
│   │   ├── globals/                    # Global settings
│   │   │   ├── SiteSettings.ts         # Site-wide settings
│   │   │   └── Navigation.ts           # Navigation configuration
│   │   ├── fields/                     # Reusable field configurations
│   │   │   ├── richText.ts             # Rich text field config
│   │   │   ├── seo.ts                  # SEO fields config
│   │   │   └── gallery.ts              # Image gallery field config
│   │   ├── hooks/                      # Payload hooks
│   │   │   └── revalidateCache.ts      # Cache revalidation hook
│   │   ├── access/                     # Access control
│   │   │   └── isAdmin.ts              # Admin access control
│   │   └── payload.config.ts           # Main Payload configuration
│   ├── server.ts                       # Express server setup
│   ├── package.json
│   └── tsconfig.json
│
├── shared/                             # Shared types and utilities
│   ├── types/
│   │   ├── service.ts                  # Service-related types
│   │   ├── portfolio.ts                # Portfolio-related types
│   │   ├── blog.ts                     # Blog-related types
│   │   └── common.ts                   # Common types
│   └── utils/
│       └── validation.ts               # Shared validation schemas
│
└── README.md                           # Project documentation
```

## Architecture Components

### Frontend (Next.js Application)

#### App Router Structure
- **Root Layout (`layout.tsx`)**: Contains site-wide components (Header, Footer), metadata configuration, and global providers
- **Page Components**: Each route has its own `page.tsx` file following Next.js 13+ App Router conventions
- **API Routes**: Handle server-side operations like form submissions and webhook processing

#### Component Architecture
```typescript
// Component hierarchy example
Layout
├── Header
│   └── Navigation
├── Main Content
│   ├── Hero Section
│   ├── Service Cards
│   ├── Portfolio Grid
│   └── Contact Form
└── Footer
```

#### State Management
- **Server State**: Fetched from Payload CMS via REST API
- **Client State**: React hooks (useState, useReducer) for UI interactions
- **Form State**: Controlled components with validation
- **No global state management needed** - data flows from CMS to static/server-rendered pages

### Backend (Payload CMS)

#### Collections Structure

**Services Collection**
```typescript
{
  slug: string;           // URL-friendly identifier
  title: string;          // Service name
  description: RichText;  // Detailed description
  features: string[];     // Key features list
  images: Media[];        // Service-related images
  pricing: {
    basic: number;
    premium: number;
    custom: string;
  };
  seo: SEOFields;        // Meta title, description, etc.
}
```

**Portfolio Projects Collection**
```typescript
{
  slug: string;
  title: string;
  client: string;
  category: 'archival' | 'conservation' | 'digitisation';
  description: RichText;
  beforeImages: Media[];  // Before restoration/digitisation
  afterImages: Media[];   // After completion
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  featured: boolean;      // Show on homepage
  completedDate: Date;
  seo: SEOFields;
}
```

**Blog Posts Collection**
```typescript
{
  slug: string;
  title: string;
  excerpt: string;
  content: RichText;
  featuredImage: Media;
  author: string;
  publishedDate: Date;
  tags: string[];
  status: 'draft' | 'published';
  seo: SEOFields;
}
```

#### Global Settings
- **Site Settings**: Logo, contact information, social media links
- **Navigation**: Main menu structure and footer links

### Data Flow & Service Connections

#### Content Management Flow
```
Business Owner → Payload CMS Admin → Database → API → Next.js → Static Site
```

1. **Content Creation**: Business owner logs into Payload CMS admin panel
2. **Data Storage**: Content saved to MongoDB database
3. **API Exposure**: Payload automatically generates REST/GraphQL APIs
4. **Frontend Consumption**: Next.js fetches data at build time and runtime
5. **Cache Invalidation**: Webhook triggers revalidation when content changes

#### Form Submission Flow
```
Contact Form → Netlify Forms → Email Notification → CRM Integration (optional)
```

#### Image Handling Flow
```
Upload → Payload Media Collection → Cloud Storage → CDN → Optimized Delivery
```

### API Integration Points

#### Frontend to CMS Communication
```typescript
// lib/payload.ts
const PAYLOAD_URL = process.env.PAYLOAD_URL || 'https://cms.whiteglovesstudio.com.au';

export async function getServices() {
  const response = await fetch(`${PAYLOAD_URL}/api/services`);
  return response.json();
}

export async function getPortfolioProjects(featured?: boolean) {
  const query = featured ? '?where[featured][equals]=true' : '';
  const response = await fetch(`${PAYLOAD_URL}/api/portfolio-projects${query}`);
  return response.json();
}

export async function getBlogPosts(limit?: number) {
  const query = limit ? `?limit=${limit}&sort=-publishedDate` : '';
  const response = await fetch(`${PAYLOAD_URL}/api/blog-posts${query}`);
  return response.json();
}
```

#### Webhook Configuration
```typescript
// app/api/revalidate/route.ts
export async function POST(request: Request) {
  const { collection, operation } = await request.json();
  
  // Revalidate specific paths based on content changes
  switch (collection) {
    case 'services':
      revalidatePath('/services');
      break;
    case 'portfolio-projects':
      revalidatePath('/portfolio');
      break;
    case 'blog-posts':
      revalidatePath('/blog');
      break;
  }
  
  return Response.json({ revalidated: true });
}
```

### Deployment Architecture

#### Production Environment
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Netlify CDN   │    │  Render Server  │    │   MongoDB       │
│   (Frontend)    │◄──►│  (Payload CMS)  │◄──►│   (Database)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌─────────────────┐
│   Cloudinary    │    │   Email Service │
│   (Media CDN)   │    │   (Notifications)│
└─────────────────┘    └─────────────────┘
```

#### Domain Configuration
- **Primary Domain**: `whiteglovesstudio.com.au`
- **CMS Subdomain**: `cms.whiteglovesstudio.com.au`
- **Media Storage**: Cloudinary CDN (no separate domain needed)

#### Environment Variables
```bash
# Frontend (.env.local)
NEXT_PUBLIC_SITE_URL=https://whiteglovesstudio.com.au
PAYLOAD_URL=https://cms.whiteglovesstudio.com.au
REVALIDATE_SECRET=your-secret-key

# Backend (.env)
***REMOVED******REMOVED***your-mongodb-connection
***REMOVED***your-payload-secret
SERVER_URL=https://cms.whiteglovesstudio.com.au
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Performance Optimizations

#### Frontend Optimizations
- **Static Generation**: Most pages pre-built at deploy time
- **Incremental Static Regeneration**: Content updates trigger selective rebuilds
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting

#### CMS Optimizations
- **Database Indexing**: Optimized queries for common lookups
- **Media CDN**: Images served from Cloudinary's global CDN
- **Caching Strategy**: Built-in Payload caching for API responses

### Security Considerations

#### Frontend Security
- **Environment Variables**: Sensitive data kept server-side only
- **Form Validation**: Client and server-side validation
- **HTTPS Enforcement**: SSL certificates on all domains

#### CMS Security
- **Authentication**: JWT-based admin authentication
- **Access Control**: Role-based permissions
- **CORS Configuration**: Restricted to frontend domains
- **Rate Limiting**: API request throttling

### SEO Considerations

#### Technical SEO
- **Structured Data**: JSON-LD markup for services and portfolio items
- **Sitemap Generation**: Automatic XML sitemap for all pages
- **Meta Tags**: Dynamic meta titles and descriptions from CMS
- **Open Graph**: Social media sharing optimization

#### Content SEO
- **Blog System**: Regular content updates for search rankings
- **Service Pages**: Keyword-optimized service descriptions
- **Portfolio Showcase**: Visual content with proper alt text
- **Local SEO**: Australian business information and location data

This architecture provides a scalable, maintainable solution that allows the business owner to manage content independently while delivering a fast, professional marketing website for White Gloves Studio's premium digitisation and conservation services in the Australian market.