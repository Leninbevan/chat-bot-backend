"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./api/v1/routes"));
const controllers_1 = require("./api/v1/controllers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"],
    allowedHeaders: "*",
    credentials: true,
}));
app.get("/", (_, res) => {
    res.send("Server is working");
});
console.log("app------------------>");
// API versioning
app.use("/api/v1", routes_1.default);
app.use(controllers_1.errorHandler);
exports.default = app;
