/**
 * @type import('next').NextConfig
 */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  poweredByHeader: false,
  headers() {
    return [
      {
        source: '/fonts/inter-var-latin.woff2',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  rewrites() {
    return [
      { source: '/bee.js', destination: 'https://cdn.splitbee.io/sb.js' },
      { source: '/_hive/:slug', destination: 'https://hive.splitbee.io/:slug' },
    ];
  },
};
