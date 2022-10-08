import { Box, Typography, TextField } from "@mui/material";
import React from "react";

const Rates = () => {
  return (
    <Box>
      <Typography sx={{ ml: "610px", fontWeight: "bold", color: 'GrayText' }}>
        ROI at Current Rates
      </Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{
          width: 770,
          color: "rgb(60, 50, 30)",
          border: "1px solid",
          borderRadius: 3,
          mt: 1,
        }}/>
        <Typography sx={{ ml: "540px", fontWeight: "bold", color: 'GrayText'}}>
        ~0.000 CAKE + 0.000000 DON
      </Typography>
    </Box>
  );
};

export default Rates;
