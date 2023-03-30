import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditAdd from "./pages/EditAdd";
import Drive from "./pages/Drive";
import DrawerAppBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editadd" element={<EditAdd />} />
          <Route path="/editadd/:id" element={<EditAdd />} />
          <Route path="/drive/:id" element={<Drive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
