import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Input, Button, P} from '../home/Styles';


const Registro = () => {
  return (
    <>
    
      <img className='img-inicio' src="/image/Group 8.png"/>
      <Container>
        <Input type="email" placeholder="email" />
        <Input type="senha" placeholder='senha'/>
        <Input type="nome" placeholder="nome" />
        <Input type="foto" placeholder='foto'/>
      </Container>
      <Link to={"/"}>
      <Button>Cadastrar</Button>
      </Link>
      <Link to={"/"}>
      <P>Já tem uma conta? Faça login!</P>
      </Link>
    </>
  )
}

export default Registro