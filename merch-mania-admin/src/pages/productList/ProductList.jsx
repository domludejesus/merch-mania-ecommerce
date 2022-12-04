import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
//import { productRows } from '../../dummyData.js'
import { Link } from "react-router-dom"
import { useEffect, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
    // const [data,setData] = useState(productRows);  not needed anymore 
    const dispatch = useDispatch(); 
    const products = useSelector((state) => state.product.products); 

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch]); 

    const handleDelete = (id) => {
        // setData(data.filter(item => item.id !== id)) //matches id for delete old 
        deleteProduct(id, dispatch)
    }; 

    const columns = [
        { field: '_id', headerName: 'ID', width: 240 },
        {
            field: 'product', headerName: 'Product', width: 220, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'inStock', headerName: 'Stock', width: 160 },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit"> Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
                    </>
                )
            }
        },
    ];
  return (
    <div className="productList">
          <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
    </div>
  )
}
