// module.exports = {
//   jwtSecretKey: "jwt_secret",
// };
module.exports = {
  jwtSecretKey: process.env.JWT_SECRET_KEY || "default-fallback-secret",
};

