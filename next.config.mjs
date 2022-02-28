/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true, // was there by default
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.my-file$/i,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
  // images: {
  //   loader: "imgix",
  //   path: "https://example.com/myaccount/",
  // },
};
