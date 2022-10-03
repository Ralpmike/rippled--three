import React from "react";
import { Grid, Stack, Typography, TextField, Button, Box} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom'
import logo from './images/logo.png';
import books from './images/books.png';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';

const SentACode = () => {
    
    return (
        <>
        <Grid container md={12}>
            <Grid items md={6}>
                <Stack display="flex" flexDirection="row" justifyContent="space-around" sx={{marginTop:"20px"}} >
                    <img style={{width:"100px"}} src={logo} alt="" />
                    <Typography sx={{color: "rgba(42, 86, 159, 0.95)",
                     font:"Jacques Pro", Weight:"400" }}>Remember Password? <Link to="/loginpage"><b> Login</b></Link></Typography>
                </Stack>
                <Stack marginLeft="100px" sx={{marginTop:"25px"}}>
                    <h2 style={{color:"gray"}}>We Sent You A Code!</h2>
                    <Typography  sx={{color: "#6C6C6C", width:"55%"}}>Please type the code sent to your Email
                    within the next 10 minutes.</Typography> 
                    <TextField sx={{width:"60%", textAlign:"center", 
                marginTop:"30px", background: "#FFFFFF", border:"0px", boxShadow:"1px 3px 3px 1px gray"}}
                    id="input-with-icon-textfield"
                    defaultValue="Type Code"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <EditNotificationsIcon style={{color:"#F06277"}} />
                        </InputAdornment>
                    ),
                    }}
                    variant="filled"
                    />

                    
                    <Stack sx={{textAlign:"center", width:"50%", marginTop:"30px"}}>
                    <Button sx={{background: "linear-gradient(271.49deg, #F06277 5.92%, #FFB1BD 105.59%)", marginTop:"20px", borderRadius: "40px", color:"white"}}>Done</Button>
                    <Typography sx={{color: "rgba(42, 86, 159, 0.95)", marginTop:"10px"}}>Didn’t get code? <Link>Resend</Link></Typography>
                    </Stack>

                </Stack>
            </Grid>
            <Grid items md={6}>
                {/* <Card sx={{height:"100vh"}}> */}
                <Box sx={{marginTop:"30px"}}>
                <Stack sx={{textAlign:"center"}}>
                <img sx={{width:"80%"}} src={books} alt="" />
                </Stack>
                </Box>
            </Grid>

        </Grid>
        </>
    );
}
 
export default SentACode;