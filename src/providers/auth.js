import React, { useState } from "react";
import { Login } from '../servidores/Servers';
 
export  const AuthContext = React.createContext({})
 


export const AuthProvider = (props)=> {
  const [token, setToken] = useState('')
  const [image, setImage] = useState('')
  const [disabled, setDisabled] = useState(false)

console.log(image)
function PostLogin (logim){
 
  
  Login(logim)
    .then((res) =>{
     setToken(res.data.token)
     setImage(res.data.image)
     
    })
    .catch((err) =>{
     
       
      alert('Digite email e senha corretamente')
      setDisabled(false)
    
    })

    
}

return (
  <AuthContext.Provider value={{token, image, PostLogin, disabled, setDisabled}}>
    {props.children}
  </AuthContext.Provider>
)
}

