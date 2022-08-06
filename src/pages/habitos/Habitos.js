
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from "react"
import{DivHabito, BotaoAdd, H1, P, Input3} from './StylesHabitos'
import{DivCadastro, DaySemana, Day} from './cadastrar-habitos/CadastraStyles'
import Base from '../../component/base/Base'
import Nav from '../../component/navBar/Nav'
import CadastrarHabito from './cadastrar-habitos/CadastrarHabito'


const Habitos = () => {
  const tokenHabito = useLocation()
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
        Authorization: `Bearer ${tokenHabito.state.token}`,
    },
};

   useEffect(() => {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
    .then((response)=>{
      setLista(response.data)
      
    })
    .catch(()=>{
      console.log('error')
    });
    })
  return (

    <>
   
   <Nav/>
   <DivHabito>
     <H1>
     Meus hábitos
     </H1>
     <BotaoAdd onClick={ BotaoAdicionar }>  +  </BotaoAdd> 
    
     
    </DivHabito>
    <P>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</P>
    { !selected ? ( <></> ) :   <CadastrarHabito tokenSelecionado={tokenHabito.state.token}selected={selected} setSelected={setSelected} />}
   <Base/>

   
   <Lista/>
    </> 
   
    
  )
  function Lista (){
   
    return<>
    
    {lista.map(item =>(
      <DivCadastro>
       <Input3  placeholder= {item.id}/>
        <DaySemana > {item.days.map(i => (<Day >{i}</Day>))}</DaySemana>
      </DivCadastro>
         
       )) }
    </>
  }
}



  export default Habitos