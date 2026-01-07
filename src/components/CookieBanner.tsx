'use client';
// Accessibility update: aside element with landmark role - v2

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CookieBanner(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);
  
  // Don't show cookie banner on legal pages
  if (pathname === '/privacy' || pathname === '/terms' || pathname === '/cookies') {
    return null;
  }
  
  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return null;
  }

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    localStorage.setItem('cookie-analytics', 'true');
    localStorage.setItem('cookie-marketing', 'true');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    localStorage.setItem('cookie-analytics', 'false');
    localStorage.setItem('cookie-marketing', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 z-50 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-lg font-semibold mb-2">Cookie Notice</h3>
            <p className="text-gray-300 text-sm">
              We use cookies to enhance your experience, analyze site traffic, and personalize content. 
              By continuing to use our site, you agree to our use of cookies.
            </p>
            
            {showDetails && (
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">Cookie Categories:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="essential" 
                      checked 
                      disabled 
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="essential">
                      <span className="font-medium">Essential Cookies:</span> Required for the site to function properly.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="analytics" 
                      defaultChecked 
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="analytics">
                      <span className="font-medium">Analytics Cookies:</span> Help us understand how visitors interact with our site.
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="marketing" 
                      defaultChecked 
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="marketing">
                      <span className="font-medium">Marketing Cookies:</span> Used to deliver advertisements relevant to you.
                    </label>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-4 text-sm">
              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                aria-expanded={showDetails}
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                {showDetails ? 'Hide Details' : 'Cookie Settings'}
              </button>
              <a href="/privacy" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={acceptEssential}
              className="px-6 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="px-6 py-2 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}