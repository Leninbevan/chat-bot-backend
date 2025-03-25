import express, { Request, Response } from "express"
import cors from "cors"
import router from "./api/v1/routes"
import { CustomError } from "./types/error";

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

// API versioning
app.use("/api/v1", router)

app.use((err: CustomError.Error, req: Request, res: Response, next: Function) => {
    console.error(err);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

export default app;
