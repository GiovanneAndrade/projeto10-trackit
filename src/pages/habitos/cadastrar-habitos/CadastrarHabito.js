import React from 'react'
import { useState } from "react";
import axios from 'axios';
import{DivCadastro, Cancelar, Salvar, DivBtns, Day, DaySemana, Input2} from './CadastraStyles'
import { AuthContext } from '../../../providers/auth';
import { Carregando } from '../../../component/carregando/Carregando';


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

const CadastrarHabito = ({selected, setSelected, loading, setLoading}) => {
  const {token} = React.useContext(AuthContext)
  const [nome, setNome] = useState('')
 
 
  function handleForm(e){
    e.preventDefault();
    setLoading(true)
    const config = {
      headers: {
        'accept' : 'application/json',
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${token}`,
      },
    };
    Recolher()
    setLoading(true)
      axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', cadastroHabito, config)
    .then(() =>{
      selecionarDia=[]
      setLoading(false)
    })
    .catch((err) =>{
      alert('Preencha os campos corretamente')
      setLoading(false)
    })
  }
  const name = {
    name: nome,
  }
  
  const cadastroHabito ={
    name: nome,
    days: selecionarDia
  }
 
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
          <Salvar  type="submit" onClick={handleForm} > {loading?<Carregando/> :'Salvar'}</Salvar>
        </DivBtns>
      </DivCadastro>
    </form>
    </>
    
  )
}

export default CadastrarHabito