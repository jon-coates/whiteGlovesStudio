'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { FormField } from '@/components/ui/FormField';
import { Gallery } from '@/components/ui/Gallery';
import { Loading } from '@/components/ui/Loading';
import { useState } from 'react';
import { FeatureSection } from '@/components/sections/FeatureSection';

const TestPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Sample images for gallery testing
  const sampleImages = [
    {
      src: '#',
      alt: 'Sample image 1',
      color: 'hsl(0, 70%, 50%)',
    },
    {
      src: '#',
      alt: 'Sample image 2',
      color: 'hsl(120, 70%, 50%)',
    },
    {
      src: '#',
      alt: 'Sample image 3',
      color: 'hsl(240, 70%, 50%)',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Component Test Page</h1>

      {/* Button Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Small Primary</Button>
            <Button variant="primary" size="md">Medium Primary</Button>
            <Button variant="primary" size="lg">Large Primary</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" isLoading>Loading Button</Button>
            <Button variant="primary" disabled>Disabled Button</Button>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is a basic card with some content.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 mb-4 rounded-md" style={{ backgroundColor: 'hsl(0, 70%, 50%)' }} />
              <p>This card includes an image above the content.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Footer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This card has a footer section below the content.</p>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Form Fields Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Form Fields</h2>
        <div className="max-w-md space-y-4">
          <FormField
            label="Text Input"
            type="text"
            placeholder="Enter some text"
          />
          <FormField
            label="Email Input"
            type="email"
            placeholder="Enter your email"
          />
          <FormField
            label="Password Input"
            type="password"
            placeholder="Enter your password"
          />
          <FormField
            label="Textarea"
            type="textarea"
            placeholder="Enter a longer message"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="max-w-2xl">
          <Gallery images={sampleImages} />
        </div>
      </section>

      {/* Loading Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Loading States</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Page Loading</h3>
            <div className="border rounded-lg p-4">
              <Button onClick={() => setIsLoading(!isLoading)}>
                Toggle Page Loading
              </Button>
              {isLoading && <Loading type="page" />}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Content Loading</h3>
            <div className="border rounded-lg p-4">
              <Loading type="content" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Button Loading</h3>
            <div className="border rounded-lg p-4">
              <Loading type="button" />
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Our Services"
        intro="We provide comprehensive archival and conservation services to preserve your valuable items for generations to come."
        features={[
          {
            icon: (
              <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
              </svg>
            ),
            title: "Digitisation",
            description: "High-quality digitisation services to capture digital copies of your physical items."
          },
          {
            icon: (
              <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                  />
              </svg>
            ),
            title: "Conservation",
            description: "Expert conservation services to restore and preserve your items to their original condition."
          },
          {
            icon: (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            ),
            title: "Archival Storage",
            description: "Professional archival storage solutions to protect your valuable items from environmental damage."
          }
        ]}
      />
    </div>
  );
};

export default TestPage; 