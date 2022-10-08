import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const AcceleratedApy = () => {
  return (
    <>
      <Box>
        <ToggleSwitch label=" " />
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: "-30px" }}>
          Enable Accelerated APY
        </Typography>
      </Box>
    </>
  );
};

export default AcceleratedApy;
