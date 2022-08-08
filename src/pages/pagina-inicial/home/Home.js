import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from "react"
import { Container, Input, Button, P} from './Styles';
import { AuthContext } from '../../../providers/auth';
import { Carregando } from '../../../component/carregando/Carregando';

const Home = (props) => {
 const { PostLogin,  disabled, setDisabled} = React.useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const logim = {
    email: email,
    password: senha
  }
  
 function handleForm (e){
    e.preventDefault();
    setDisabled(true)
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
    </form>
  </>
  )
}

export default Home