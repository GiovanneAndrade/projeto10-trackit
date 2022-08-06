
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from "react"
import axios from 'axios';
import { Container, Input, Button, P} from './Styles';
import dayjs, { Dayjs } from 'dayjs'


const Home = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  let resposta;
  const logim = {
    email: email,
    password: senha
  }
  
 function handleForm (e){
    e.preventDefault();
    console.log(logim)
    navigate("/Habitos", {state:
      {
       token: resposta.token
      } })
 }
 axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', logim)
    .then((res) =>{
      resposta = res.data
       
    })
    .catch((err) =>{
      console.log(err)
    })
  
 
  
  console.log(dayjs().format('dddd')  )
  
  
 
  return (
    
  <>
 <form onSubmit={handleForm}> 
    <img className='img-inicio' src="/image/Group 8.png"/>
    <Container>
    <Input  type="email" required placeholder="email" onChange={(e)=> setEmail(e.target.value)}/>
    <Input type="password"  required placeholder='senha'onChange={(e)=> setSenha(e.target.value)}/>
    </Container>
    
        <Button type='submit'  >Entrar</Button>
     
    <Link to={"/Registro"}>
      <P>Não tem uma conta? Cadastre-se!</P>
    </Link>
    <h1>
    
    </h1>
 </form>
  </>
   
  )
}

export default Home