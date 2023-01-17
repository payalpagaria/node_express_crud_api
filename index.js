import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app=express();
const PORT=3000;
app.use(bodyParser.json())
app.use("/users",userRoutes);
app.get("/",(req,res)=>res.send("Welcome to the users Api"))
app.listen(PORT,()=>console.log(`The server is started on port:http://localhost:${PORT}`));
