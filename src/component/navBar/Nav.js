import React from 'react'
import { AuthContext } from '../../providers/auth'
import{ NavBar, H1, Img } from  './NavStyles'

const Nav = () => {
  const {image} = React.useContext(AuthContext)
 
  return (
    <>
   <NavBar>
    <H1>TrackIt</H1>
    <Img src= {image}  />
   </NavBar>
    </>
    
  )
}

export default Nav