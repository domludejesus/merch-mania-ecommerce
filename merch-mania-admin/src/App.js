import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newPage/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin; 
  return (
    <Router>
      <Routes>
        <Route path="/login" element={User ? <Navigate to="/" /> : <Login />} />
      </Routes>
          {admin && (
            <>
              <Topbar/>
              <div className="container">
                  <Sidebar />
                  <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:productsId" element={<Product />} />
                    <Route path="/newproduct" element={<NewProduct />} />
                  
                  </Routes>      
              </div> 
           </>
          )}   
    </Router>
  );
}

export default App;
