import * as React from 'react';
// import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function LoadingButtonsTransition() {
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
      setLoading(true);
    }
  
    return (
      <Box>
        <FormControlLabel
          sx={{
            display: 'block',
          }}
          control={
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Remember me"
        />
        </Box>
         );
}