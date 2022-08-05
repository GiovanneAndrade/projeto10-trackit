import React from 'react'
import { useState, useEffect } from "react";
import{DivCadastro, Cancelar, Salvar, DivBtns, Day, DaySemana, Input2} from './CadastraStyles'
import { Input } from '../../pagina-inicial/home/Styles'

let selecionarDia = []
const DiasSemana =[
  {numero:1, dia:'D'},
  {numero:2, dia:'S'},
  {numero:3, dia:'T'},
  {numero:4, dia:'Q'},
  {numero:5, dia:'Q'},
  {numero:6, dia:'S'},
  {numero:7, dia:'S'},
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
     
     <Day onClick={Color} style={{ background: dia ? color :''}}  >{dia}</Day> 
    </>
  
  
  )
}


const CadastrarHabito = ({selected, setSelected}) => {
  const [nome, setNome] = useState('')
   
 
  function handleForm(e){
    e.preventDefault();
    
    Recolher()
    fetch('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{
      
        method: 'POST',
        body: JSON.stringify(cadastroHabito),
        headers:{ 'content-type': 'application/json',  identifier: "8b7aa095-b342-417e-bca1-09712f7deb67"},
      })
      .then(Response => Response.json())
      .then(json => console.log(json))
      .catch((err) => console.log(err));
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