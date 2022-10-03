import React from "react";
import { Grid, Stack, Typography, TextField, Button, Box, Card } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import logo from './images/logo.png';
import books from './images/books.png';
import LoadingButtonsTransition from './remindme';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import {Link} from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";


const SignInPage = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <>
        <Grid container md={12}>
            <Grid items md={6}>
                <Stack display="flex" flexDirection="row" justifyContent="space-around" sx={{marginTop:"10px"}} >
                    <img style={{width:"100px"}} src={logo} />
                    <Typography sx={{color: "rgba(42, 86, 159, 0.95)",
                     font:"Jacques Pro", Weight:"400" }}>Don't Have An Account? <Link to="/signup"><b>Sign Up</b></Link></Typography>
                </Stack>
                <Stack marginLeft="100px" sx={{marginTop:"10px"}}>
                    <h2 style={{color:"gray"}}>Welcome Back!</h2>
                    <Typography  sx={{color: "#6C6C6C", width:"55%"}}>Please provide your details below to login to RipplED. Thank you.</Typography> 
                    

                <TextField sx={{width:"60%", textAlign:"center", 
                marginTop:"30px", background: "#FFFFFF", boxShadow:"1px 3px 3px 1px gray"}}
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


<FormControl sx={{ width: '60%', marginTop:"30px", boxShadow:"1px 3px 3px 1px gray"}} >
          <InputLabel>Password</InputLabel>
          <OutlinedInput
          // defaultValue="Password"
            id="outlined-adornment-password"
            placeholder="password"
            variant="filled"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <LockPersonIcon style={{color:"#F06277"}} />
                    </InputAdornment>
                ),
            }}
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

                {/* <TextField sx={{width:"60%", textAlign:"center", 
                marginTop:"30px", borderRadius:"20%"}}
                    id="input-with-icon-textfield"
                    // label="Outlined"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <LockPersonIcon style={{color:"#F06277"}} />
                        </InputAdornment>
                    ),
                    }}
                    variant="outlined"
                    /> */}
                    <Stack display="flex" flexDirection="row" justifyContent="space-between" sx={{marginTop:"15px", width:"60%"}}>
                    <LoadingButtonsTransition />
                    <Link to="/forgotpwd" sx={{textDecoration:"none"}}> Forgot Password?</Link>
                    </Stack>

                    <Stack sx={{textAlign:"center", width:"60%", marginTop:"15px"}}>
                    <Button sx={{background: "linear-gradient(271.49deg, #F06277 5.92%, #FFB1BD 105.59%)", marginTop:"10px", height:"10vh", borderRadius:"10px"}}>Sign Up</Button>

                    <Stack sx={{marginTop:"10px", textAlign:"center" , display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                    <Typography sx={{marginTop:"10px", textAlign:"center" , display:"flex", flexDirection:"column", justifyContent:"space-between"}}>.......</Typography>
                    <Typography sx={{marginTop:"10px", textAlign:"center" , display:"flex", flexDirection:"column", justifyContent:"space-between"}}>Or </Typography>
                    <Typography sx={{marginTop:"10px", textAlign:"center" , display:"flex", flexDirection:"column", justifyContent:"space-between"}}>....... </Typography>
                    </Stack>

                    <Button  sx={{background:"linear-gradient( #27292D 100%, #FFFFFF 100%)", color:"white", marginTop:"10px", height:"10vh", borderRadius:"10px"}}>Sign Up With Google</Button>
                    </Stack>

                </Stack>
            </Grid>
            <Grid items md={6}>
                {/* <Card sx={{height:"100vh"}}> */}
                <Box>
                <Stack>
                <img style={{width:"90%", marginTop:"20px"}} src={books} />
                </Stack>
                
                <Button sx={{background:"linear-gradient(#2A569F  100%, #2A569F 100%)", borderRadius: "1px", color:"white", marginTop:"20px", marginLeft:"80px", borderRadius: "5px"}} > 👍  Top Notch Stock Resources</Button>
                <Typography width="50%" sx={{marginLeft:"80px", color: "#6E7A87", textAlign: "center", fontFamily: 'Poppins'}}> Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</Typography>
                </Box>
                {/* </Card> */}
            </Grid>

        </Grid>
        </>
    );
}
 
export default SignInPage;