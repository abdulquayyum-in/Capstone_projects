import express from 'express';
import dotenv from "dotenv"
import { chats } from './data.js';
dotenv.config()
const app = express()
const port = process.env.port || 5000


app.get('/', (req, res) => {
    res.send("Server is up and running")
})

app.get("/chats",(req,res)=>{
     res.send(chats);
})

app.get("/chat/:id",(req,res)=>{
    res.send(chats.find(ele=>req.params.id === ele._id))
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});