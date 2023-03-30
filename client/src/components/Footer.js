import { Paper, Box } from "@mui/material";
import { Container, Typography } from "@mui/material";
import * as React from "react";

export default function GuestFooter() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",

        width: "100%",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 1,
          }}
        >
          <Typography variant="caption" color="initial">
            Internship task, by Michał Jargiło
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
