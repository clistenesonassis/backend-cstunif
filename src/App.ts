import express from 'express';
import cors from 'cors';
import 'dotenv/config';

class App {
  public express: express.Application

  public constructor () {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares (): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private routes (): void {
    this.express.get('/', (req, res) => res.send('Hello World!!'));
  }
}

export default new App().express;
