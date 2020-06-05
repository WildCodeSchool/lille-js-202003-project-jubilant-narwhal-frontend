module.exports = {
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: async (config) => {

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(tsx|ts|js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-typescript'] }
      }
    });
    config.resolve.extensions = [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js'
    ]
    config.resolve.alias = {
      'react-native$': 'react-native-web'
    }

    // Return the altered config
    return config;
  },
};

