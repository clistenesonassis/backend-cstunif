import { Sequelize } from "sequelize";
import { dataBase } from "../config";

const connection = new Sequelize(dataBase);

export default connection;
