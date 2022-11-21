import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from '../../dummyData.js'
import { Link } from "react-router-dom"
import { useState } from "react"

export default function ProductList() {
    const [data,setData] = useState(productRows); 

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id)) //matches id for delete 
    }; 

    const columns = [
        { field: 'id', headerName: 'ID', width: 30 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 160 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
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
                        <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];
  return (
    <div className="productList">
          <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
    </div>
  )
}
