"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv").config();
// const result =  db.execute('select * from account');
// result.execute().then((a: any) => {
//     console.log(a);
// })
// db.$client.connect();
// db.$client.on("error", (err: any) => { console.error.bind(console, "Connection Error: ") });
// db.$client.once("Open", () => { console.log("Database connected successfully") });
app_1.default.listen(process.env.PORT || 3322, () => {
    console.log("Server is running on port 3322");
});
