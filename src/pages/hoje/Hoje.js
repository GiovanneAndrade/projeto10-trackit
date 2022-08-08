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
  const [id, setId ] = useState('')
  const [loading, setLoading] = useState(false)
  console.log(id)
  console.log(hoje)
 function TrocaCor (index, item){
  hoje[index].done = !(hoje[index].done);
    
    if (item.done){
     
        const config = {
        headers: {
            'accept' : 'application/json',
            'Content-Type' : 'application/json', 
            Authorization: `Bearer ${token}`
        },
      };
      setLoading(true)
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/check`, {}, config)
      .then((response)=>{
        console.log(  response)
        setLoading(false)
      })
      .catch((e)=>{
        console.log('erro')
      }); 
  }

  if (item.done === false) {
    const config = {
      headers: {
          'accept' : 'application/json',
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${token}`,
      },
    };
    setLoading(true)
      axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}/uncheck`, {}, config)
      .then((response)=>{
        console.log(  'certo')
        setLoading(false)
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
      case 'Monday':
       return ('Segunda')
      case 'third':
       return ('Terça')
      case 'fourth':
       return ('Quarta')
      case 'Thursday':
       return ('Quinta')
      case 'friday':
       return ('Sexta')
      case 'Saturday':
       return ('Sabado')
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
    setLoading(false)
   })
  })
  .catch(()=>{
    console.log('error')
  });
  },[token, loading]) 
   
  return (
    <>
    
 
    <Nav/>
    <H2>
    {Hoje()}, {dayjs().format('DD/MM')}
    </H2>
     
    <Base/>
    { hoje.map((item, index) =>(
      <Div1 key={index}>  
        <Div2>
          <H1hoje>{item.name}</H1hoje> 
          <Phoje>Sequência atual: {item.currentSequence} dias</Phoje>
          <Phoje>Seu recorde: {item.highestSequence} dias</Phoje>
        </Div2>
       <div className='iconHoje'><BsCheckSquareFill onClick={()=> TrocaCor(index, item)} className={item.done ? 'verde' : 'cinza'}/></div>
      </Div1> 
    )) }
    
  
    </>
   
  
  )
}

export default Hoje