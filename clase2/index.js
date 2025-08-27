import express from "express"
import  compression from 'compression'

const app = express()

app.use(compression({ brotli: { enabled: true, zlib: { } } }))

app.get("/",(req,res)=>{
    let string = 'Hola Coders, soy una string ridículamente larga';
    for (let i = 0; i < 1e6; i++) {
        string += ' Hola Coders, soy una string ridículamente larga';
    }
    res.send(string);
})

app.listen(8080,()=> console.log("server in port 8080"))