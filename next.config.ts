import { NextConfig } from 'next'; // Import Next.js configuration type
import webpack, { Configuration } from 'webpack'; // Import Webpack types

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    config.plugins = config.plugins || []; // Ensure plugins array exists
    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        debug: true,
      })
    );
    return config;
  },
};

export default nextConfig;
