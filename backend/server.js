require('dotenv').config();

const fastify = require('fastify')({ logger: true });
const accountRoutes = require('./src/routes/accountRoutes');
const transactionRoutes = require('./src/routes/transactionRoutes');
const connectDB = require('./src/utils/db');
const swagger = require('@fastify/swagger');
const swaggerUI = require('@fastify/swagger-ui');

// Middleware untuk parsing JSON
fastify.register(require('@fastify/formbody'));

// Connect to the database
connectDB();

// Register routes
fastify.register(accountRoutes);
fastify.register(transactionRoutes);

// Register Swagger
fastify.register(swagger, {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Payment Gateway API',
      description: 'API documentation for the payment gateway service',
      version: '0.1.0',
    },
    tags: [
      { name: 'account', description: 'Account related endpoints' },
      { name: 'transaction', description: 'Transaction related endpoints' },
    ],
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: true,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  addContentSecurityPolicy: true,
});

fastify.register(swaggerUI, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: true,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  addContentSecurityPolicy: true,
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 5000, host: '0.0.0.0' });
    fastify.log.info(`Server running on port ${process.env.PORT || 5000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
