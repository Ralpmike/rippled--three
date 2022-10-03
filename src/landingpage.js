import { Stack, Box, Button, Typography, Grid, Card } from "@mui/material";
import logo from './images/logo.png';
import boys from './images/boys.png';
import Divider from '@mui/material/Divider';
import Video from './images/Video.png';
import reading from './images/reading.png';
import writting from './images/writting.png';
import round from './images/round.png';
import group from './images/group.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import thumb from './images/thumb.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Link} from "react-router-dom";





const LandingPage = () => {
    return (
        <>
        <Stack  container  sx={{display:"flex", flexDirection:"row", justifyContent:"space-around", zIndex:"5" }} >
            <Box marginTop={1}>
        <img sx={{marginTop:""}} src={logo} alt="" width={80} />
            </Box>
        <Box space={5}>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Curriculum</Button>
        <Button>Projects</Button>
        <Button>FAQs</Button>
        </Box>
        <Box>
            <Button> <Link to="/loginpage">Login</Link> </Button>
        </Box>
        </Stack>

        <Grid container md={12}  height="90vh" sx={{background: "linear-gradient(180deg, #FFFFFF 55.8%, #EEF4FF 92.7%, rgba(238, 244, 255, 0.5) 92.7%)"
}} >
            <Grid items md={6}>
            <Box sx={{marginTop:"100px", width:"75%", marginLeft:"100px"}}>
            <h3 style={{color:"gray"}}> <b> Receive the support you need
            to create a ripple effect in
            your school and community. </b></h3>
            <Typography>We empower high school students ages 10 - 18 to
            become innovators and global change agents.</Typography>
            <Box sx={{display:"flex", marginTop:"25px", flexDirection:"row", justifyContent:"space-around"}}>
            <h4 style={{marginTop:"30px", color:"gray"}}>Want to join our community?</h4> 
            <Button sx={{background: "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)",
            borderRadius: "50px", border:"1px solid red", width:"45%", height:"8vh", marginTop:"15px"}}>Learn How to work</Button>
            </Box>
            </Box>
        </Grid>
        <Grid items md-6>
        <Box sx={{marginTop:"20px"}}>
            <img src={boys} width={400} alt="" />
            </Box>
        </Grid>
        </Grid>

        <Grid sx={{display:"flex", px: 15, flexDirection:"row",  justifyContent:"space-around", textAlign:"center",  height:"20vh", color:"white", marginTop:{xs:"73px", md:"0px", backgroundImage:`url(${reading})`,backgroundRepeat:"no-repeat", background: "rgba(42, 86, 159, 0.95)"  }}}>
            <Grid items md={3} sx={{marginTop:"20px"}}>
                {/* <h1></h1> */}
                <Typography sx={{fontSize:"40px", fontFamily:"Jacques Pro"}}>200</Typography>
                <Typography sx={{fontFamily:"Jacques Pro", fontSize:"13px"}}>Students</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem  sx={{background:"white", height:"15vh", width:"2px", marginTop:"20px"}}/>
            <Grid items md={3} sx={{marginTop:"20px"}}>
                {/* <h1></h1> */}
                <Typography sx={{fontSize:"40px", fontFamily:"Jacques Pro"}}>200</Typography>
                <Typography sx={{fontFamily:"Jacques Pro", fontSize:"13px"}}>Students</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem  sx={{background:"white", height:"15vh", width:"2px", marginTop:"20px"}}/>
            <Grid items md={3} sx={{marginTop:"20px"}}>
                {/* <h1></h1> */}
                <Typography sx={{fontSize:"40px", fontFamily:"Jacques Pro"}}>200</Typography>
                <Typography sx={{fontFamily:"Jacques Pro", fontSize:"13px"}}>Students</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem  sx={{background:"white", height:"15vh", width:"2px", marginTop:"20px"}}/>
            <Grid items md={3} sx={{marginTop:"20px"}}>
                <Typography sx={{fontSize:"40px", fontFamily:"Jacques Pro"}}>8K</Typography>
                <Typography sx={{fontFamily:"Jacques Pro", fontSize:"13px"}}>Students</Typography>
            </Grid>
        </Grid>

        <Grid container md={12} width="75%" marginLeft="90px" marginTop="60px" textAlign="center">
            <Grid items md={6}>
            <img  src={Video} width={300} alt="" />
            </Grid>
            <Grid items md={6} width="90%">
            <h2>RipplED supports your learning
             and social impact Activities</h2>
            <Typography>Through its online platform, RipplED offer
            students in Secondary Schools the opportunity
            to access skill development opportunities,
            mentorship and tailored curriculum to enable
            them learn and accelerate their activities
            and become global change makers.</Typography>
            <Button sx={{background: "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)",
                borderRadius: "50px"}}>Join Our Community</Button>
            </Grid>
        </Grid>

        <Stack>
            <h2 style={{textAlign:"center"}}>
            View Our Project Categories
            </h2>
        </Stack>
        <Grid container md={12} space={3} >
            <Grid items md={3} sx={{fontFamily:"Jacques Pro", fontSize:"20px", lineHeight:"28px", color:"gray"}}>
                <h2>All SDGS</h2>
                <Typography >No Poverty</Typography>
                <Typography sx={{marginTop:"30px"}}>Zero Hunger</Typography>
                <Typography sx={{marginTop:"30px"}}>Good health & well-being</Typography>
                <Typography sx={{marginTop:"30px"}}>Quality Education</Typography>
                <Typography sx={{marginTop:"30px"}}>Genger Equality</Typography>
                <Typography sx={{marginTop:"30px"}}>Affordable & clean energy</Typography>
                <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",borderRadius:"15px", marginTop:"30%"}}>Show all</Button>
            </Grid>
            {/* first card */}
            <Grid items md={3}>
                <Box m={2} >
                <Card sx={{boxShadow:"1px 3px 3px 1px gray"}}>
                    <img src={writting} alt="" width="100%" />
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', mx: -1, my: 1 }}>
                    <Button sx={{background: "#6E7A87", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography>30th June 2022</Typography>
                    </Box>
                    <p style={{marginLeft:"20px", marginTop:"20px"}}>Masters In English | How To English | How Toiik</p>
                    <p style={{marginLeft:"20px"}} p={1}>Become A Good English Speaker how to inno</p>
                    <p style={{marginLeft:"20px"}} p={1}>Become A Good English Speaker how towklljk</p>
                    <p style={{marginLeft:"20px"}} p={1}>Become A Good English Speaker how to,</p>
                    
                    <Divider sx={{fontSize:"1.46px", background:"#2A569F", width:"90%", textAlign:"center", marginLeft:"20px", marginTop:"20px"}}></Divider>
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between", alignItems: 'center', marginTop:"20px", marginBottom:"20px"}}>
                    <Box sx={{display: 'flex', flexDirection:"row", marginLeft:"20px"}}>
                    <img src={group} alt="" />
                    <Typography>223</Typography>
                    </Box>
                    <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",
                     width:"5%", borderRadius:"20px", marginRight:"10px"}}>View</Button>
                    </Box>
                </Card>
                </Box>
                <Box sx={{marginTop:"20px"}} m={2}>
                <Card sx={{boxShadow:"1px 3px 3px 1px gray"}}>
                    <img src={writting} alt="" width="100%" />
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', mx: -1, my: 1 }}>
                    <Button sx={{background: "#6E7A87", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography>30th June 2022</Typography>
                    </Box>
                    <Typography sx={{marginLeft:"20px", marginTop:"20px"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</Typography>
                    <Divider sx={{fontSize:"1.46px", background:"#2A569F", width:"90%", textAlign:"center", marginLeft:"20px", marginTop:"20px"}}></Divider>
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between", alignItems: 'center', marginTop:"20px", marginBottom:"20px"}}>
                    <Box sx={{display: 'flex', flexDirection:"row", marginLeft:"20px"}}>
                    <img src={group} alt="" />
                    <Typography>223</Typography>
                    </Box>
                    <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",
                     width:"5%", borderRadius:"20px", marginRight:"10px"}}>View</Button>
                    </Box>
                </Card>
                </Box>
            </Grid>

            <Grid items md={3}>
            <Box m={2}>
            <Card sx={{boxShadow:"1px 3px 3px 1px gray"}}>
            <img src={writting} alt="" width="100%"/>
            <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', mx: -1, my: 1 }}>
                    <Button sx={{ background: "#6E7A87", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography>30th June 2022</Typography>
                    </Box>
                    <Typography sx={{marginLeft:"20px", marginTop:"20px"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</Typography>
                    <Divider sx={{fontSize:"1.46px", background:"#2A569F", width:"90%", textAlign:"center", marginLeft:"20px", marginTop:"20px"}}></Divider>
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between", alignItems: 'center', marginTop:"20px", marginBottom:"20px"}}>
                    <Box sx={{display: 'flex', flexDirection:"row", marginLeft:"20px"}}>
                    <img src={group} alt="" />
                    <Typography>223</Typography>
                    </Box>
                    <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",
                     width:"5%", borderRadius:"20px", marginRight:"10px"}}>View</Button>
                    </Box>

            </Card>
            </Box>

            <Box sx={{marginTop:"20px"}} m={2}>
            <Card sx={{boxShadow:"1px 3px 3px 1px gray"}}>
                    <img src={writting} alt="" width="100%" />
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', mx: -1, my: 1 }}>
                    <Button sx={{background: "#6E7A87", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography>30th June 2022</Typography>
                    </Box>
                    <Typography sx={{marginLeft:"20px", marginTop:"20px"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</Typography>
                    <Divider sx={{fontSize:"1.46px", background:"#2A569F", width:"90%", textAlign:"center", marginLeft:"20px", marginTop:"20px"}}></Divider>
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between", alignItems: 'center', marginTop:"20px", marginBottom:"20px"}}>
                    <Box sx={{display: 'flex', flexDirection:"row", marginLeft:"20px"}}>
                    <img src={group} alt="" />
                    <Typography>223</Typography>
                    </Box>
                    <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",
                     width:"5%", borderRadius:"20px", marginRight:"10px"}}>View</Button>
                    </Box>
                </Card>
                </Box>
            </Grid>

            <Grid items md={3}>
            <Box m={2}>
            <Card sx={{boxShadow:"1px 3px 3px 1px gray"}}>
            <img src={writting} alt="" width="100%"/>
            <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', mx: -1, my: 1 }}>
                    <Button sx={{ background: "#6E7A87", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography>30th June 2022</Typography>
                    </Box>
                    <Typography sx={{marginLeft:"20px", marginTop:"20px"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</Typography>
                    <Divider sx={{fontSize:"1.46px", background:"#2A569F", width:"90%", textAlign:"center", marginLeft:"20px", marginTop:"20px"}}></Divider>
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between", alignItems: 'center', marginTop:"20px", marginBottom:"20px"}}>
                    <Box sx={{display: 'flex', flexDirection:"row", marginLeft:"20px"}}>
                    <img src={group} alt="" />
                    <Typography>223</Typography>
                    </Box>
                    <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",
                     width:"5%", borderRadius:"20px", marginRight:"10px"}}>View</Button>
                    </Box> 

            </Card>
            </Box>

            <Box sx={{marginTop:"20px"}} m={2} >
            <Card sx={{boxShadow:"1px 3px 3px 1px gray"}}>
            <img src={writting} alt="" width="100%"/>
            <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', mx: -1, my: 1 }}>
                    <Button sx={{ background: "#6E7A87", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography>30th June 2022</Typography>
                    </Box>
                    <Typography sx={{marginLeft:"20px", marginTop:"20px"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</Typography>
                    <Divider sx={{fontSize:"1.46px", background:"#2A569F", width:"90%", textAlign:"center", marginLeft:"20px", marginTop:"20px"}}></Divider>
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between", alignItems: 'center', marginTop:"20px", marginBottom:"20px"}}>
                    <Box sx={{display: 'flex', flexDirection:"row", marginLeft:"20px"}}>
                    <img src={group} alt="" />
                    <Typography>223</Typography>
                    </Box>
                    <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",
                     width:"5%", borderRadius:"20px", marginRight:"10px"}}>View</Button>
                    </Box> 
            </Card>
            </Box>
            </Grid>
        </Grid>

        <Grid container md={12} sx={{backgroundColor:"#2A569F", backgroundRepeat:"no-repeat",display: 'flex', flexDirection:"row", justifyContent:"space-around", marginTop:"20px", color:"white"}}>
            {/* <Box sx={{marginLeft:"30px"}}> */}
            <Grid items md={6}>
                <h1 style={{width:"70%", marginTop:"40px" }}>You Can Become A 
                RipplED Sponsor Or
                Partner</h1>
                </Grid>

            <Grid items md={6}>
                <Box sx={{width:"70%",marginTop:"50px" }}>
                <Typography>Our students are reaching communities
                    with their solutions and we need your
                    help to enable them scale their impact.</Typography>
                    <Box sx={{display: 'flex', flexDirection:"row", justifyContent:"space-around"}}>
                    <Button sx={{background: "linear-gradient(146.22deg, #FFB1BD 0%, #F06277 89.44%)", borderRadius:"20px", color:"white" }}> Sponsor <TrendingFlatIcon /> </Button>
                    <Typography>Or</Typography>
                    <Button sx={{background: "linear-gradient(146.22deg, #FFB1BD 0%, #F06277 89.44%)", borderRadius:"20px", color:"white" }}> Sponsor <TrendingFlatIcon /> </Button>
                    </Box>
                    </Box>
            </Grid>
            {/* </Box> */}
        </Grid>

        <Grid container md={12} sx={{display: 'flex', flexDirection:"row", justifyContent:"space-around", marginTop:"40px", width:"90%"}}>
            <Grid items md={6}>
            <img src={thumb} alt="" width={450} />
            </Grid>
            <Grid items md={6} sx={{width:"70%"}}>
            <h2>Watch Our Students
            In Action</h2>
            <Typography sx={{marginTop:"20px"}} >From acting for Quality Education, to advocating for
            Gender Equality to  Championing climate causes, our
            students are working towards the actualization of
            the SDGs by 2030</Typography>
            <Button sx={{marginTop:"20px"}}> Learn More <KeyboardArrowRightIcon /> </Button>
            </Grid>
        </Grid>

        <Box>
            <h2>What Our Students Say</h2>
            <Grid container md={12}>
                <Grid items md={4}>
                    <Card>

                    </Card>
                </Grid>

                <Grid items md={4}>
                    <Card>
                        
                    </Card>
                </Grid>

                <Grid items md={4}>
                    <Card>
                        
                    </Card>
                </Grid>
            </Grid>
        </Box>


        </>
    );
}
 
export default LandingPage;