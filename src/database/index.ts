import { Sequelize } from "sequelize";
import config from "../config";

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize.sync({ force: false, alter: true });

async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection Sequelize authenticated.");
  } catch (err) {
    console.log("Unable to authenticate Sequelize: ", err);
  }
};

export default sequelize;
