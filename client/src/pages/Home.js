import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfDrives, setListOfDrives] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/drives").then((response) => {
      setListOfDrives(response.data);
    });
  }, []);

  return (
    <div>
      {listOfDrives.map((value, key) => {
        return (
          <div
            className="drive"
            onClick={() => {
              navigate(`/drive/${value.id}`);
            }}
          >
            <div className="brand">{value.brand} </div>
            <div className="model">{value.model} </div>
            <div className="rotation_speed">{value.rotation_speed} </div>
            <div className="price">{value.price} </div>
            <div className="interface">{value.Interface.name} </div>
            <div className="formfactor">{value.FormFactor.name} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
