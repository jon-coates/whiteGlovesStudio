# White Gloves Studio - MVP Development Tasks

### CODING PROTOCOL ###
" Coding Instructions
- Write the absolute minimum code required
- No sweeping changes
- No unrelated edits - focus on just the task you're on
- Make code precise, modular, testable
- Don’t break existing functionality
- If I need to do anything, tell me clearly 

## Project Setup Phase

### Task 1: Initialize Project Structure
**Goal**: Create the basic monorepo structure
**Test**: Verify folder structure exists with correct names
```bash
# Create main project structure
mkdir white-gloves-studio
cd white-gloves-studio
mkdir frontend cms shared
touch README.md
```
**Definition of Done**: Project has frontend/, cms/, shared/ folders and README.md

### Task 2: Initialize Frontend Next.js Project
**Goal**: Set up Next.js 14 with App Router
**Test**: `npm run dev` starts development server on localhost:3000
```bash
cd frontend
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```
**Definition of Done**: Next.js app runs with TypeScript, Tailwind CSS, and App Router

### Task 3: Initialize Payload CMS Project
**Goal**: Set up Payload CMS with TypeScript
**Test**: `npm run dev` starts Payload admin on localhost:3001
```bash
cd cms
npx create-payload-app@latest . --template blank --db mongodb
```
**Definition of Done**: Payload CMS admin interface accessible with MongoDB connection

### Task 4: Configure Environment Variables
**Goal**: Set up environment variable templates
**Test**: Both frontend and CMS can read environment variables
```bash
# Create .env.example files for both projects
# Frontend: NEXT_PUBLIC_SITE_URL, PAYLOAD_URL, REVALIDATE_SECRET
# CMS: DATABASE_URI, PAYLOAD_SECRET, SERVER_URL
```
**Definition of Done**: Both projects have .env.example files with all required variables

## Payload CMS Backend Phase

### Task 5: Create Basic User Collection
**Goal**: Set up admin user authentication
**Test**: Can create admin user and log into Payload admin
```typescript
// cms/src/collections/Users.ts
// Basic user collection with email/password auth
```
**Definition of Done**: Admin can register and login to CMS

### Task 6: Create Media Collection
**Goal**: Enable file uploads for images
**Test**: Can upload an image through Payload admin
```typescript
// cms/src/collections/Media.ts
// Configure with upload path and image sizes
```
**Definition of Done**: Images can be uploaded and are accessible via URL

### Task 7: Create Services Collection
**Goal**: Store service page content
**Test**: Can create/edit/delete a service entry
```typescript
// Service fields: slug, title, description (rich text), features (array), pricing (group), seo (group)
```
**Definition of Done**: Services collection exists with all required fields

### Task 8: Create Portfolio Projects Collection
**Goal**: Store portfolio project data
**Test**: Can create portfolio project with before/after images
```typescript
// Fields: slug, title, client, category, description, beforeImages, afterImages, testimonial, featured, completedDate
```
**Definition of Done**: Portfolio projects can be created with image galleries

### Task 9: Create Blog Posts Collection
**Goal**: Enable blog content management
**Test**: Can create draft and published blog posts
```typescript
// Fields: slug, title, excerpt, content, featuredImage, author, publishedDate, tags, status
```
**Definition of Done**: Blog posts support draft/published workflow

### Task 10: Create Site Settings Global
**Goal**: Manage site-wide configuration
**Test**: Can update site title, contact info, social links
```typescript
// Global fields: siteName, logo, contactEmail, phone, address, socialLinks
```
**Definition of Done**: Site settings can be updated from CMS admin

### Task 11: Configure Rich Text Editor
**Goal**: Enable rich content editing for descriptions
**Test**: Rich text fields support headings, lists, links, images
```typescript
// Configure slate editor with toolbar options
```
**Definition of Done**: Rich text editor works with common formatting options

### Task 12: Add SEO Fields Component
**Goal**: Reusable SEO fields for all collections
**Test**: SEO fields appear in Services, Portfolio, and Blog collections
```typescript
// Reusable fields: metaTitle, metaDescription, openGraphImage
```
**Definition of Done**: All content types have SEO metadata fields

## Frontend Core Setup Phase

### Task 13: Configure Tailwind with Custom Theme
**Goal**: Set up design system colors and fonts
**Test**: Custom colors and fonts work in components
```typescript
// tailwind.config.js with White Gloves Studio brand colors
```
**Definition of Done**: Tailwind configured with project-specific design tokens

### Task 14: Create Payload Client Configuration
**Goal**: Connect frontend to CMS API
**Test**: Can fetch data from Payload CMS in development
```typescript
// lib/payload.ts with fetch functions for all collections
```
**Definition of Done**: Frontend can fetch services, portfolio, blog data from CMS

### Task 15: Create Base UI Components
**Goal**: Reusable component library
**Test**: Each component renders correctly in Storybook/isolation
```typescript
// components/ui/Button.tsx, Card.tsx, Modal.tsx, FormField.tsx
```
**Definition of Done**: Base UI components work with TypeScript and Tailwind

