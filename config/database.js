module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-147.railway.app'),
      port: env.int('DATABASE_PORT', 6131),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'w1zaYhXVT016LFi7XD8L'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
