import type { NextConfig } from 'next';

import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;
