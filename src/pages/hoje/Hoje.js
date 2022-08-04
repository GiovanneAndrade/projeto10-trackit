import { Link } from 'react-router-dom'

import React from 'react'
import Nav from '../../component/navBar/Nav'
import Base from '../../component/base/Base'

const Hoje = () => {
  return (
    <>
    <Nav/>
     <Link to='/Historico'>
     <div>Hoje</div>
    </Link>
    <Base/>
    </>
   
   
  )
}

export default Hoje