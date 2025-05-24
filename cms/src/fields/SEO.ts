import type { Field } from 'payload/types'

export const SEO: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  admin: {
    position: 'sidebar',
  },
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title',
      required: true,
      admin: {
        description: 'Title used for search engines and browser tabs. Should be 50-60 characters.',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description',
      required: true,
      admin: {
        description: 'Description used for search engines. Should be 150-160 characters.',
      },
    },
    {
      name: 'ogImage',
      type: 'upload',
      label: 'Open Graph Image',
      relationTo: 'media',
      admin: {
        description: 'Image used when sharing on social media. Recommended size: 1200x630px.',
      },
    },
  ],
} 