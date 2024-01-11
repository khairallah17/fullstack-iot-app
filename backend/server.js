const express=require("express");// importer express
const app=express(); //démarrer express
const path=require("path");

const cors=require("cors");
app.use('/public/uploads', express.static(path.join(__dirname, 'uploads')));

const devicerouter=require("./routes_server/devices.routes");
const categoryRouter=require("./routes_server/categories.routes");
const loginRouter=require("./routes_server/login.routes");

const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config()

mongoose.connect(process.env.DB_URL)
    .then(result=>app.listen(process.env.SERVER_PORT,()=>console.log("server running")))
    .catch(err=>console.log(err));

app.use(cors());
app.use(express.json());

app.use("/devices",devicerouter);
app.use("/categories",categoryRouter);
app.use("/",loginRouter);


