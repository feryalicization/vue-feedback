const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/feedback/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/feedbacks/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
