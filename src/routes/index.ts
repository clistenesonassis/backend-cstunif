import { Router } from "express";

import ProductRoutes from "./ProductRoutes";

const routes = Router();

// product routes.
routes.use("/product", ProductRoutes);

export default routes;
