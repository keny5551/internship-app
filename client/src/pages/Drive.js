import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Drive() {
  let { id } = useParams();
  const [driveObject, setDriveObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/drives/byId/${id}`).then((response) => {
      setDriveObject(response.data);
    });
  });
  return (
    <div>
      <div className="drive">
        <div className="brand"> {driveObject.brand} </div>
        <div className="model"> {driveObject.model} </div>
        <div className="rotation_speed"> {driveObject.rotation_speed} </div>
        <div className="price"> {driveObject.price} </div>
      </div>
    </div>
  );
}

export default Drive;
