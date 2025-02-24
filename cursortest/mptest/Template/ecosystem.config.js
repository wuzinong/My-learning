// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: "MockAPI",
      script: "server.js",

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      // args: "one two",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "React",
      script: "client.js",

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      // args: "one two",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "node",
      host: "0.0.0.0",
      ref: "origin/develop",
          repo: "https://dnvgl-one.visualstudio.com/DefaultCollection/Veracity%20Customer%20Projects/_git/Poseidon",
      path: "/var/www/production",
      "post-deploy": "yarn && pm2 reload ecosystem.config.js --env production"
    }
  }
};
