module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://subnetapi.runasp.net',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
    },
  };
  