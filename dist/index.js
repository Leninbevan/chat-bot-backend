"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const cors = require("cors");
// const { errorHandler } = require("./Controllers/e_CommerceController");
// import {router as e_commerceRouter} from "./Routes/product_Routes";
const path = require("path");
const app = (0, express_1.default)();
require("dotenv").config();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"],
    allowedHeaders: "*",
    credentials: true,
}));
app.use(express_1.default.json());
// const result =  db.execute('select * from account');
// result.execute().then((a: any) => {
//     console.log(a);
// })
db_1.default.$client.connect();
db_1.default.$client.on("error", (err) => { console.error.bind(console, "Connection Error: "); });
db_1.default.$client.once("Open", () => { console.log("Database connected successfully"); });
// mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME })
//     .then(() => console.log("MongoDB connected"))
//     .catch((err:unknown) => console.log(err));
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//     console.log("Database connected successfully");
// });
app.get("/", (_, res) => {
    res.send("Server is working");
});
// app.use("/", e_commerceRouter);
// app.use(errorHandler);
app.listen(process.env.PORT || 3322, () => {
    console.log("Server is running on port 3322");
});
