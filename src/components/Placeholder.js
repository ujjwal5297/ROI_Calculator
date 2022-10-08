import React from "react";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Placeholder = () => {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{
          width: 770,
          color: "rgb(60, 50, 30)",
          border: "1px solid",
          borderRadius: 3,
          mt: 1,
          fontWeight: "bold",
        }}
      />
      <Typography sx={{ ml: 85, color: "green", fontWeight: 'bold', color: 'GrayText' }}>~ CAKE 0.000</Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{
          width: 180,
          color: "rgb(60, 50, 30)",
          border: "1px solid",
          borderRadius: 3,
          fontWeight: "bold",
        }}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{
          width: 180,
          color: "rgb(60, 50, 30)",
          border: "1px solid",
          borderRadius: 3,
          ml: 2,
          fontWeight: "bold",
        }}
      />
    </Box>
  );
};

export default Placeholder;
