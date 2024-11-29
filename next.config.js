const nextConfig = {
  webpack(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new require("webpack").LoaderOptionsPlugin({
        debug: true,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
