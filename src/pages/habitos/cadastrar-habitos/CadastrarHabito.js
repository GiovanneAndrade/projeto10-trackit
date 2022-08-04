import React from 'react'
import{DivCadastro, Cancelar, Salvar, DivBtns, Day, DaySemana, Input2} from './CadastraStyles'
import { Input } from '../../pagina-inicial/home/Styles'
const CadastrarHabito = ({selected, setSelected}) => {

  return (
  <>
  <form>
      <DivCadastro>
        <Input2 type="text" placeholder='nome do hábito'/>
        <DaySemana>
         <Day>D</Day> <Day>S</Day> <Day>T</Day> <Day>Q</Day>
         <Day>Q</Day> <Day>S</Day> <Day>S</Day> <Day>D</Day>
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
          <Salvar>Salvar</Salvar>
        </DivBtns>
        

      </DivCadastro>
    </form>
    </>
    
  )
}

export default CadastrarHabito