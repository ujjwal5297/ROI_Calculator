import React, { useState } from "react";
import { Chip, Stack } from "@mui/material";

const DirectionStack = () => {
  const [isActive1day, setIsActive1day] = useState(false);

  const [isActive7days, setIsActive7days] = useState(false);

  const [isActive30days, setIsActive30days] = useState(false);

  const [isActive1year, setIsActive1year] = useState(false);

  const [isActive5year, setIsActive5year] = useState(false);

  const handleClick1day = () => {
    setIsActive1day((current) => !current);
  };

  const handleClick7days = () => {
    setIsActive7days((current) => !current);
  };
  const handleClick30days = () => {
    setIsActive30days((current) => !current);
  };
  const handleClick1year = () => {
    setIsActive1year((current) => !current);
  };
  const handleClick5year = () => {
    setIsActive5year((current) => !current);
  };

  return (
    <Stack direction="row" spacing={10}>
      <Chip
        sx={{ fontWeight: "bold", color: "GrayText" }}
        label="1 Day"
        onClick={handleClick1day}
        style={{
          backgroundColor: isActive1day ? "yellow" : "",
        }}
      />
      <Chip
        sx={{ fontWeight: "bold", color: "GrayText" }}
        label="7 Days"
        onClick={handleClick7days}
        style={{
          backgroundColor: isActive7days ? "yellow" : "",
        }}
      />
      <Chip
        sx={{ fontWeight: "bold", color: "GrayText" }}
        label="30 Days"
        onClick={handleClick30days}
        style={{
          backgroundColor: isActive30days ? "yellow" : "",
        }}
      />
      <Chip
        sx={{ fontWeight: "bold", color: "GrayText" }}
        label="1 Year"
        onClick={handleClick1year}
        style={{
          backgroundColor: isActive1year ? "yellow" : "",
        }}
      />
      <Chip
        sx={{ fontWeight: "bold", color: "GrayText" }}
        label="5 Year"
        onClick={handleClick5year}
        style={{
          backgroundColor: isActive5year ? "yellow" : "",
        }}
      />
    </Stack>
  );
};

export default DirectionStack;
