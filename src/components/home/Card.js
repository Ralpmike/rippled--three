import { Box, Card, Button, Typography,Divider } from "@mui/material";
import writting from '../../images/writting.png';
import round from '../../images/round.png';
import group from '../../images/group.png';
import { Stack, Grid } from "@mui/material";

let array=[
{
img: writting,
title: "No poverty",
date: "30th June, 2022",
content: "Masters In English | How To English | How Toiik Become A Good English Speaker how to inno Become A Good English Speaker how towklljk Become A Good English Speaker how to",
figure: "223",
view: "View"
},

{
    img: writting,
    title: "Zero Hunger",
    date: "30th June, 2022",
    content: "Masters In English | How To English | How Toiik Become A Good English Speaker how to inno Become A Good English Speaker how towklljk Become A Good English Speaker how to",
    figure: "",
    view: "View"
},
{
img: writting,
title: "Good health & well-being",
date: "30th June, 2022",
content: "Masters In English | How To English | How Toiik Become A Good English Speaker how to inno Become A Good English Speaker how towklljk Become A Good English Speaker how to",
figure: "223",
view: "View"
},
{
    img: writting,
    title: "Quality Education",
    date: "30th June, 2022",
    content: "Masters In English | How To English | How Toiik Become A Good English Speaker how to inno Become A Good English Speaker how towklljk Become A Good English Speaker how to",
    figure: "223",
    view: "View"
    },
    {
        img: writting,
        title: "Gender Equality",
        date: "30th June, 2022",
        content: "Masters In English | How To English | How Toiik Become A Good English Speaker how to inno Become A Good English Speaker how towklljk Become A Good English Speaker how to",
        figure: "223",
        view: "View"
        },
        {
            img: writting,
            title: "Afforadable & clean energy",
            date: "30th June, 2022",
            content: "Masters In English | How To English | How Toiik Become A Good English Speaker how to inno Become A Good English Speaker how towklljk Become A Good English Speaker how to",
            figure: "223",
            view: "View"
            },


]
export default function HomeCard(props){

 
    return (
        <>
        {array.map((item)=>(
            <Grid key={item.title} item md={4}  >

        <Card>
            <Box >
            <img src={item.img} alt="" width="100%" />
            </Box>
            <Box width={269.5}>
            <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-around", alignItems: 'center', my: 1 }}>
                <Box width="30" height="10">
            <Button  sx={{background: "linear-gradient(#2A569F 0%, #2A569F 95%)", color:"#6E7A87", fontSize:"Poppins"  }}  > <img src={round} alt="" /> <small>{item.title}</small></Button>
                </Box>
            <Typography sx={{color:"#2A569F"}}> <small>{item.date}</small></Typography>
            </Box>
            <h5 style={{marginLeft:"10px", marginTop:"10px", color:"gray"}}> <small>{item.content}</small></h5>
            
            <Divider sx={{fontSize:"1.46px", border: "1.4633px solid #2A569F", background:"#2A569F", width:"90%", textAlign:"center", marginLeft:"20px", marginTop:"10px"}}></Divider>
            <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between", alignItems: 'center', marginTop:"10px", marginBottom:"10px"}}>
            <Box sx={{display: 'flex', flexDirection:"row", marginLeft:"20px"}}>
            <img src={group} alt="" />
            <Typography>{item.figure}</Typography>
            </Box>
            <Button sx={{background: "linear-gradient(135deg, #FFB1BD 0%, #F06277 100%)",
             width:"5%", borderRadius:"20px", marginRight:"10px"}}>{item.view}</Button>
            </Box>
            </Box>
        </Card>
        </Grid>
))}
        </>
    )
}