import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './bootstrap.min.css';
import Navbar from "./Layout/Navbar";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./Employee/AddEmployee";
import ViewEmployee from "./Employee/ViewEmployee";
import UpdateEmployee from "./Employee/UpdateEmployee";

function App() {
  return (
    <div className="App">

    <Router>
    <Navbar />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/adduser" element={<AddEmployee />} />
      <Route exact path="/updateemployee/:id" element={<UpdateEmployee />} />
      <Route exact path="/viewemployee/:id" element={<ViewEmployee />} />
    </Routes>
    </Router>

    </div>
  );
}

export default App;
