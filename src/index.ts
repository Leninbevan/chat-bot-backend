import app from "./app";

require("dotenv").config();

app.listen(process.env.PORT || 3322, () => {
    console.log("Server is running on port 3322");
});
