import { ReactNode } from 'react';

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  intro: string;
  features: FeatureItem[];
}

export const FeatureSection = ({ title, intro, features }: FeatureSectionProps) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {intro}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 