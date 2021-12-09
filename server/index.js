const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

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