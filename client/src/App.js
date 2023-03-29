import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import EditAdd from "./pages/EditAdd";
import Drive from "./pages/Drive";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/editadd"> Add A Drive</Link>
        <Link to="/"> Home Page</Link>
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