### Task 16: Create Layout Components
**Goal**: Site-wide layout structure
**Test**: Header, Footer, Navigation render correctly
```typescript
// components/layout/Header.tsx, Footer.tsx, Navigation.tsx
```
**Definition of Done**: Layout components display placeholder content

### Task 17: Update Root Layout
**Goal**: Apply consistent layout across site
**Test**: All pages show header and footer
```typescript
// app/layout.tsx with Header and Footer components
```
**Definition of Done**: Site-wide layout structure is consistent

## Homepage Implementation

### Task 18: Create Hero Section Component
**Goal**: Homepage hero with company branding
**Test**: Hero displays title, subtitle, and CTA button
```typescript
// components/sections/Hero.tsx
```
**Definition of Done**: Hero section renders with responsive design

### Task 19: Create Service Cards Component
**Goal**: Display services overview on homepage
**Test**: Service cards link to individual service pages
```typescript
// components/sections/ServiceCard.tsx
```
**Definition of Done**: Services are displayed in card format with links

### Task 20: Create Portfolio Grid Component
**Goal**: Featured portfolio projects on homepage
**Test**: Portfolio items display with image and title
```typescript
// components/sections/PortfolioGrid.tsx
```
**Definition of Done**: Featured portfolio projects display in grid

### Task 21: Build Homepage
**Goal**: Complete homepage with all sections
**Test**: Homepage shows hero, services, featured portfolio
```typescript
// app/page.tsx assembling all homepage sections
```
**Definition of Done**: Homepage displays all content sections correctly

## Services Pages Implementation

### Task 22: Create Services Overview Page
**Goal**: List all available services
**Test**: All services display with links to detail pages
```typescript
// app/services/page.tsx
```
**Definition of Done**: Services overview page shows all services from CMS

### Task 23: Create Service Detail Page Template
**Goal**: Dynamic service pages from CMS data
**Test**: Individual service pages render with correct content
```typescript
// app/services/[slug]/page.tsx
```
**Definition of Done**: Service detail pages work for all service slugs

### Task 24: Create Individual Service Pages
**Goal**: Static routes for main services
**Test**: /services/archival, /services/conservation, /services/digitisation work
```typescript
// app/services/archival/page.tsx (and others)
```
**Definition of Done**: All three main service pages are accessible

## Portfolio Implementation

### Task 25: Create Portfolio Gallery Component
**Goal**: Image gallery with before/after functionality
**Test**: Gallery displays images with modal view
```typescript
// components/ui/Gallery.tsx with lightbox functionality
```
**Definition of Done**: Image gallery supports modal viewing

### Task 26: Create Portfolio Overview Page
**Goal**: List all portfolio projects
**Test**: Portfolio items display with filtering by category
```typescript
// app/portfolio/page.tsx
```
**Definition of Done**: Portfolio overview shows all projects with category filters

### Task 27: Create Portfolio Detail Page
**Goal**: Individual project showcase pages
**Test**: Project pages show full image galleries and details
```typescript
// app/portfolio/[slug]/page.tsx
```
**Definition of Done**: Portfolio detail pages display complete project information

## Blog Implementation

### Task 28: Create Blog Card Component
**Goal**: Blog post preview component
**Test**: Blog cards display title, excerpt, date, featured image
```typescript
// components/blog/BlogCard.tsx
```
**Definition of Done**: Blog posts display in card format

### Task 29: Create Blog Listing Page
**Goal**: Display all published blog posts
**Test**: Blog page shows all published posts with pagination
```typescript
// app/blog/page.tsx
```
**Definition of Done**: Blog listing page works with published posts only

### Task 30: Create Blog Post Page
**Goal**: Individual blog post display
**Test**: Blog posts render with rich content and images
```typescript
// app/blog/[slug]/page.tsx
```
**Definition of Done**: Individual blog posts display full content

## Contact & Forms

### Task 31: Create Contact Form Component
**Goal**: Netlify Forms integration
**Test**: Form submits successfully and shows confirmation
```typescript
// components/sections/ContactForm.tsx with Netlify Forms attributes
```
**Definition of Done**: Contact form submits to Netlify with validation

### Task 32: Create Contact Page
**Goal**: Contact information and form
**Test**: Contact page displays form and business details
```typescript
// app/contact/page.tsx
```
**Definition of Done**: Contact page works with form submission

### Task 33: Create Pricing Page
**Goal**: Service pricing information
**Test**: Pricing displays for all services from CMS
```typescript
// app/pricing/page.tsx
```
**Definition of Done**: Pricing page shows current pricing from CMS

## Legal Pages

### Task 34: Create Privacy Policy Page
**Goal**: Static privacy policy content
**Test**: Privacy page renders with proper legal content
```typescript
// app/privacy/page.tsx
```
**Definition of Done**: Privacy policy page is accessible and complete

### Task 35: Create Terms and Conditions Page
**Goal**: Static terms of service content
**Test**: Terms page renders with proper legal content
```typescript
// app/terms/page.tsx
```
**Definition of Done**: Terms and conditions page is accessible and complete

