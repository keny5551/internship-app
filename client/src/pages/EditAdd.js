import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import Box from "@mui/material/Box";
import { TextField, Button, MenuItem } from "@mui/material";

function EditAdd() {
  let { id } = useParams();

  const isAddMode = !id;

  const [listOfInterfaces, setListOfInterfaces] = useState([]);
  const [listOfFormFactors, setListOfFormFactors] = useState([]);
  const [driveObject, setDriveObject] = useState({});

  const formik = useFormik({
    initialValues: {
      brand: driveObject.brand,
      model: driveObject.model,
      rotation_speed: driveObject.rotation_speed,
      price: driveObject.price,
      InterfaceId: driveObject.Interface,
      FormFactorId: driveObject.FormFactorId,
    },
    enableReinitialize: true,
    onSubmit: (data) => {
      isAddMode ? addDrive(data) : editDrive(data);
    },
    //isAddMode ? addDrive(data) : editDrive(data)
    //validationSchema: { validationSchema },
  });
  let initialValues;

  useEffect(() => {
    axios.get("http://localhost:3001/interfaces").then((response) => {
      setListOfInterfaces(response.data);
    });
    axios.get("http://localhost:3001/formfactors").then((response) => {
      setListOfFormFactors(response.data);
    });
    if (isAddMode == false)
      axios.get(`http://localhost:3001/drives/byId/${id}`).then((response) => {
        setDriveObject(response.data);
      });
  }, []);

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required(),
    model: Yup.string().required(),
    rotation_speed: Yup.string().nullable(),
    price: Yup.number()
      .positive()
      .required(),
    InterfaceId: Yup.number()
      .integer()
      .required(),
    FormFactorId: Yup.number()
      .integer()
      .required(),
  });

  function addDrive(data) {
    axios.post("http://localhost:3001/drives", data);
    // .then((response) => {
    //   console.log(response.data);
    // });
  }

  function editDrive(data) {
    axios.put(`http://localhost:3001/drives/update/${id}`, data);
  }

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              id="brand"
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              label="Brand"
            />
            <TextField
              id="model"
              name="model"
              value={formik.values.model}
              onChange={formik.handleChange}
              label="Model"
            />
            <TextField
              id="rotation_speed"
              name="rotation_speed"
              value={formik.values.rotation_speed}
              onChange={formik.handleChange}
              label="Rotation speed"
            />
            <TextField
              id="price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              label="Price"
            />
          </div>
          <TextField
            id="interface"
            name="InterfaceId"
            select
            value={formik.values.InterfaceId}
            onChange={formik.handleChange}
            label="Select interface"
            helperText="Please select disk interface"
          >
            {listOfInterfaces.map((option) => (
              <MenuItem value={option.id}>{option.name}</MenuItem>
            ))}
          </TextField>
          <TextField
            id="formfactor"
            name="FormFactorId"
            value={formik.values.FormFactorId}
            onChange={formik.handleChange}
            select
            label="Select form factor"
            helperText="Please select form factor"
          >
            {listOfFormFactors.map((option) => (
              <MenuItem value={option.id}>{option.name}</MenuItem>
            ))}
          </TextField>
          <div>
            <Button color="success" variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Box>
  );
}

export default EditAdd;
