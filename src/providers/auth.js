import React, { useState } from "react";
import { Login } from '../servidores/Servers';
export  const AuthContext = React.createContext({})

export const AuthProvider = (props)=> {
  const [token, setToken] = useState('')
console.log(token)

function PostLogin (logim){
  
  Login(logim)
    .then((res) =>{
     setToken(res.data.token)
  
    })
    .catch((err) =>{
      console.log(err)
    })

    
}

return (
  <AuthContext.Provider value={{token, PostLogin}}>
    {props.children}
  </AuthContext.Provider>
)
}

