module.exports = {
  apps: [
    {
      name: 'strapi',
      script: 'node_modules/.bin/strapi',
      args: 'start',
      cwd: '/root/strapi-logger',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
