const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    pathRewrite: {'^/api' : '/v1/api'}
  }
];module.exports = proxy;
