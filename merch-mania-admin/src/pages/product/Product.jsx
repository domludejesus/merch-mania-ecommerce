import { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import "./product.css"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons"

export default function Product() {
  return (
    <div className ="product">
        <div className="productTitleContainer">
            <h1 className="productTitle"> Product</h1>
            <Link to="/newproduct">
            <button className="productAddButton"> Create </button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight"> 
                <div className="productInfoTop">
                    <img src="https://images.unsplash.com/photo-1666153184621-bc6445e3568d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="" className="productInfoImg" />
                    <span className="productName"> Graphic Design Tee </span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey"> id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey"> sales:</span>
                        <span className="productInfoValue">4123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey"> active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey"> in stock:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                </div>
            </div>
        </div>
          <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label> Product Name</label>
                    <input type="text"  placeholder="Graphic Design Tee"/>
                    <label> In Stock</label>
                    <select name="inStock" id="idStock"> 
                        <option value="yes"> Yes</option>
                        <option value="no"> No</option>
                    </select>
                      <label> Active</label>
                      <select name="active" id="active">
                          <option value="yes"> Yes</option>
                          <option value="no"> No</option>
                      </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                          <img src="https://images.unsplash.com/photo-1666153184621-bc6445e3568d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="" className="productUploadImg" />
                          <label for="file">
                            <Publish />
                          </label>
                          <input type="file" id="file" style={{display: "none"}} />
                    </div>
                    <button className="productButton"> Update</button>
                </div>
            </form>
          </div>
    </div>
  )
}
