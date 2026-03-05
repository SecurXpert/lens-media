export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are passionate about creating exceptional digital experiences that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded with a vision to transform the digital landscape, MyWebsite has been at the forefront of web innovation for over a decade. Our journey began with a simple mission: to create beautiful, functional, and user-friendly websites that help businesses thrive in the digital age.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Today, we're proud to have helped hundreds of businesses establish their online presence and achieve their digital goals. Our team of talented designers, developers, and digital strategists work together to deliver solutions that exceed expectations.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in the power of technology to transform businesses and improve lives. That's why we're committed to staying at the cutting edge of web development and design trends.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Excellence</h4>
                  <p className="text-gray-600 dark:text-gray-300">We strive for perfection in everything we do.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Innovation</h4>
                  <p className="text-gray-600 dark:text-gray-300">We embrace new technologies and creative solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Integrity</h4>
                  <p className="text-gray-600 dark:text-gray-300">We build trust through transparency and honesty.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Customer Focus</h4>
                  <p className="text-gray-600 dark:text-gray-300">Your success is our primary objective.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Visionary leader with 15+ years of experience in web development and digital strategy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Jane Smith</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Lead Designer</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Creative genius specializing in user experience and interface design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mike Johnson</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Tech Lead</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Full-stack developer with expertise in modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
