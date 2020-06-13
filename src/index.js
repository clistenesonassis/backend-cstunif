import express from "express";
import cors from "cors";
import routes from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());


const PORT = 3500;

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);
});