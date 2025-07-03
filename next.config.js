module.exports = {
  //... other configurations
  webpack: (config) => {
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        {
          options: {
            modules: true,
          },
        },
      ],
    });
    return config;
  },
};