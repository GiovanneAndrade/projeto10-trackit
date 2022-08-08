
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from "react"
import{DivHabito, BotaoAdd, H1, P, Input3, DivFlex, Div1, Color} from './StylesHabitos'
import{DivCadastro, DaySemana, Day} from './cadastrar-habitos/CadastraStyles'
import Base from '../../component/base/Base'
import Nav from '../../component/navBar/Nav'
import CadastrarHabito from './cadastrar-habitos/CadastrarHabito'
import { AuthContext } from '../../providers/auth'
 import {BsTrash} from 'react-icons/bs';
 import { ThemeProvider } from "styled-components"
 


const Habitos = () => {
  const {token} = React.useContext(AuthContext)
   console.log(token)
   
  const [selected, setSelected] = useState(false)
  const [lista, setLista] = useState([])

  function BotaoAdicionar (){
    setSelected(true)
    if(selected === true){
      setSelected(false)
    }
  }
   
  const config = {
    headers: {
      'accept' : 'application/json',
          'Content-Type' : 'application/json',
        Authorization: `Bearer ${token}`,
    },
  };
   console.log(config)
   useEffect(() => {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
    .then((response)=>{
      setLista(response.data)
      
    })
    .catch((e)=>{
      console.log(e)
    });
    },[token])
  return (

    <>
   
   <Nav/>
   <DivHabito>
     <H1>
     Meus hábitos
     </H1>
     <BotaoAdd onClick={ BotaoAdicionar }>  +   </BotaoAdd> 
    
     
    </DivHabito>
    <P>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</P>
    { !selected ? ( <></> ) :   <CadastrarHabito selected={selected} setSelected={setSelected} />}
    
    <Base/>
    
   
   <Lista/>
    </> 
   
    
  )
  function Lista (){
    
    const DiasSemana =[
      {numero:0, dia:'D'},
      {numero:1, dia:'S'},
      {numero:2, dia:'T'},
      {numero:3, dia:'Q'},
      {numero:4, dia:'Q'},
      {numero:5, dia:'S'},
      {numero:6, dia:'S'},
    ] 
   
   function Delete(item){
    const config = {
      headers: {
        'accept' : 'application/json',
            'Content-Type' : 'application/json',
          Authorization: `Bearer ${token}`,
      },
    };
     axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item.id}`, config)
     .then((response)=>{
      console.log('certo')
      setLista((preve)=>preve.filter((item)=>item.id !== item.id))
    })
    .catch((e)=>{
      console.log(e)
    });
   }
    return<>
    
    {lista.map(item =>(
      <Div1>
        <DivFlex>
           <div> {item.name}</div>
           <DaySemana > 
            { DiasSemana.map((i)=>(
                <Day style={{background: item.days.includes(i.numero) ? '' : '#CFCFCF'}} >{i.dia}</Day>
              ))}
              </DaySemana>
           
        </DivFlex>
        <div className='bst' ><BsTrash onClick={()=> Delete (item)}/> </div>
      </Div1>
         
       )) }
    </>
  }
}



  export default Habitos