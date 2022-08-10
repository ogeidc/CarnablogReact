import React, { useEffect } from "react";
import {Typography, Grid, Button} from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import './Home.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function Home() {
    
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])
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
                        <Link to="/posts" className="text-decorator-none">
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                        </Link>
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