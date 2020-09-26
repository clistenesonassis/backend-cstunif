import express from "express";
import cors from "cors";
import "dotenv/config";

import "./database";

import Routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use("/api", Routes);
  }
}

export default new App().express;
