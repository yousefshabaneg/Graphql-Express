import dotenv from "dotenv";

dotenv.config();

const {
  API_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  COOKIE_SECRET,
} = process.env;

export default {
  apiPort: parseInt(API_PORT as string, 10) || 3000,
  dbName: DB_NAME as string,
  dbUser: DB_USER as string,
  dbPassword: DB_PASSWORD as string,
  googleClientId: GOOGLE_CLIENT_ID as string,
  googleClientSecret: GOOGLE_CLIENT_SECRET as string,
  googleCallbackUrl: `http://localhost:${API_PORT}/api/v1/auth/google/redirect`,
  successLoginUrl: `http://localhost:5000/login-success`,
  errorLoginUrl: `http://localhost:5000/login-error`,
  cookieSecret: COOKIE_SECRET as string,
};
