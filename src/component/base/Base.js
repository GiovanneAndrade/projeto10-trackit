import React from 'react'
import { Link } from 'react-router-dom'
import { BasePg2, ButtonBase, Phoje, Pcentral, DivInt, DivP} from './BaseStyles'
import Habitos from '../../pages/habitos/Habitos';
import Historico from '../../pages/historico/Historico';

const Base = () => {
  return (
    <>
   
    <BasePg2>
        <Link to="/Habitos">
        <Phoje>Habitos</Phoje>
        </Link>
       <Link to="/Hoje">
          <ButtonBase>
            <DivInt>
              <DivP>
              <Pcentral>Hoje</Pcentral>
              </DivP>
            </DivInt>
          </ButtonBase>
       </Link>
      
        <Link to="/Historico">
         <Phoje>Historico</Phoje>
        </Link>
       
    </BasePg2>
    </>
    
  )
}

export default Base