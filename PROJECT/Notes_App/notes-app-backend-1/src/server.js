const Hapi = require('@hapi/hapi');
const MyRoutes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    // host: 'localhost',
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(MyRoutes);

  await server.start();
  console.log(`Server running in ${server.info.uri}`);
};

init();