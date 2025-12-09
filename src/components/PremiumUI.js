import React, { useState, useEffect } from 'react';

const PremiumUI = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkMode(savedTheme === 'dark');

    // Apply dark mode class to document element
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');

    // Toggle dark mode class on document element
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="premium-ui-container min-h-screen transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="py-6 px-4 sm:px-8 lg:px-16 border-b dark:border-gray-700 border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
              <i className="fas fa-cube text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold">PremiumUI</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="premium-ui-theme-toggle p-3 transition-all duration-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-yellow-400 bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              {darkMode ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>

            <button className="premium-ui-btn px-6 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Design for <span className="text-indigo-600">Modern</span> Applications
            </h1>
            <p className="text-lg dark:text-gray-300 text-gray-600 max-w-lg">
              Create stunning user interfaces with our carefully crafted components and templates. Designed for performance and accessibility with a focus on user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="premium-ui-btn px-6 py-3 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="premium-ui-btn px-6 py-3 rounded-lg font-medium border dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-yellow-400 premium-ui-float"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-pink-500 premium-ui-float premium-ui-float-delay-1"></div>
                <i className="fas fa-rocket text-white text-5xl z-10"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 dark:bg-gray-800 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Everything you need to create beautiful and functional interfaces with minimal effort
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="premium-ui-card rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700 bg-white"
              >
                <div className="w-12 h-12 rounded-lg dark:bg-indigo-900/50 bg-indigo-100 flex items-center justify-center mb-4">
                  <i className={`fas fa-${item === 1 ? 'palette' : item === 2 ? 'mobile-alt' : item === 3 ? 'bolt' : item === 4 ? 'lock' : item === 5 ? 'sliders-h' : 'headset'} text-indigo-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                <p className="dark:text-gray-300 text-gray-600">
                  {item === 1 && 'Clean and elegant design that follows the latest UI/UX trends with attention to detail.'}
                  {item === 2 && 'Looks perfect on all devices from mobile phones to large desktop screens.'}
                  {item === 3 && 'Optimized for performance with minimal loading times and smooth interactions.'}
                  {item === 4 && 'Built with security best practices and reliable infrastructure you can trust.'}
                  {item === 5 && 'Easily adapt colors, components, and layouts to match your brand identity.'}
                  {item === 6 && 'Our dedicated team is always ready to help you with any questions or issues.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Innovators</h2>
            <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their applications with our UI components
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="premium-ui-card rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-700 bg-white"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full dark:bg-gray-600 bg-gray-200 flex items-center justify-center mr-4">
                    <span className="font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Jane Doe</h4>
                    <p className="text-sm dark:text-gray-400 text-gray-500">Product Manager</p>
                  </div>
                </div>
                <p className="italic dark:text-gray-300 text-gray-600">
                  {testimonial === 1 && '"This UI kit has completely transformed our product. The attention to detail and consistency across components is exceptional."'}
                  {testimonial === 2 && '"Implementation was straightforward, and the documentation is excellent. Our development speed increased significantly."'}
                  {testimonial === 3 && '"The dark/light theme toggle along with the smooth animations make for a premium user experience that our users love."'}
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your UI?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of designers and developers who are already creating amazing user experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="premium-ui-btn px-6 py-3 rounded-lg font-medium bg-white text-indigo-600 hover:bg-gray-100 transition-colors transform hover:scale-105">
              Get Started Now
            </button>
            <button className="premium-ui-btn px-6 py-3 rounded-lg font-medium bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 lg:px-16 border-t dark:border-gray-700 border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <i className="fas fa-cube text-white"></i>
                </div>
                <span className="text-lg font-bold">PremiumUI</span>
              </div>
              <p className="dark:text-gray-400 text-gray-600">
                Creating beautiful user interfaces for modern applications with attention to detail and user experience.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Solutions', 'Pricing', 'Demo'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="dark:text-gray-400 dark:hover:text-indigo-400 text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Documentation', 'Tutorials', 'Blog', 'Support'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="dark:text-gray-400 dark:hover:text-indigo-400 text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Careers', 'Contact', 'Partners'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="dark:text-gray-400 dark:hover:text-indigo-400 text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t dark:border-gray-700 border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="dark:text-gray-400 text-gray-600">© 2023 PremiumUI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {['fab fa-twitter', 'fab fa-facebook', 'fab fa-linkedin', 'fab fa-github'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-indigo-400 text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumUI;