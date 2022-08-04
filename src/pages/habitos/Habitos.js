
import { Link } from 'react-router-dom'
import React, { useState } from "react"
import{DivHabito, BotaoAdd, H1, P} from './StylesHabitos'
import Base from '../../component/base/Base'
import Nav from '../../component/navBar/Nav'
import CadastrarHabito from './cadastrar-habitos/CadastrarHabito'


const Habitos = () => {
  const [selected, setSelected] = useState(false)
  function BotaoAdicionar (){
    setSelected(true)
    if(selected === true){
      setSelected(false)
    }
  }
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
    { !selected ? ( <></> ) :   <CadastrarHabito selected={selected} setSelected={setSelected} />}
   <Base/>

   
   
    </> 
   
    
  )
}



  export default Habitos