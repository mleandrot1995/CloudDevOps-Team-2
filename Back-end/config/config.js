import dotenv from "dotenv";

dotenv.config();

const config = {
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  app: {
    port: process.env.APP_PORT,
  },
};

export { config };
