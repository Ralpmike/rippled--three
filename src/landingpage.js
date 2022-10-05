import { Stack, Box, Button, Typography, Grid, Card } from "@mui/material";
// import logo from './images/logo.png';
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
// import {Link} from "react-router-dom";
import aboy from './images/aboy.png';
import DrawerAppBar from './appbar';

const LandingPage = () => {
    return (
        <>
            <DrawerAppBar />

        {/* <Stack  container  sx={{display:"flex", flexDirection:"row", justifyContent:"space-around", zIndex:"5" }} >
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
        </Stack> */}

        <Grid container md={12}  height="90vh" sx={{background: "linear-gradient(180deg, #FFFFFF 55.8%, #EEF4FF 92.7%, rgba(238, 244, 255, 0.5) 92.7%)", height:{xs:"100%"}
}} >
            <Grid items md={6}>
            <Box sx={{width:"75%", marginLeft:"50px"}}>
            <h3 style={{color:"gray", fontSize:"40px", fontWeight:"700", lineheight:"50px", fontFamily:"Jacques Pro"}}> <b> Receive the support you need
            to create a ripple effect in
            your school and community. </b></h3>
            <Typography sx={{fontSize:"18px", fontWeight:"400", lineheight:"25.2px", fontFamily:"Jacques Pro"}}>We empower high school students ages 10 - 18 to
            become innovators and global change agents.</Typography>
            <Box sx={{display:"flex", marginTop:"20px", flexDirection:"row", justifyContent:"space-around"}}>
            <h4 style={{marginTop:"30px", color:"gray"}}>Want to join our community?</h4> 
            <Button sx={{background: "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)",
            borderRadius: "50px", border:"1px solid red", width:"45%", height:"8vh", marginTop:"15px"}}>Learn How to work</Button>
            </Box>
            </Box>
        </Grid>
        <Grid items md-6>
        <Box sx={{marginTop:"80px"}}>
            <img src={boys} width={350} alt="" />
            </Box>
        </Grid>
        </Grid>

        <Grid sx={{display:"flex", px: 15, flexDirection:"row",  justifyContent:"space-around", textAlign:"center",  height:"20vh", color:"white", marginTop:{xs:"10%", md:"0px", backgroundImage:`url(${reading})`,backgroundRepeat:"no-repeat", background: "rgba(42, 86, 159, 0.95)", height:"30vh"  }}}>
            <Grid items md={3} sx={{marginTop:"30px"}} m={2}>
                <Typography sx={{fontSize:"40px", fontFamily:"Jacques Pro"}}>200</Typography>
                <Typography sx={{fontFamily:"Jacques Pro", fontSize:"13px"}}>Students</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem  sx={{background:"white", height:"15vh", width:"2px", marginTop:"30px"}}/>
            <Grid items md={3} sx={{marginTop:"30px"}} m={2}>
                {/* <h1></h1> */}
                <Typography sx={{fontSize:"40px", fontFamily:"Jacques Pro"}}>50</Typography>
                <Typography sx={{fontFamily:"Jacques Pro", fontSize:"13px"}}>Projects</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem  sx={{background:"white", height:"15vh", width:"2px", marginTop:"30px"}}/>
            <Grid items md={3} sx={{marginTop:"30px"}} m={2}>
                {/* <h1></h1> */}
                <Typography sx={{fontSize:"40px", fontFamily:"Jacques Pro"}}>$5k</Typography>
                <Typography sx={{fontFamily:"Jacques Pro", fontSize:"13px"}}>Raised</Typography>
            </Grid>
            <Divider orientation="vertical" flexItem  sx={{background:"white", height:"15vh", width:"2px", marginTop:"30px"}}/>
            <Grid items md={3} sx={{marginTop:"30px"}} m={2}>
                <Typography sx={{fontSize:"40px", fontFamily:"Jacques Pro"}}>8K</Typography>
                <Typography sx={{fontFamily:"Jacques Pro", fontSize:"13px"}}>Children & Adults</Typography>
            </Grid>
        </Grid>

        <Grid container md={12} width="80%" marginLeft="20px" marginTop="60px" textAlign="center">
            <Grid items md={6} sx={{marginTop:"30px"}}>
            <img  src={Video} width={300} height={300} alt="" />
            </Grid>
            <Grid items md={6}>
            <h2 style={{fontFamily:"Jacques Pro", fontWeight:"600", fontSize:"32px", lineHeight:"44.4px", letter:"8%"}}>RipplED supports your learning
             and social impact Activities</h2>
            <Typography  sx={{fontFamily:"Jacques Pro", fontWeight:"300", fontSize:"24px", lineHeight:"33.6px", letter:"6%"}}>Through its online platform, RipplED offer
            students in Secondary Schools the opportunity
            to access skill development opportunities,
            mentorship and tailored curriculum to enable
            them learn and accelerate their activities
            and become global change makers.</Typography>
            <Button sx={{background: "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)",
                borderRadius: "50px", marginTop:"20px"}}>Join Our Community</Button>
            </Grid>
        </Grid>

        <Stack sx={{marginTop:"30px"}}>
            <h2 style={{textAlign:"center", marginTop:"20px"}}>
            View Our Project Categories
            </h2>
        </Stack>
        <Grid container md={12} sx={{marginTop:"30px"}}>
            <Grid items md={3} sx={{fontFamily:"Jacques Pro", fontSize:"20px", lineHeight:"28px", color:"gray"}}>
                <h2 style={{marginLeft:"200px"}}>All SDGS</h2>
                <Typography sx={{marginLeft:"30px"}}>No Poverty</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"200px"}}>Zero Hunger</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"200px"}}>Good health & well-being</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"200px"}}>Quality Education</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"200px"}}>Genger Equality</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"200px"}}>Affordable & clean energy</Typography>
                <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",borderRadius:"15px", marginTop:"200%", marginLeft:"30px"}}>Show all</Button>
            </Grid>
            {/* first card */}
            <Grid items md={3}>
                <Box m={2} >
                <Card sx={{boxShadow:"1px 3px 3px 1px gray"}}>
                    <img src={writting} alt="" width="100%" />
                    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', mx: -1, my: 1 }}>
                    <Button sx={{background: "linear-gradient(#2A569F 0%, #2A569F 95%)", color:"#6E7A87" }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography sx={{color:"#2A569F"}}>30th June 2022</Typography>
                    </Box>
                    <h5 style={{marginLeft:"10px", marginTop:"20px", color:"gray"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</h5>
                    
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
                    <Button sx={{background:  "linear-gradient(#2A569F 0%, #2A569F 95%)", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography sx={{color:"#2A569F"}}>30th June 2022</Typography>
                    </Box>
                    <h5 style={{marginLeft:"10px", marginTop:"20px", color:"gray"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</h5>
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
                    <Button sx={{ background:  "linear-gradient(#2A569F 0%, #2A569F 95%)", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography sx={{color:"#2A569F"}}>30th June 2022</Typography>
                    </Box>
                    <h5 style={{marginLeft:"10px", marginTop:"20px", color:"gray"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</h5>
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
                    <Button sx={{background:  "linear-gradient(#2A569F 0%, #2A569F 95%)", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography sx={{color:"#2A569F"}}>30th June 2022</Typography>
                    </Box>
                    <h5 style={{marginLeft:"10px", marginTop:"20px", color:"gray"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</h5>
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
                    <Button sx={{ background:  "linear-gradient(#2A569F 0%, #2A569F 95%)", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography sx={{color:"#2A569F"}}>30th June 2022</Typography>
                    </Box>
                    <h5 style={{marginLeft:"10px", marginTop:"20px", color:"gray"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</h5>
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
                    <Button sx={{ background:  "linear-gradient(#2A569F 0%, #2A569F 95%)", color:"black", }}> <img src={round} alt="" />  No Poverty</Button>
                    <Typography sx={{color:"#2A569F"}}>30th June 2022</Typography>
                    </Box>
                    <h5 style={{marginLeft:"10px", marginTop:"20px", color:"gray"}}>Masters In English | How To English | How Toiik
                    Become A Good English Speaker how to inno
                    Become A Good English Speaker how towklljk
                    Become A Good English Speaker how to,</h5>
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
                <h1 style={{width:"75%", marginTop:"40px", marginLeft:"50px" }}>You Can Become A 
                RipplED Sponsor Or
                Partner</h1>
                </Grid>

            <Grid items md={6}>
                <Box sx={{width:"70%",marginTop:"50px", marginLeft:"40px"  }}>
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
            <img src={thumb} alt="" width={350} />
            </Grid>
            <Grid items md={6} sx={{width:"80%"}}>
            <h2>Watch Our Students
            In Action</h2>
            <Typography sx={{marginTop:"20px"}} >From acting for Quality Education, to advocating for
            Gender Equality to  Championing climate causes, our
            students are working towards the actualization of
            the SDGs by 2030</Typography>
            <Button sx={{marginTop:"20px"}}> Learn More <KeyboardArrowRightIcon /> </Button>
            </Grid>
        </Grid>

        <Box textAlign="center">
            <h2 style={{textAlign:"center", fontFamily:"Jacques Pro", fontWeight:"600", fontSize:"32px"}}>What Our Students Say</h2>
            <Grid container md={12} >
                
                <Grid items md={4}>
                <Box m={2}>
                    <Card>
                    <img src={aboy} alt="" />
                    <Typography sx={{width
                    :"50%", marginLeft:"80px"}}>An enim nullam tempori
                        donec porta and blandi
                        integer velna vitae.</Typography>
                    </Card>
                </Box>
                </Grid>

                <Grid items md={4}>
                <Box m={2}>
                    <Card>
                    <img src={aboy} alt="" />
                    <Typography sx={{width
                    :"50%", marginLeft:"80px"}}>An enim nullam tempori
                        donec porta and blandi
                        integer velna vitae.</Typography>
                    </Card>
                    </Box>
                </Grid>

                <Grid items md={4}>
                    <Box m={2}>
                    <Card>
                    <img src={aboy} alt="" />
                    <Typography sx={{width
                    :"50%", marginLeft:"80px"}}>An enim nullam tempori
                        donec porta and blandi
                        integer velna vitae.</Typography>
                    </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>


        </>
    );
}
 
export default LandingPage;