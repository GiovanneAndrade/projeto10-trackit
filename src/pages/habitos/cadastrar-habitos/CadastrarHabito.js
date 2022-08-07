import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import{DivCadastro, Cancelar, Salvar, DivBtns, Day, DaySemana, Input2, DivFlex} from './CadastraStyles'
import { Input } from '../../pagina-inicial/home/Styles'
import { AuthContext } from '../../../providers/auth';


let selecionarDia = []
const DiasSemana =[
  {numero:0, dia:'D'},
  {numero:1, dia:'S'},
  {numero:2, dia:'T'},
  {numero:3, dia:'Q'},
  {numero:4, dia:'Q'},
  {numero:5, dia:'S'},
  {numero:6, dia:'S'},
]

function BotaoSemana ({numero, dia}){
  
  const [color, setColor] = useState('#fff')
  console.log(selecionarDia)
  
  
  function Color (){
    
    selecionarDia.push(numero)
   
   setColor('#CFCFCF')
   if(color === '#CFCFCF'){
    setColor('#fff')
    const remove = numero
    selecionarDia = selecionarDia.filter((item) => {
    return item !== remove
    })
    
   }
   
  }
  
  return(
    <>
     <Day onClick={ Color} style={{ background: dia ? color :''}}  >{dia}</Day> 
    </>
  
  
  )
}


const CadastrarHabito = ({selected, setSelected}) => {
  const {token} = React.useContext(AuthContext)
  console.log(token)
  const [nome, setNome] = useState('')
   
 
  function handleForm(e){
    e.preventDefault();
    const config = {
      headers: {
        'accept' : 'application/json',
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${token}`,
      },
    };
    Recolher()
      axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', cadastroHabito, config)
    .then(() =>{
      console.log('deu certo')
    })
    .catch((err) =>{
      console.log(err)
    })
  }
  const name = {
    name: nome,
  }
  
  const cadastroHabito ={
    name: nome,
    days: selecionarDia
  }
  console.log(cadastroHabito)
  function Recolher (){
    if(name.name !== ''){
      setSelected(false);
    }
  }
  

  return (
    
  <>
 
  <form  >
      <DivCadastro>
    
        
       
          <Input2 type="text" required  placeholder='nome do hábito' onChange={(e)=> setNome(e.target.value)}/>
          <DaySemana>
            { DiasSemana.map((item, index) =>( <BotaoSemana key={index} numero={item.numero} dia={item.dia}/>)) }
          </DaySemana>
          
          <DivBtns>
            <Cancelar onClick={
              function Voltar (){
              if(selected === true){
                setSelected(false);
              }
              }} >
              Cancelar
            </Cancelar>
            
            <Salvar  type="submit" onClick={handleForm} >Salvar</Salvar>
          </DivBtns>
        
         

         
      </DivCadastro>
     
    </form>
    
    </>
    
  )
}

export default CadastrarHabito