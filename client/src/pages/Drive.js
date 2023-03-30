import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Drive() {
  let { id } = useParams();
  const [driveObject, setDriveObject] = useState({});
  const [interfaceObject, setInterface] = useState({});
  const [formfactorObject, setFormFactor] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/drives/${id}`)
      .then((response) => {
        setDriveObject(response.data);
        setInterface(response.data.Interface);
        setFormFactor(response.data.FormFactor);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="drive">
        <div className="brand"> {driveObject.name} </div>
        <div className="model"> {driveObject.model} </div>
        <div className="type"> {driveObject.type} </div>
        <div className="rotation_speed"> {driveObject.rotation_speed} </div>
        <div className="price"> {driveObject.price} </div>
        <div className="interface"> {interfaceObject.name} </div>
        <div className="formfactor"> {formfactorObject.name} </div>
      </div>
    </div>
    // <li>
    //   <Link to={`/editadd/${id}`}>Update</Link>
    // </li>
  );
}

export default Drive;
