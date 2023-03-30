import React from "react";
import EnhancedTableHead from "../components/Table";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div style={{ height: "calc(100vh - 20px)", overflowY: "scroll" }}>
        <EnhancedTableHead />
      </div>
      <div style={{ height: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
