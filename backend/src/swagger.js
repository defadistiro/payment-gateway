const fastifySwagger = require('fastify-swagger');

module.exports = (fastify) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'Payment Gateway API',
        description: 'Payment Gateway API Documentation',
        version: '1.0.0',
      },
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    exposeRoute: true,
  });
};
