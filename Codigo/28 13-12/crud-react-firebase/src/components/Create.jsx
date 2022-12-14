import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase'

const Create = ()=>{

    const [description,setDescription]= useState("")
    const [stock,setStock]= useState(0)
    const navigate = useNavigate()

    const productsCollection = collection(db,"products")

    const store =async (e)=>{
        e.preventDefault()
        await addDoc(productsCollection,{
            description:description,
            stock:stock
        })
        navigate("/")
    }
return(
<div className="container">
<div className="row">
    <div className="col">
        <h1>Create Product</h1>
        <form onSubmit={store}>
            <div className="mb-3">
                    <label className='form-label'>Description</label>
                    <input 
                    value={description}
                onChange={(e)=>setDescription(e.target.value)}
                    type="text"
                    className='form-control'/>
                </div>

                <div className="mb-3">
                    <label className='form-label'>stock</label>
                    <input 
                    value={stock}
                onChange={(e)=>setStock(e.target.value)}
                    type="number"
                    className='form-control'/>
                </div>
                <button type="submit" className='btn btn-primary'>CREATE</button>
        </form>
    </div>
</div>
</div>


)




}
export default Create