## CMS Integration & Webhooks

### Task 36: Create Revalidation API Route
**Goal**: Handle CMS content updates
**Test**: Content changes in CMS trigger frontend revalidation
```typescript
// app/api/revalidate/route.ts
```
**Definition of Done**: Frontend updates when CMS content changes

### Task 37: Configure CMS Webhooks
**Goal**: Automatic revalidation on content changes
**Test**: Publishing content in CMS updates frontend automatically
```typescript
// Configure webhook in Payload to call revalidation endpoint
```
**Definition of Done**: CMS changes automatically update live site

## SEO & Meta Configuration

### Task 38: Add Dynamic Meta Tags
**Goal**: SEO optimization for all pages
**Test**: Each page has correct meta title, description, Open Graph
```typescript
// Add generateMetadata functions to all page components
```
**Definition of Done**: All pages have proper SEO meta tags

### Task 39: Create Sitemap Generation
**Goal**: Automatic XML sitemap
**Test**: /sitemap.xml contains all dynamic and static pages
```typescript
// app/sitemap.ts generating dynamic sitemap
```
**Definition of Done**: Sitemap includes all pages and updates automatically

### Task 40: Add Structured Data
**Goal**: JSON-LD structured data for SEO
**Test**: Google Rich Results Test shows valid structured data
```typescript
// Add JSON-LD for business, services, and portfolio items
```
**Definition of Done**: Structured data validates for business and content types

## Performance & Production

### Task 41: Optimize Images
**Goal**: Implement Next.js Image optimization
**Test**: All images load with proper sizes and lazy loading
```typescript
// Replace img tags with Next.js Image component throughout site
```
**Definition of Done**: All images use Next.js Image optimization

### Task 42: Add Loading States
**Goal**: Improve user experience during data loading
**Test**: Loading states show while fetching CMS data
```typescript
// Add loading.tsx files for dynamic routes
```
**Definition of Done**: Loading states work for all dynamic pages

### Task 43: Configure Production Environment Variables
**Goal**: Set up production CMS and frontend connections
**Test**: Production build works with production CMS
```bash
# Configure production environment variables for both services
```
**Definition of Done**: Both services work in production environment

### Task 44: Deploy CMS to Render
**Goal**: Deploy Payload CMS to production
**Test**: CMS admin is accessible at cms.whiteglovesstudio.com.au
```bash
# Deploy CMS with MongoDB connection and environment variables
```
**Definition of Done**: CMS is live and functional in production

### Task 45: Deploy Frontend to Netlify
**Goal**: Deploy Next.js site to production
**Test**: Site is accessible at whiteglovesstudio.com.au
```bash
# Deploy frontend with environment variables and build settings
```
**Definition of Done**: Frontend is live and connected to production CMS

## Final Testing & Polish

### Task 46: Test All CMS Functions
**Goal**: Verify complete CMS workflow
**Test**: Can create, edit, delete content in all collections
- Create a test service, portfolio project, and blog post
- Verify all fields save correctly
- Test image uploads and rich text content

**Definition of Done**: All CMS functionality works as expected

### Task 47: Test All Frontend Routes
**Goal**: Verify complete site navigation
**Test**: All pages load correctly with real CMS content
- Test dynamic routes with real data
- Verify links between pages work
- Test contact form submission

**Definition of Done**: Complete site navigation works with live data

### Task 48: Performance Audit
**Goal**: Ensure site meets performance standards
**Test**: Lighthouse scores > 90 for all metrics
- Run Lighthouse on key pages
- Fix any performance issues
- Verify mobile responsiveness

**Definition of Done**: Site passes performance and accessibility audits

### Task 49: Content Population
**Goal**: Add initial content for launch
**Test**: Site has professional content in all sections
- Add real service descriptions
- Upload portfolio project examples
- Create initial blog posts

**Definition of Done**: Site has complete, professional content ready for launch

### Task 50: Final QA Testing
**Goal**: Complete quality assurance before launch
**Test**: Site works perfectly across devices and browsers
- Test on mobile, tablet, desktop
- Verify all forms work
- Check all links and navigation
- Test CMS to frontend content flow

**Definition of Done**: Site is ready for public launch

## Notes for Implementation

### Testing Strategy
- Each task should be completed and tested independently
- Use localhost:3000 for frontend and localhost:3001 for CMS during development
- Test responsive design on multiple screen sizes
- Verify TypeScript compilation passes for each task

### Development Environment
- Use Node.js 18+ for both frontend and CMS
- MongoDB can be local or MongoDB Atlas free tier during development
- Use placeholder content initially, replace with real content in final tasks

### Task Dependencies
- Tasks 1-4 must be completed before others
- CMS tasks (5-12) should be completed before frontend integration (14+)
- Core components (13-17) needed before page implementation
- Deployment tasks (44-45) require all previous tasks complete

### Success Criteria
Each task is considered complete when:
1. The specific functionality works as described
2. No TypeScript compilation errors
3. The feature can be demonstrated/tested as specified
4. Code follows consistent patterns established in earlier tasks