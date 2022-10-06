import { Box, Card, Button, Typography,Divider } from "@mui/material";
import writting from '../../images/writting.png';
import round from '../../images/round.png';
import group from '../../images/group.png';
export default function HomeCard(props){

    return (
        <Box m={2} >
        <Card>
            <Box width={"272px"} height={"149px"}>
            <img src={writting} alt="" width="100%" />
            </Box>
            <Box width={269.5} height={139.95}>
            <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', mx: -1, my: 1 }}>
                <Box width="60" height="14">
            <Button sx={{background: "linear-gradient(#2A569F 0%, #2A569F 95%)", color:"#6E7A87",  }}  > <img src={round} alt="" />  No Poverty</Button>
                </Box>
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
            </Box>
        </Card>
        </Box>
    )
}