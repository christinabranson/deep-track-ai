// next.config.js
module.exports = {
    output: 'export', // Tells Next.js to export a static HTML site
    trailingSlash: true, // Ensures each page ends with a trailing slash (/about -> /about/)
    images: {
      unoptimized: true, // Disable Next.js's built-in image optimization for static exports
    },
  // Specify the base path for deployment
  basePath: '/deep-track-ai',

  // Optional: assetPrefix for serving static files from the subdirectory
  assetPrefix: '/deep-track-ai/',
  };
  