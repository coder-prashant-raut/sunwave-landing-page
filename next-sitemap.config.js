/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sunwavesolar.in',
  generateRobotsTxt: true, // 👈 generates /robots.txt automatically
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/admin'],
};
