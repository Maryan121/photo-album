import React from "react";
import { Typography,AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material"; 
import { PhotoCamera } from "@mui/icons-material";

import { styled } from '@mui/system';
import './mediaQuery.css'

import Data from "./cardsData";

const MyStyledComponent = styled('div')({
    marginTop: '100px',
    color: 'white',
});
  
const App = () => {
    return(
        <div style={{backgroundColor: 'whitesmoke'}}>
         <CssBaseline />
         <AppBar position="relative">
            <Toolbar>
                <PhotoCamera />
                <Typography variant="h6" style={{marginLeft: "20px"}}>photo Albums</Typography>
            </Toolbar>
         </AppBar>
         <main>
           
            <MyStyledComponent>
                <Container maxWidth='sm'>
                    <Typography variant="h2" align="center" color='textPrimary' gutterBottom>photo Album</Typography>
                    <Typography variant="h5" color='textSecondary' align="center" paragraph style={{paddingBottom: '26px'}}>
                        Hello everyone This is a photo Album and I'm trying to make to sentence as long as possible so that we can how does it look like on the screen
                    </Typography>
                    <div>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item container spacing={2} justifyContent='center' gap='10px'>
                                <Button variant="contained" color="primary">see my photos</Button>
                                <Button variant="outlined" color="primary" >secondary action</Button>
                            </Grid>
                        </Grid>
                    </div>
                    </Container>
                </MyStyledComponent> 
                <Container maxwidth='sm'> 
                    <Grid container spacing={4} className="gridContainer" >
                        { Data.map( data => {
                           return( 
                                <Grid item xs={12} sm={6} lg={4} key={data.id}>
                                    <Card style={{height: '55vh', paddingBottom: '1.4rem'}} >
                                        <CardMedia image={data.media} title="card title" style={{width: '100%', height: '50%'}}/>
                                        <CardContent>
                                            <Typography variant="h5" gutterBottom>{data.heading}</Typography>
                                            <Typography>{data.paragraph}</Typography>
                                        </CardContent>
                                        <CardActions >
                                            {data.actions.map((actionBtn,index) => <Button size="small" key={index}>{actionBtn}</Button>)}
                                        </CardActions>
                                        </Card>                         
                                </Grid>
                               )  
                            })
                                
                            }

                    </Grid>
                </Container>        
            </main>
            <footer>
                <Typography variant="h6" align="center">Footer</Typography>
                <Typography variant="subtitle1" color='textSecondary' align="center" gutterBottom>giving the footer some purpose.</Typography>
            </footer>
        </div>
    );

}

export default App;