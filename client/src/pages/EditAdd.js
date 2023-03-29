import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

function EditAdd() {
  let { id } = useParams();

  const isAddMode = !id;

  const [listOfInterfaces, setListOfInterfaces] = useState([]);
  const [listOfFormFactors, setListOfFormFactors] = useState([]);
  const [driveObject, setDriveObject] = useState({});

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

  isAddMode
    ? (initialValues = {
        brand: "",
        model: "",
        rotation_speed: "",
        price: "",
        InterfaceId: "",
        FormFactorId: "",
      })
    : (initialValues = {
        brand: driveObject.brand,
        model: driveObject.model,
        rotation_speed: driveObject.rotation_speed,
        price: driveObject.price,
        InterfaceId: driveObject.InterfaceId,
        FormFactorId: driveObject.FormFactorId,
      });

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

  const onSubmit = (data) => (isAddMode ? addDrive(data) : editDrive(data));

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <ErrorMessage name="brand" component="div" />
          <label>Brand: </label>
          <Field
            id="inputEditAdd"
            name="brand"
            placehold="(Ex. Samsung)"
            autocomplete="off"
          />
          <ErrorMessage name="model" component="div" />
          <label>Model: </label>
          <Field
            id="inputEditAdd"
            name="model"
            placehold="(Ex. EVO 970 PRO)"
            autocomplete="off"
          />
          <ErrorMessage name="rotation_speed" component="div" />
          <label>Rotation Speed: </label>
          <Field id="inputEditAdd" name="rotation_speed" autocomplete="off" />
          <ErrorMessage name="price" component="div" />
          <label>Price: </label>
          <Field id="inputEditAdd" name="price" autocomplete="off" />

          <label>Interface: </label>
          <Field id="inputEditAdd" as="select" name="InterfaceId">
            <option disabled value="">
              Pick a interface
            </option>
            {listOfInterfaces.map((value, key) => {
              return <option value={value.id}>{value.name} </option>;
            })}
          </Field>

          <label>Form Factor: </label>
          <Field id="inputEditAdd" as="select" name="FormFactorId">
            <option disabled value="">
              Pick a form factor
            </option>
            {listOfFormFactors.map((value, key) => {
              return <option value={value.id}>{value.name} </option>;
            })}
          </Field>
          <button type="submit"> Add Drive</button>
        </Form>
      </Formik>
    </div>
  );
}

export default EditAdd;
