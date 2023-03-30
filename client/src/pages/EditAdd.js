import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import { TextField, Button, MenuItem, InputAdornment } from "@mui/material";
import Footer from "../components/Footer";
const Swal = require("sweetalert2");

function EditAdd() {
  let { id } = useParams();

  const isAddMode = !id;
  const navigate = useNavigate();
  const [listOfInterfaces, setListOfInterfaces] = useState([]);
  const [listOfFormFactors, setListOfFormFactors] = useState([]);
  const [driveObject, setDriveObject] = useState({});

  const formik = useFormik({
    initialValues: {
      brand: driveObject.brand,
      model: driveObject.model,
      type: driveObject.type,
      rotation_speed: driveObject.rotation_speed,
      price: driveObject.price,
      InterfaceId:
        driveObject.InterfaceId !== undefined ? driveObject.InterfaceId : "1",
      FormFactorId:
        driveObject.FormFactorId !== undefined ? driveObject.FormFactorId : "1",
    },

    enableReinitialize: true,

    onSubmit: (data) => {
      isAddMode ? addDrive(data) : editDrive(data);
    },
    //isAddMode ? addDrive(data) : editDrive(data)
    // validationSchema: validationSchema,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/interfaces")
      .then((response) => {
        setListOfInterfaces(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/api/formfactors")
      .then((response) => {
        setListOfFormFactors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (isAddMode === false)
      axios
        .get(`http://localhost:3001/api/drives/${id}`)
        .then((response) => {
          setDriveObject(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  function addDrive(data) {
    axios
      .post("http://localhost:3001/api/drives/", data)
      .then(() => {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Drive has been added",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please enter the data again.",
        });
      });

    // .then((response) => {
    //   console.log(response.data);
    // });
  }

  function editDrive(data) {
    axios
      .put(`http://localhost:3001/api/drives/${id}`, data)
      .then(() => {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Drive has been edited",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please enter the data again.",
        });
      });
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
              focused
              required
              id="brand"
              name="brand"
              value={formik.values.brand}
              onChange={formik.handleChange}
              label="Brand"
            />
            <TextField
              focused
              required
              id="model"
              name="model"
              value={formik.values.model}
              onChange={formik.handleChange}
              label="Model"
            />
            <TextField
              focused
              required
              id="type"
              name="type"
              value={formik.values.type}
              onChange={formik.handleChange}
              label="Type"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <TextField
              focused
              id="rotation_speed"
              name="rotation_speed"
              type="number"
              label="Rotation speed"
              value={formik.values.rotation_speed}
              onChange={formik.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">RPM</InputAdornment>
                ),

                InputLabelProps: { shrink: true },
              }}
            />
            <TextField
              required
              focused
              type="number"
              id="price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              label="Price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">€</InputAdornment>
                ),
              }}
            />
          </div>
          <TextField
            focused
            required
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
            required
            focused
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
      <Footer />
    </Box>
  );
}

export default EditAdd;
