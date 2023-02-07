require('dotenv').config();

module.exports = {
  // Conexión
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "Banana778!",
  database: process.env.DB_DATABASE || "sequelize",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "mysql",
  define: {
    timestamps: false,

    // Genera claves foraneas de este tipo user_id en vez de userId
    underscored: true
  }
};
