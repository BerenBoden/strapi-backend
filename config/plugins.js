module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: env("JWT_SECRET_EXPIRES")
      },
      refreshToken: {
        expiresIn: env("REFRESH_TOKEN_EXPIRES"),
      },
    },
  },
});
