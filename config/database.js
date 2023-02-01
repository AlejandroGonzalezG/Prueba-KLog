require('dotenv').config();

module.exports = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "Banana778!",
  database: process.env.DB_DATABASE || "sequelize",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  define: {
    timestamps: false,

    // Genera claves foraneas de este tipo user_id en vez de userId
    undescored: true
  }
};
