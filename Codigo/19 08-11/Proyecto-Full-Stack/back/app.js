import express from "express"
/* import cors from "cors" */

const app = express()

app.get("/",(req,res)=>{
    res.send ("ok desde el servidor")
})
const port = 8000
app.listen(port,()=>{
    console.log(`Servidor ok en el puerto ${port}`)
})