import express from "express"
import  compression from 'compression'
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(compression({ brotli: { enabled: true, zlib: { } } }))

app.get("/",(req,res)=>{
    let string = 'Hola Coders, soy una string ridículamente larga';
    res.send(string);
})

app.listen(process.env.PORT,()=> console.log("server in port " + process.env.PORT))