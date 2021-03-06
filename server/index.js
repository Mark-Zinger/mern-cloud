const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const CORSMiddleware = require("cors");
const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");

const app = express();

app.use(express.json());
app.use(CORSMiddleware())

app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const [PORT, DBNAME, DBUSER, DBPASS] = ["serverPort","db.name","db.user", "db.password"].map(key => config.get(key));
const dbURL = `mongodb+srv://${DBUSER}:${DBPASS}@cloud.qzavu.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

const start = async () => {
    try {

        await mongoose.connect(dbURL);

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        })
    } catch (e) {

    }
}

start();