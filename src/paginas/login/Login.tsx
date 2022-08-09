import React, { ChangeEvent, useState, useEffect} from 'react';
import './Login.css';
import { Box } from '@mui/material';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { width } from '@mui/system';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import { useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';

    function Login(){
        let history = useNavigate();
        const[token, setToken] = useLocalStorage('token');

        const [userLogin, setUserLogin] = useState<UserLogin>(
            {
                id: 0,
                usuario: '',
                senha: '',
                token: ''
            }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>){
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }
        
        useEffect(()=>{
            if(token !== ''){
                history('/home')
            }
        }, [token])


        async function onSubmit(e:ChangeEvent<HTMLFormElement>) {
                e.preventDefault();
                try{
                    await login(`/usuarios/logar`, userLogin, setToken)
                    alert('Usuário logado com sucesso');
                } catch(error)  {
                        alert('Dados incompletos, verifique a informação e tente novamente');
                }
                
            
            }
     return(
            <Grid container direction='row' justifyContent='center' alignItems='center' className='bg-theme2'>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                                <Typography variant='h3' gutterBottom component={'h3'} align='center' color='textPrimary' className='login'>
                                    Entrar
                                </Typography>
                                <TextField value={userLogin.usuario} onChange={ (e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                                <TextField value={userLogin.senha} onChange={ (e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                                <Box marginTop={2} textAlign='center'>
                                    
                                        <Button type='submit' variant='contained' color='primary' className='botao'>
                                            Logar
                                        </Button>
                                    
                                </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>
                                    Ainda não é cadastrado?
                                </Typography>
                            </Box>
                            <Link to='/cadastrousuario'> <Typography variant='subtitle1' gutterBottom align='center' className='login'>
                                Cadastre-se agora!
                            </Typography>
                            </Link>
                           
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} style={{
                    backgroundImage: `url(https://i.imgur.com/h5CmIe6.jpg)`,
                    backgroundRepeat: 'no-repeat', width:'100vh', minHeight: '100vh', backgroundSize:'cover', backgroundPosition: 'center'
                }}>

                </Grid>
            </Grid>
    );
}
export default Login;