require("dotenv").config();
const express = require('express');
const app = express();
const path=require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { connectMongo } = require('./connection');
app.set('view engine','ejs');
app.set("views", path.join(__dirname, "views"));
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const staticRouter=require('./routes/staticRoute');
const urlRouter=require('./routes/urlRoute');
app.use('/',staticRouter);
app.use('/url',urlRouter);
const PORT = 8000;

(async () => {
    await connectMongo(process.env.MONGO_URI);

    app.listen(PORT, () => {
        console.log(`Listening on PORT:${PORT}`);
    });
})();
