import React, { Component } from "react";
import {Box, Typography} from '@mui/material';
import './App.css';
import Header from './components/Header';
import ToggleSwitch from "./components/ToggleSwitch";
import icon from './icon.png'
import Placeholder from "./components/Placeholder";
import TimeFrame from "./components/TimeFrame";
import SegmentedControl from './components/DirectionStack';
import DirectionStack from "./components/DirectionStack";
import AcceleratedApy from "./components/AcceleratedApy";
import Tier from "./components/Tier";
import Rates from "./components/Rates";
import Details from "./components/Details";
function App() {
  return (
    <Box>
      <Header/>
      <ToggleSwitch label="CAKE" />
      <Typography sx={{ml:93, mt: -2.5}}>USD
      <img src= {icon} alt= 'cake' style={{marginLeft: -200, marginTop: -10, position: 'relative', width: 20, height: 20}}/>
      </Typography>
      <Placeholder/>
      <TimeFrame/>
      <DirectionStack/>
      <AcceleratedApy/>
      <Tier/>
      <Rates/>
      <Details/>
      </Box>

  );
}

export default App;
