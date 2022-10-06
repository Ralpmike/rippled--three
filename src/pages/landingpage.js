import { Stack, Box, Button, Typography, Grid, TextField} from "@mui/material";
import boys from '../images/boys.png';
import Divider from '@mui/material/Divider';
import Video from '../images/Video.png';
import reading from '../images/reading.png';
// import writting from './images/writting.png';
// import round from './images/round.png';
// import group from './images/group.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import thumb from '../images/thumb.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import aboy from '../images/aboy.png';
import Groupy from '../images/Groupy.png';
import DrawerAppBar from '../components/home/appbar';
import HomeCard from "../components/home/Card";
import HomeCard2 from "../components/home/Card2";



const LandingPage = () => {
    return (
        <>
            <DrawerAppBar />
            
        <Grid container md={12}  height="100vh" sx={{background: "linear-gradient(180deg, #FFFFFF 55.8%, #EEF4FF 92.7%, rgba(238, 244, 255, 0.5) 92.7%)", height:{xs:"100%"}
}} >
            <Grid items md={6}>
            <Box sx={{width:"75%", marginLeft:"50px"}}>
            <h3 style={{color:"gray", fontSize:"40px", fontWeight:"700", lineheight:"50px", fontFamily:"Jacques Pro"}}> <b> Receive the support you need
            to create a ripple effect in
            your school and community. </b></h3>
            <p style={{fontSize:"18px", fontFamily:"Jacques Pro", color:"gray"}}>We empower high school students ages 10 - 18 to
            become innovators and global change agents.</p>
            <Box sx={{display:"flex", marginTop:"10px", flexDirection:"row", justifyContent:"space-around"}}>
            <h4 style={{marginTop:"30px", color:"gray"}}>Want to join our community?</h4> 
            <Button sx={{background: "linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)",
            borderRadius: "50px", border:"1px solid red", width:"45%", height:"8vh", marginTop:"15px"}}>Learn How to work</Button>
            </Box>
            </Box>
        </Grid>
        <Grid items md-6>
        <Box sx={{marginTop:"80px"}}>
            <img src={boys} width={300} alt="" />
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
            <Typography  sx={{fontFamily:"Jacques Pro"}}>Through its online platform, RipplED offer
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
        <Grid container  sx={{marginTop:"30px"}}>
            <Grid items md={3} sx={{fontFamily:"Jacques Pro", fontSize:"20px", lineHeight:"28px", color:"gray"}}>
                <h2 style={{marginLeft:"80px"}}>All SDGS</h2>
                <Typography sx={{marginLeft:"80px"}}>No Poverty</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"80px"}}>Zero Hunger</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"80px"}}>Good health & well-being</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"80px"}}>Quality Education</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"80px"}}>Genger Equality</Typography>
                <Typography sx={{marginTop:"30px", marginLeft:"80px"}}>Affordable & clean energy</Typography>
                <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",borderRadius:"15px", marginLeft:"80px", marginTop:"30px"}}>Show all</Button>
            </Grid>
                <Grid item md={9} >
                    <Grid  container justifyContent='center' alignItems='center' spacing={1} sx={{background: "#F5F5F5", opacity:""}}>

                <HomeCard />
                    </Grid>
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
            <h2 style={{textAlign:"center", fontFamily:"Jacques Pro", fontWeight:"600", fontSize:"32px", width:"90%"}}>What Our Students Say</h2>
            <Grid container item md={12} >
                    <Grid container justifyContent='center' alignItems='center' spacing={1} >
                    <HomeCard2 />
                    </Grid>
            </Grid>
        </Box>
        <Grid container md={12} >
            <Grid items md={6}>
            <img src={Groupy} alt="" width="100%" />
            </Grid>

            <Grid items md={6} sx={{marginTop:"20px"}}>
                <Box >
                    <Typography m={4} sx={{fontSize:"32px", fontFamily:"Jacques Pro", fontWeight:"600" }}>Get In Touch With Us</Typography>
                </Box>
                <Stack direction="row" spacing={2} m={4}>
                <Box component="form" >
                <Typography >Name</Typography>
                <TextField
                    sx={{borderRadius:"50px"}}
                    size="small"
                    id="outlined-name"
                    label="Your name" />
                    </Box>
                    <Box>
                <Typography>SUBJECT</Typography>
                <TextField
                    size="small"
                    id="outlined-uncontrolled"
                    label="Choose subject" />
                    </Box>
                    </Stack>
                <Stack direction="row" spacing={2} m={4}>
                    <Box>
                        <Typography>COMPANY</Typography>
                    <TextField
                        size="small"
                        id="demo-helper-text-misaligned"
                        label="Text here"
                    />
                    </Box>
                    <Box>
                        <Typography>EMAIL</Typography>
                    <TextField
                        size="small"
                        id="demo-helper-text-misaligned"
                    label="You email address" />
                    </Box>
                </Stack>

                <Box m={4}>
                <Typography>MESSAGE</Typography>
                    <TextField
                    sx={{width:"80%"}}
                    id="outlined-multiline-static"
                    // label="Multiline"
                    multiline
                    rows={4}
                    // defaultValue="Default Value"
                    // id="demo-helper-text-misaligned"
                    label="Start typing here" />
                </Box>
                    <Button sx={{background: "linear-gradient(277.46deg, #F06277 27.63%, #FFB1BD 108.14%)", borderRadius: "40px", marginLeft:"35px", padding: "10px 45px", gap:"10px", alignItems:"center",}}>Submit</Button>

                
            </Grid>
        </Grid>

        </>
    );
}
 
export default LandingPage;