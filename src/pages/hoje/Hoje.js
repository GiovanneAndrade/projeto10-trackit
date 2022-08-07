import { Link } from 'react-router-dom'
import dayjs, { Dayjs } from 'dayjs'
import React, { useState, useEffect } from "react"
import Nav from '../../component/navBar/Nav'
import Base from '../../component/base/Base'
import { Day, DivCadastro} from '../habitos/cadastrar-habitos/CadastraStyles'
import { Div1, Div2, Phoje, H1hoje, H2, H3} from './stylesHoje'
import axios from 'axios'
import { AuthContext } from '../../providers/auth'
import { BuscarHabitos } from '../../servidores/Servers'
import {BsCheckSquareFill} from 'react-icons/bs';
import {Verde} from './stylesHoje'

const Hoje = () => {
  
  const { token } = React.useContext(AuthContext)
  const [hoje, setHoje] = useState([])
  const [ cor, setCor] = useState('cinza')
  const [id, setId ] = useState('')
  console.log(id)
  console.log(hoje)
 function TrocaCor (cor, item){
  setCor('cinza') 
  if (cor == 'cinza'){
    setCor('verde')
     

      const config = {
      headers: {
           'accept' : 'application/json',
          'Content-Type' : 'application/json', 
          Authorization: `Bearer ${token}`
      },
    };
    
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/check`, {}, config)
      .then((response)=>{
        console.log(  response)
      })
      .catch((e)=>{
        console.log('erro')
      }); 
      

  }
  if (cor == 'verde'){
    const config = {
      headers: {
          'accept' : 'application/json',
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${token}`,
      },
    };
    
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/uncheck`, {}, config)
      .then((response)=>{
        console.log(  'certo')
      })
      .catch((e)=>{
        console.log(e)
      }); 
  }
   
 }



 function Hoje(){
  
    switch (dayjs().format('dddd')){
      case 'Sunday':
       return('Domingo')
      
      case 'Sunday':
        console.log ('Sabado')
      break;
      case 'Saturday':
        console.log ('Sabado')
      break;
      case 'Saturday':
        console.log ('Sabado')
      break;
      case 'Saturday':
        console.log ('Sabado')
      break;
      case 'Saturday':
        console.log ('Sabado')
      break;
      case 'Saturday':
        console.log ('Sabado')
      break;
    }
    
 }
  const config = {
  headers: {
    'accept' : 'application/json',
          'Content-Type' : 'application/json',
      Authorization: `Bearer ${token}`,
  },
};
 useEffect(() => {
  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
  .then((response)=>{
   setHoje(response.data)
   hoje.map((item) => {
    setId(item.id)
   })
  })
  .catch(()=>{
    console.log('error')
  });
  },[token]) 
   
  return (
    <>
    
 
    <Nav/>
    <H2>
    {Hoje()}, {dayjs().format('DD/MM')}
    </H2>
    <H3>Nenhum hábito concluído ainda</H3>
    <Base/>
    { hoje.map((item, index) =>(
      <Div1 key={index}>  
        <Div2>
          <H1hoje>{item.name}</H1hoje> 
          <Phoje>Sequência atual: {item.currentSequence} dias</Phoje>
          <Phoje>Seu recorde: {item.highestSequence} dias</Phoje>
        </Div2>
       <div className='iconHoje'><BsCheckSquareFill onClick={()=> TrocaCor(cor, item)} className={cor}/></div>
      </Div1> 
    )) }
    
  
    </>
   
  
  )
}

export default Hoje