import express from "express";
import bodyParser from "body-parser";

const app=express();
const PORT=3000;
app.use(bodyParser.json())
app.get("/",(req,res)=>res.send("Welcome to the users Api"))
app.listen(PORT,()=>console.log(`The server is started on port:http://localhost:${PORT}`));
