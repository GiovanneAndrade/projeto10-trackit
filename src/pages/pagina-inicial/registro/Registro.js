import React, { useState } from "react"
import { Link, useNavigate} from 'react-router-dom'
import { Container, Input, Button, P} from '../home/Styles';
import axios from 'axios';

const Registro = () => {
const navigate = useNavigate()
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')
const [nome, setNome] = useState('')
const [foto, setFoto] = useState('')
const cadastro = {
  email: email,
  name: nome,
  image: foto,
  password: senha
}
  function handleForm (e){
    e.preventDefault();
    navigate("/")
   axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', cadastro)
  .then((res) =>{
  })
  .catch((err) =>{
  })
  }

  return (
    <>
    <form onSubmit={handleForm} >
      <img className='img-inicio' src="/image/Group 8.png"/>
      <Container>
        <Input   placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
        <Input   placeholder='senha' onChange={(e)=> setSenha(e.target.value)}/>
        <Input   placeholder="nome" onChange={(e)=> setNome(e.target.value)}/>
        <Input   placeholder='foto'onChange={(e)=> setFoto(e.target.value)}/>
      </Container>
      <Button>Cadastrar</Button>
      <Link to={"/"}>
      <P>Já tem uma conta? Faça login!</P>
      </Link>
   </form>
    </>
  )
}

export default Registro
