dotenv.config()
import express from "express"
import dotenv from "dotenv"
import { router } from "./routes";

const PORT = process.env.PORT ?? 3000


const app = express();
app.use("/api/v1", router)
app.use("*", (req, res) => {
    console.log("Cannot find your response and app.use * ran !!")
    res.status(404).json({
        message: "cannot find your response :("
    })
    return
})

app.listen(PORT, () => {
    console.log(`Backend app listening on port : ${PORT}`)
})