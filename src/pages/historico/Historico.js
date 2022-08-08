import React from 'react'
import Base from '../../component/base/Base'
import Nav from '../../component/navBar/Nav'

const Historico = () => {
  return (
    <>
     <Nav/>
     <div className="hist">
      <h2>Historico</h2>
     </div>
     <p className='p'>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
    <Base/>
    </>
   
  )
}

export default Historico