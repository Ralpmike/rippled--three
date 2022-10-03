import { Grid, Stack, Typography, TextField, Button, Box, Card } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import GoogleIcon from '@mui/icons-material/Google';
import logo from './images/logo.png';
import girl from './images/girl.png';
import google from './images/google.png';
import BoltIcon from '@mui/icons-material/Bolt';
import SelectSmall from './select';
import {Link} from "react-router-dom";



const SignUpPage = () => {
    return ( 
        <>
        <Grid container md={12}>
            <Grid items md={6}>
                <Stack display="flex" flexDirection="row" justifyContent="space-around" sx={{marginTop:"15px"}}>
                <img style={{width:"100px"}} src={logo} />
                    <Typography sx={{color: "rgba(42, 86, 159, 0.95)",
                     font:"Jacques Pro", Weight:"400" }}>Already Have An Account? <Link to="/loginpage"><b>Login</b></Link></Typography>
                </Stack>
                <Stack marginLeft="100px">
                    <Typography  sx={{marginTop:"25px", color: "#6C6C6C"}}>Get Started With RipplED</Typography> 
                    <TextField sx={{width:"60%", marginTop:"30px", background: "#EEF4FF", boxShadow:"1px 3px 3px 1px gray"}}
                    // id="input-with-icon-textfield"
                    
                    variant="filled"
                    label="Full N|"
                    // defaultValue="Full N|"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle style={{color:"#F06277"}} />
                        </InputAdornment>
                    ),
                    }}
                    />
                    {/* <TextField
                    sx={{width:"50%", marginTop:"30px", 
                    background: "#EEF4FF", 
                    boxShadow:"1px 3px 3px 1px gray"}}
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        defaultValue="Full N|"
                        variant="filled"
                    /> */}

                <TextField sx={{width:"60%", textAlign:"center", 
                marginTop:"30px", background: "#FFFFFF", border:"0px", boxShadow:"1px 3px 3px 1px gray"}}
                    id="input-with-icon-textfield"
                    label="Email Address"
                    // defaultValue="Email Address"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <EmailIcon style={{color:"#F06277"}} />
                        </InputAdornment>
                    ),
                    }}
                    variant="filled"
                    />

                <TextField sx={{width:"60%", textAlign:"center", 
                marginTop:"30px", boxShadow:"1px 3px 3px 1px gray"}}
                    id="input-with-icon-textfield"
                    label="Password"
                    // defaultValue="Password"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <LockPersonIcon style={{color:"#F06277"}} />
                        </InputAdornment>
                    ),
                    }}
                    variant="filled"
                    />

                {/* <TextField sx={{width:"50%", 
                textAlign:"center", 
                marginTop:"30px", 
                borderRadius:"20%"}}
                    id="input-with-icon-textfield"
                    // label="Outlined"
                    defaultValue="Sign Up As"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                        <LoginIcon />
                        </InputAdornment>
                    ),
                }}
                    variant="outlined"
                    />  */}
                <SelectSmall />


                    <Typography sx={{marginTop:"20px"}}> <small>
                        By continuing you indicate that you read and agreed to the Terms of Use</small>
                    </Typography>

                    <Stack sx={{textAlign:"center", width:"60%"}}>
                    <Button sx={{background: "linear-gradient(271.49deg, #F06277 5.92%, #FFB1BD 105.59%)", marginTop:"10px", height:"10vh", borderRadius:"10px"}}>Sign Up</Button>
                    <Typography sx={{marginTop:"5px"}}>....... Or .......</Typography>
                    <Button  sx={{background:"linear-gradient( #27292D 100%, #FFFFFF 100%)", color:"white", marginTop:"15px", height:"10vh", borderRadius:"10px"}}><img src={google} alt='' width={15} height={15} />Sign Up With Google</Button>
                    </Stack>

                </Stack>
            </Grid>
            <Grid items md={6}>
                <Stack>
                <img style={{width:"90%"}} src={girl} />
                </Stack>
                
                <Button startIcon={<BoltIcon  style={{borderRadius: "10px", backgroundColor:"gray"}} />} sx={{background:"linear-gradient(#2A569F  100%, #2A569F 100%)", borderRadius: "5px", color:"white", marginTop:"35px", marginLeft:"90px"}} >We Are Here For You</Button>
                <Typography width="50%" sx={{marginLeft:"80px", color: "#6E7A87", textAlign: "center", fontFamily: 'Poppins'}}> Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</Typography>
            </Grid>

        </Grid>
        </>
    );
}
 
export default SignUpPage;