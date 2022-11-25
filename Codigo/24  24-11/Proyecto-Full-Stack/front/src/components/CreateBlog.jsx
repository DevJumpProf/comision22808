import axios from "axios"
import { useState} from "react"
import { useNavigate } from "react-router-dom"

const url = "http://localhost:8000/blogs/"

export const CreateBlog=()=>{

    const [titulo, setTitulo]= useState("")
    const [contenido, setContenido]= useState("")
 
    const navigate = useNavigate()

    //procedimiento para guardar//crear blog
    const crear = async (e)=>{
        e.preventDefault()
        await axios.post(url,
            {title:titulo,
             content : contenido}
            )
            navigate("/")
}
return (
    <div>
        <h3>Crear Blog</h3>
        <form onSubmit={crear}>
<div className="mb-3">
<label className="form-label">Title</label>
<input 
value={titulo}
onChange={(e)=>setTitulo(e.target.value)}

type="text" 
className="form-control"
/>
</div>
<div className="mb-3">
<label className="form-label">Contenido</label>
<textarea
value={contenido}
onChange={(e)=>setContenido(e.target.value)}
type="text" 
className="form-control"
/>
</div>
<button type="submit" className="btn btn-primary">CREAR</button>
        </form>
    </div>
)
}