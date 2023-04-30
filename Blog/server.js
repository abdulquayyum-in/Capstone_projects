import express from "express"
const app = express()
import mongoose from "mongoose"
import articlerouter from "./routes/articles.js"


 await mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser:true
 })
app.set('view engine','ejs')

app.use("/articles",articlerouter)

app.get("/",(req,res)=>{
    const articles = [{
        title:"Test Article",
        createdAt:new Date(),
        description:"YTest "

    },{
        title:"Test Article 1",
        createdAt:new Date(),
        description:"YTest "

    },{
        title:"Test Article 2",
        createdAt: new Date(),
        description:"YTest "

    }]
    res.render("articles/index",{articles:articles})
})
app.listen(5000,()=>{
    console.log("server started at 5000");
})