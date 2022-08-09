import React from "react";
import {Typography, Grid, Button} from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import './Home.css';

function Home() {
    return (
        <>
         <Grid container direction="row" justifyContent="center" alignItems="center" className='bg-theme1'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom  component="h3" align="center" className='txt-format'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom  component="h5" align="center" className='txt-format'>Expresse aqui os seus pensamentos e opiniões sobre o maior espetáculo do planeta Terra!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>

        </>
    );
}
export default Home;