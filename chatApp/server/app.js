import express from 'express';
import dotenv from "dotenv"
dotenv.config()
const app = express()


app.get('/', (req, res) => {
    res.send("Server is up and running")
})

app.listen(5000, () => {
    console.log(`Server started on port 5000`);
});