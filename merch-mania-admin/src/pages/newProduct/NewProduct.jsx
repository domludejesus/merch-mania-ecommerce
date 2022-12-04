import "./newProduct.css"
import { useState } from "react"

export default function NewProduct() {
    const [ inputs, setInputs] = useState({})
    const [file, setFile] = useState(null)
    const [ cat, setCat] = useState([])

    const handleChange = (e) => {
        setInputs(prev=>{
            return {...prev, [e.target.name]:e.target.value}
        })
    }
    const handleCat = (e) => {
        setCat(e.target.value.split(","))
     }

    const handleClick = (e) => {
        e.preventDefault(); 
        //to do 
    }
  return (
    <div className="newProduct">
        <h1 className="addProductTitle"> New Product </h1>
        <form className="addProductForm">
            <div className="addProductItem">
                <label> Image </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files)[0]} />
            </div>
            <div className="addProductItem">
                <label> Title </label>
                <input name="title" type="text" placeholder="Graphic Design Tee" onChange={handleChange} />
            </div>
            <div className="addProductItem">
                <label> Price </label>
                <input name="price" type="text" placeholder="100" onChange={handleChange}/>
            </div>
            <div className="addProductItem">
                <label> Description </label>
                <input name="desc" type="text" placeholder="Description..." onChange={handleChange} />
            </div>
            <div className="addProductItem">
                <label> Categories </label>
                <input type="text" placeholder="jeans,shorts" onChange={handleCat}/> 
            </div>
            <div className="addProductItem">
                <label> Stock </label>
                <select name="inStock" onChange={handleChange}>
                    <option value="true"> Yes</option>
                    <option value="false"> No </option>
                </select>
            </div>
            <button onClick={handleClick} className="addProductButton"> Create</button>

        </form>
    </div>
  )
}
