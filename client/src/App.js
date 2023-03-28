import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddDrive from "./pages/AddDrive";
import Drive from "./pages/Drive";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/adddrive"> Add A Drive</Link>
        <Link to="/"> Home Page</Link>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/adddrive" exact element={<AddDrive />} />
          <Route path="/drive/:id" exact element={<Drive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
