const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8081',
    pathRewrite: {'^/api' : '/v1/api'}
  }
];module.exports = proxy;
