import React, {useState} from 'react';
import {Box, Stack, Chip} from '@mui/material';


const Tier = () => {
  const [isActiveTier1, setIsActiveTier1] = useState(false)
  const [isActiveTier2, setIsActiveTier2] = useState(false)
  const [isActiveTier3, setIsActiveTier3] = useState(false)
  const [isActiveTier4, setIsActiveTier4] = useState(false)
  const [isActiveTier5, setIsActiveTier5] = useState(false)

  const handleClick1 = () => {
    setIsActiveTier1(current => !current);
    console.info('You clicked the Chip.');
  };
  const handleClick2 = () => {
    setIsActiveTier2(current => !current);
    console.info('You clicked the Chip.');
  };
  const handleClick3 = () => {
    setIsActiveTier3(current => !current);
    console.info('You clicked the Chip.');
  };
  const handleClick4 = () => {
    setIsActiveTier4(current => !current);
    console.info('You clicked the Chip.');
  };
  const handleClick5 = () => {
    setIsActiveTier5(current => !current);
    console.info('You clicked the Chip.');
  };

  return (
    <Box>
    <Stack sx={{p:1, fontWeight: 'bold', color: 'GrayText'}}>Select Tier</Stack>
    <Stack direction="row" spacing={10}>
          <Chip sx= {{fontWeight: 'bold', color: 'GrayText'}} label="Tier 1" onClick={handleClick1} style={{
          backgroundColor: isActiveTier1 ? 'yellow' : '',
        }} />
          <Chip sx= {{fontWeight: 'bold', color: 'GrayText'}} label="Tier 2" onClick={handleClick2} style={{
          backgroundColor: isActiveTier2 ? 'yellow' : '',
        }}/>
          <Chip sx= {{fontWeight: 'bold', color: 'GrayText'}} label="Tier 3" onClick={handleClick3} style={{
          backgroundColor: isActiveTier3 ? 'yellow' : '',
        }}/>
          <Chip sx= {{fontWeight: 'bold', color: 'GrayText'}} label="Tier 4" onClick={handleClick4} style={{
          backgroundColor: isActiveTier4 ? 'yellow' : '',
        }}/>
          <Chip sx= {{fontWeight: 'bold', color: 'GrayText'}} label="Tier 5" onClick={handleClick5} style={{
          backgroundColor: isActiveTier5 ? 'yellow' : '',
        }}/>
          
        </Stack>


    </Box>
  )
}

export default Tier