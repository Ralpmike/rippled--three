import React from "react";
import { Grid, Stack, Typography, TextField, Button, Box, Card} from "@mui/material";
import {Link} from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import logo from './images/logo.png';
import books from './images/books.png';

const ForGotPwd = () => {
    
    return (
        <>
        <Grid container md={12}>
            <Grid items md={6}>
                <Stack display="flex" flexDirection="row" justifyContent="space-around" sx={{marginTop:"20px"}} >
                    <img style={{width:"100px"}} src={logo} />
                    <Typography sx={{color: "rgba(42, 86, 159, 0.95)",
                     font:"Jacques Pro", Weight:"400" }}>Remember Password? <Link to="/loginpage" textDecoration="none">Login</Link></Typography>
                </Stack>
                <Stack marginLeft="100px" sx={{marginTop:"25px"}}>
                    <h2 style={{color:"gray"}}>Forgot Password?</h2>
                    <Typography  sx={{color: "#6C6C6C", width:"55%", marginTop:"15px"}}>Please type your RipplED Email address
                    below to reset your password. Thank you.</Typography> 
                    

                    <TextField sx={{width:"60%", textAlign:"center", 
                marginTop:"30px", background: "#FFFFFF", border:"0px", boxShadow:"1px 3px 3px 1px gray"}}
                    id="input-with-icon-textfield"
                    // label="Outlined"
                    defaultValue="Email Address"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <EmailIcon style={{color:"#F06277"}} />
                        </InputAdornment>
                    ),
                    }}
                    variant="filled"
                    />

                    <Stack sx={{textAlign:"center", width:"50%", marginTop:"40px"}}>
                    <Button sx={{background: "linear-gradient(271.49deg, #F06277 5.92%, #FFB1BD 105.59%)", marginTop:"20px", borderRadius: "40px", color:"white"}}> <Link to="/sentacode" sx={{textDecoration:"none"}}>Reset Password</Link></Button>
                    </Stack>

                </Stack>
            </Grid>
            <Grid items md={6}>
                {/* <Card sx={{height:"100vh"}}> */}
                <Box sx={{marginTop:"30px"}}>
                <Stack>
                <img  src={books} />
                </Stack>
                </Box>
            </Grid>

        </Grid>
        </>
    );
}
 
export default ForGotPwd;