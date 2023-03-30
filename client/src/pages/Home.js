import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EnhancedTableHead from "../components/Table";

function Home() {
  return (
    <div>
      <EnhancedTableHead />
    </div>
  );
}

export default Home;
