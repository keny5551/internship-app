import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DenseTable() {
  const [listOfDrives, setListOfDrives] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/drives/")
      .then((response) => {
        setListOfDrives(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Rotation Speed</TableCell>
            <TableCell align="right">Interface</TableCell>
            <TableCell align="right">Form Factor</TableCell>
            <TableCell align="right">Price (€)</TableCell>
            <TableCell size="small" align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listOfDrives.map((row) => (
            <TableRow
              key={row.brand}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.brand}
              </TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.rotation_speed}</TableCell>
              <TableCell align="right">{row.Interface.name}</TableCell>
              <TableCell align="right">{row.FormFactor.name}</TableCell>
              <TableCell align="right">{row.price} €</TableCell>
              <TableCell size="small" align="center">
                <IconButton
                  aria-label="edit"
                  size="small"
                  onClick={() => navigate(`/editadd/${row.id}`)}
                >
                  <BorderColorIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
