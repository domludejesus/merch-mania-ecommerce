import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home"; 
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newPage/NewUser";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userID" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
