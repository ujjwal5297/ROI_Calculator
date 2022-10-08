import React from 'react';
import { Typography, Box, Paper} from '@mui/material';

const Details = () => {
  return (
    <Box>
    <Typography sx={{fontWeight: 'bold', ml:40}}>Hide Details </Typography>
      <Typography sx={{fontWeight: 'bold', mt: 1}}>
        APY
      </Typography>
      <Typography sx={{fontWeight: 'bold', ml: 90, mt: -3, color: '#feb236'}}>
        9.0 %
      </Typography>
      <Paper sx={{fontWeight: 'bold', color: 'GrayText', ml: -2.5}}>
        <ul>
            <li>Calculated based on current rates</li>
            <li>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns</li>
        </ul>
      </Paper>
    </Box>
  )
}

export default Details