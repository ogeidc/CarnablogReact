import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();
  function goLogout(){
    setToken('')
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }
  return (
    <>

      <AppBar position="static" className="bg-navbar" >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            Carnablog
          </Typography>
          <Box display="flex" className="item-align">
            <Link to="/home" className="text-decorator-none">
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                HOME
              </Typography>
            </Box>
            </Link>
            <Link to="/posts" className="text-decorator-none">
            <Box mx={1} display="flex" className='cursor, item-align'>
              <Typography variant="h6" color="inherit" className="text-decorator-none">
                POSTAGENS
              </Typography>
            </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                TEMAS
              </Typography>
            </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                CADASTRAR TEMA
              </Typography>
            </Box>
            </Link>
            
              <Box onClick={goLogout} mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                  LOGOUT
                </Typography>
              </Box>
           

          </Box>
        </Toolbar>
      </AppBar>

    </>
  )
}

export default Navbar;