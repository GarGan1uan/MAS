require('dotenv').config();
const server = require("express");
const cors = require('cors');
const path = require("path");

const PORT = process.env.PORT;

const app = server();
app.use(cors());
app.use(server.json());
app.use(server.static(path.resolve(__dirname, "static")));

const runApp = async () => {
    try{
        app.listen(PORT);
    } catch (e){
        console.log("something go wrong, try again! Error: " + e);
    }
}

runApp();