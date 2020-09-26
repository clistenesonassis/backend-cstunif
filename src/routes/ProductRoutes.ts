import { Router } from "express";

const routes = Router();

// create a new products.
routes.post("/", (req, res) => res.json("deu certo"));

// get all products.
routes.get("/all", (req, res) => res.json("deu certo"));

export default routes;
