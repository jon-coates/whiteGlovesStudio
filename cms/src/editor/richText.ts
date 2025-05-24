import type { RichTextAdapter } from '@payloadcms/richtext-lexical'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const richTextEditor: RichTextAdapter = lexicalEditor({
  features: {
    blocks: [
      {
        name: 'heading',
        label: 'Heading',
        options: [
          {
            label: 'Heading 1',
            value: 'h1',
          },
          {
            label: 'Heading 2',
            value: 'h2',
          },
          {
            label: 'Heading 3',
            value: 'h3',
          },
        ],
      },
      {
        name: 'paragraph',
        label: 'Paragraph',
      },
    ],
    links: {
      enabled: true,
      fields: [
        {
          name: 'rel',
          label: 'Rel Attribute',
          type: 'select',
          options: [
            {
              label: 'None',
              value: '',
            },
            {
              label: 'Noopener',
              value: 'noopener',
            },
            {
              label: 'Noreferrer',
              value: 'noreferrer',
            },
            {
              label: 'Noopener & Noreferrer',
              value: 'noopener noreferrer',
            },
          ],
        },
        {
          name: 'target',
          label: 'Target',
          type: 'select',
          options: [
            {
              label: 'Same Window',
              value: '_self',
            },
            {
              label: 'New Window',
              value: '_blank',
            },
          ],
        },
      ],
    },
    lists: {
      enabled: true,
      types: ['ul', 'ol'],
    },
    images: {
      enabled: true,
      fields: [
        {
          name: 'alt',
          label: 'Alt Text',
          type: 'text',
          required: true,
        },
        {
          name: 'caption',
          label: 'Caption',
          type: 'text',
        },
      ],
    },
    bold: {
      enabled: true,
    },
    italic: {
      enabled: true,
    },
    underline: {
      enabled: true,
    },
    strikethrough: {
      enabled: true,
    },
    code: {
      enabled: true,
    },
    clearFormatting: {
      enabled: true,
    },
  },
}) 