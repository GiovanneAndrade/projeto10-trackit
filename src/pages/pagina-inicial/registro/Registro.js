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
    console.log(cadastro)
    navigate("/")

   axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', cadastro)
  .then((res) =>{
    console.log("certo")
  })
  .catch((err) =>{
    console.log(err)
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
/* email: "olamundo@olamundo.com"
image: "https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"
name: "giga"
password: "gege123456" */