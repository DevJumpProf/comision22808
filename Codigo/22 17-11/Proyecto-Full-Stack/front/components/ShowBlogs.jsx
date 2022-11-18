import axios from "axios"
import { useState,UseEffect } from "react"
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



}