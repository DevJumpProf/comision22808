//importo el modelo


import BlogModel from "../models/BlogModel.js";

/* METODOS DEL CRUD */

//MOSTRAR TODOS LOS REGISTROS
export const getAllBlogs = async (req,res)=>{
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}