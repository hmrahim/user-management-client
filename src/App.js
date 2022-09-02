import logo from "./logo.svg";
import "./App.css";
import CreateUser from "./Components/CreateUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Routes,Route} from "react-router-dom"

import Nav from "./Components/Nav";
import AllUser from "./Components/AllUser";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <div className=" min-h-screen  md:px-0 bg-base-100">
     <Nav/>
      <Routes>
        <Route path="/" element={<AllUser/>} />
        <Route path="/alluser" element={<AllUser/>}/>
        <Route path="/createuser" element={<CreateUser/>}/>
        <Route path="/edituser/:id" element={<EditUser/>}/>
      </Routes>

    

      <ToastContainer />
    </div>
  );
}

export default App;
