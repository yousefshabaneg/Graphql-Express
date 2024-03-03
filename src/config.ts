import dotenv from "dotenv";

dotenv.config();

const { API_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

export default {
  apiPort: parseInt(API_PORT as string, 10) || 3000,
  dbName: DB_NAME as string,
  dbUser: DB_USER as string,
  dbPassword: DB_PASSWORD as string,
};
