import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from '../../dummyData.js'
import { Link } from "react-router-dom"
import { useState } from "react"

export default function UserList() {
    const [data,setData] = useState(userRows); 

    const handleDelete = (id)=> {
      setData(data.filter(item=>item.id !== id)) //matches id for delete 
    }; 


  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
        return (
          <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt="" />
              {params.row.username}
          </div>
        ) 
    } },
    { field: 'email', headerName: 'Email', width: 160 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user"+params.row.id}>
              <button className="userListEdit"> Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    },
  ];

  return (
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
  );
}