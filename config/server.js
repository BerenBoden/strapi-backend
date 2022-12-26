module.exports = ({ env }) => ({
  host: env('HOST', 'containers-us-west-147.railway.app'),
  port: env.int('PORT', 6131),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
