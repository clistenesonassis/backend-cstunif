require("dotenv/config");

module.exports = {
  dialect: "postgres",
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  quoteIdentifiers: true,
  define: {
    timestamps: true,
    undercored: false,
    underscoredAll: false,
    createdAt: "created",
    updatedAt: "updated",
  },
};

// "models-path": resolve(__dirname, "src", "models"),
//   "migrations-path": resolve(__dirname, "src", "database", "migrations"),
//   "seeders-path": resolve(__dirname, "src", "database", "migrations"),
