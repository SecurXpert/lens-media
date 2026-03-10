'use client';

import { useParams } from 'next/navigation';
import { getServiceData } from '@/utils/services';

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug;
  const service = getServiceData(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Service Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <a 
            href="/services" 
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Services
          </a>
          <h1 className="text-6xl font-semibold text-gray-900 dark:text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What We Offer
            </h2>
            <ul className="space-y-4">
              {service.details.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {service.features && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h3>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            {service.process && (
              <div className="space-y-4 mb-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-4">
                      {index + 1}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Get Started
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ready to take your business to the next level? Contact us today to learn more about our {service.title} services.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
