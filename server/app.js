import express from "express"
import config from "config"
import "./dbConnect.js"
import userRouter from "./controller/users/index.js"
import TaskRouter from "./controller/tasks/index.js"
const app = express()

app.use(express.json())



const port = config.get("PORT")

app.get("/",(req,res)=>{
    res.send("WAelcome to scheduler backend")
})

app.use("/api/user",userRouter)
app.use("/api/user",TaskRouter)
app.listen(port,()=>{
    console.log("Server started at",port)
})
console.log(port)