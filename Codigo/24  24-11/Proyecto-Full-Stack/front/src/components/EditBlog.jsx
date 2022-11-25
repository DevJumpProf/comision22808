import axios from "axios"
import { useState,useEffect} from "react"
import { useNavigate,useParams } from "react-router-dom"

const url = "http://localhost:8000/blogs/"

export const EditBlog = ()=>{
    const [titulo, setTitulo]= useState("")
    const [contenido, setContenido]= useState("")
    const navigate = useNavigate()

    const {id}=useParams()

    //procedimiento para editar /actualizar
    const update = async (e)=>{
        e.preventDefault()
        await axios.put(url+id,
            {title:titulo,
                content : contenido}
               )
               navigate("/")
    }
    
    useEffect(()=>{
        getBlogByID()
    },[])

        const getBlogByID = async()=>{
            const res = await axios.get(url+id)
            setTitulo(res.data.title)
               setContenido(res.data.content)
        }   

        return (
            <div>
                <h3>Edit Post</h3>
                <form onSubmit={update}>
                    <div className="mb-3">
                        <label className="form-label">Titulo</label>
                        <input 
                        value={titulo}
                        onChange= {(e)=>setTitulo(e.target.value)}
                        type="text" 
                        className="form-control"
                        />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contenido</label>
                        <textarea 
                        value={contenido}
                        onChange= {(e)=>setContenido(e.target.value)}
                        type="text" 
                        className="form-control"
                        />

                    </div>
                    <button type="submit" className="btn btn-primary">EDITAR</button>
                </form>
            </div>
        )

}