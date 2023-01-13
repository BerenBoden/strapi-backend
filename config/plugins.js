module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "15m",
      },
      refreshToken: {
        expiresIn: "30m",
      },
    },
  },
});
