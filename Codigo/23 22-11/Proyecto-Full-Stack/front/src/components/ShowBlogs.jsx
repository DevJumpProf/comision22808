import axios from "axios"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"

const url = "http://localhost:8000/blogs/"

const ShowBlogs = ()=>{

    const [blogs,setBlog]= useState([])

    useEffect(()=>{
        getBlogs()
    },[])

//procedimiento para mostrar todos los blogs

const getBlogs = async ()=>{
    const res = await axios.get(url)
   setBlog(res.data)
}

//procedimiento para eliminar un blog
const deleteBlog = async (id)=>{
await axios.delete(`${url}${id}`)
getBlogs()
}
return (
<div className="container">
    <div className="row">
        <div className="col">
<small>CREAR POST</small>
<Link to="/create" className="btn btn-primary mt-2 mb-2"><i className="fas fa-plus"></i></Link>
<table className="table">
<thead className="table-primary">
<tr>
    <th>Title</th>
    <th>Content</th>
    <th>Actions</th>
</tr>
</thead>
<tbody>
    {blogs.map((blog)=>(
       <tr key= {blog.id}>
<td>{blog.title}</td>
<td>{blog.content}</td>
<td>
<Link to ={`/edit/${blog.id}`} className="btn btn-info"><i className="fas fa-edit"></i></Link>
<button onClick={()=>deleteBlog(blog.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
</td>

       </tr>
    ))}
</tbody>
</table>
        </div>
    </div>

</div>

)

}

export default ShowBlogs