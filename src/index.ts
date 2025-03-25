
import app from "./app";

require("dotenv").config();


// const result =  db.execute('select * from account');

// result.execute().then((a: any) => {
//     console.log(a);
// })


// db.$client.connect();
// db.$client.on("error", (err: any) => { console.error.bind(console, "Connection Error: ") });
// db.$client.once("Open", () => { console.log("Database connected successfully") });

app.listen(process.env.PORT || 3322, () => {
    console.log("Server is running on port 3322");
});
