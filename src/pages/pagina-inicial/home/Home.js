
import { Link } from 'react-router-dom'
import React, { useState } from "react"

import { Container, Input, Button, P} from './Styles';
import dayjs, { Dayjs } from 'dayjs'


const Home = () => {
 
  
  
  
  console.log(dayjs().format('dddd')  )
  
  
 
  return (
    
  <>
 
   <img className='img-inicio' src="/image/Group 8.png"/>
    <Container>
    <Input type="email" placeholder="email" />
    <Input type="senha" placeholder='senha'/>
    </Container>
    <Link to={"/Habitos"}>
        <Button>Entrar</Button>
     </Link>
    <Link to={"/Registro"}>
      <P>Não tem uma conta? Cadastre-se!</P>
    </Link>
    <h1>
   
    </h1>
  </>
   
  )
}

export default Home