import express from "express"
 import cors from "cors" 
 import blogRoutes from "./routes/blogRoutes.js"
 import db from "./database/db.js"

const app = express()

app.use("/blogs",blogRoutes)


app.use(cors())
app.use(express.json())

//base de datos
try {
    await db.authenticate()
    console.log("conexion Exitosa de tu base de datos")
} catch (error) {
    console.log (`conexion fallida error ${error}`)
}

const port = 8000
app.listen(port,()=>{
    console.log(`Servidor ok en el puerto ${port}`)
})