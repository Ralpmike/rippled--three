import { Box, Card, Typography, Grid, } from "@mui/material";
import aboy from '../../images/aboy.png';


let arrays=[
    {
img:aboy,
content:"An enim nullam tempori donec porta and blandi integer velna vitae.",
},
{
    img:aboy,
    content:"An enim nullam tempori donec porta and blandi integer velna vitae.",
},
{
        img:aboy,
        content:"An enim nullam tempori donec porta and blandi integer velna vitae.",
}, 

]
export default function HomeCard2(props){
    return(
        <>
                {arrays.map((items) =>(

                <Grid key={items.content} container md={4} px={2} >
                <Grid>
                <Box m={2}>
                    <Card>
                    <img src={items.img} alt="" wdith="100%" />
                    <Typography sx={{width
                    :"50%", marginLeft:"80px"}}>{items.content}</Typography>
                    </Card>
                </Box>
                </Grid>
                </Grid>
                ))}

        </>
    )
}