import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddDrive() {
  const [listOfInterfaces, setListOfInterfaces] = useState([]);
  const [listOfFormFactors, setListOfFormFactors] = useState([]);

  const initialValues = {
    brand: "",
    model: "",
    rotation_speed: "",
    price: "",
    InterfaceId: "",
    FormFactorId: "",
  };

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

  useEffect(() => {
    axios.get("http://localhost:3001/interfaces").then((response) => {
      setListOfInterfaces(response.data);
    });
    axios.get("http://localhost:3001/formfactors").then((response) => {
      setListOfFormFactors(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    //console.log(data);
    axios.post("http://localhost:3001/drives", data);
    // .then((response) => {
    //   console.log(response.data);
    // });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <ErrorMessage name="brand" component="div" />
          <label>Brand: </label>
          <Field
            id="inputAddDrive"
            name="brand"
            placehold="(Ex. Samsung)"
            autocomplete="off"
          />
          <ErrorMessage name="model" component="div" />
          <label>Model: </label>
          <Field
            id="inputAddDrive"
            name="model"
            placehold="(Ex. EVO 970 PRO)"
            autocomplete="off"
          />
          <ErrorMessage name="rotation_speed" component="div" />
          <label>Rotation Speed: </label>
          <Field id="inputAddDrive" name="rotation_speed" autocomplete="off" />
          <ErrorMessage name="price" component="div" />
          <label>Price: </label>
          <Field id="inputAddDrive" name="price" autocomplete="off" />
          <ErrorMessage name="interface" component="div" />
          <label>Interface: </label>
          <Field id="inputAddDrive" as="select" name="InterfaceId">
            <option disabled value="">
              Pick a interface
            </option>
            {listOfInterfaces.map((value, key) => {
              return <option value={value.id}>{value.name} </option>;
            })}
          </Field>

          <label>Form Factor: </label>
          <Field id="inputAddDrive" as="select" name="FormFactorId">
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

export default AddDrive;
