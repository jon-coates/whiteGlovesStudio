'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { FormField } from '@/components/ui/FormField';
import { Gallery } from '@/components/ui/Gallery';
import { Loading } from '@/components/ui/Loading';
import { useState } from 'react';

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
    </div>
  );
};

export default TestPage; 