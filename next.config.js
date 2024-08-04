// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'groweasy-frontend-assignment'; // Your repository name

module.exports = {
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  trailingSlash: true,
};
