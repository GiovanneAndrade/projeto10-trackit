
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from "react"
import axios from 'axios';
import { Container, Input, Button, P} from './Styles';
import dayjs, { Dayjs } from 'dayjs'
import {Cadastro} from '../../../servidores/Servers' 
import { Login } from '../../../servidores/Servers';
import { AuthContext } from '../../../providers/auth';
import { Carregando } from '../../../component/carregando/Carregando';




const Home = (props) => {
 const { PostLogin,  disabled, setDisabled, error} = React.useContext(AuthContext)
 
 

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
    setDisabled(true)
    console.log(logim)
    navigate("/Hoje")
      PostLogin(logim)
      
 }
   
  return (
   
 <>
 <form onSubmit={handleForm} > 
    <img className='img-inicio' src="/image/Group 8.png"/>
    <Container>
    <Input  type="email" required placeholder="email" onChange={(e)=> setEmail(e.target.value)} disabled={disabled}/>
    <Input type="password"  required placeholder='senha'onChange={(e)=> setSenha(e.target.value)} disabled={disabled}/>
   
    </Container>
    
        <Button type='submit'> {disabled ? <Carregando/> :'Entrar'}</Button>
     
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