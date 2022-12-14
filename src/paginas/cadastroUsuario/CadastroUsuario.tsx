import React, {ChangeEvent, useState, useEffect} from 'react';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import Usuario from '../../models/Usuario';
import { useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service'

function CadastroUsuario(){
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
        
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(confirmarSenha == user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }
    
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={onSubmit}>
                                <Typography variant='h3' gutterBottom component={'h3'} align='center' color='textPrimary' className='cadastrar'>
                                    Cadastro
                                </Typography>
                                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='onfirmarSenha' variant='outlined' name='onfirmarSenha' margin='normal' type='password' fullWidth />
                                <Box marginTop={2}>
                                    <Link to='/login' className='text-decorator-none'>
                                        <Button variant='contained' color='secondary' className='btnCancelar'>
                                            Cancelar
                                        </Button>
                                    </Link>
                                    <Button type='submit' variant='contained' color='primary' className='botao'>
                                            Cadastrar
                                        </Button>
                                </Box>
                        </form>
                    </Box>
                </Grid>

        </Grid>
    );
}

export default CadastroUsuario;