import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddDrive() {
  const initialValues = {
    brand: "",
    model: "",
    rotation_speed: "",
    price: "",
    FormFactorId: "",
    InterfaceId: "",
  };

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required(),
    model: Yup.string().required(),
    rotation_speed: Yup.string().nullable(),
    price: Yup.number().positive().required(),
    FormFactorId: Yup.number().integer().required(),
    InterfaceId: Yup.number().integer().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/drives", data);
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
          <label>Interface: </label>
          <Field id="inputAddDrive" name="InterfaceId" autocomplete="off" />
          <label>Form Factor: </label>
          <Field id="inputAddDrive" name="FormFactorId" autocomplete="off" />
          <button type="submit"> Add Drive</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddDrive;
