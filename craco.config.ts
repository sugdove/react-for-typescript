const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
const resolve = dir => path.join(__dirname, '.', dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
};