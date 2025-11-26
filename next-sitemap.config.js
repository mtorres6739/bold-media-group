/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://boldmediagroup.com',
  generateRobotsTxt: false, // We have a custom robots.txt
  generateIndexSitemap: false,
  exclude: ['/api/*', '/_next/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      '/': 1.0,
      '/pricing': 0.9,
      '/contact': 0.9,
      '/podcast-discovery': 0.9,
      '/about': 0.8,
      '/services': 0.8,
      '/blog': 0.8,
    };

    // Blog posts get high priority
    if (path.startsWith('/blog/') && path !== '/blog') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://boldmediagroup.com/sitemap.xml',
    ],
  },
};
