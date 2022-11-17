import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
          <Sidebar/>
      </div>
    </div>
  );
}

export default App;
