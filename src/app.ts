import express, { Request, Response } from "express"
import cors from "cors"
import router from "./api/v1/routes"
import { errorHandler } from "./api/v1/controllers";

const app = express()

app.use(express.json());

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE","PATCH","OPTIONS","HEAD"],
        allowedHeaders: "*",
        credentials: true,
    })
);


app.get("/", (_: Request, res: Response) => {
    res.send("Server is working");
});

console.log("app------------------>")

// API versioning
app.use("/api/v1", router)

app.use(errorHandler);

export default app;
