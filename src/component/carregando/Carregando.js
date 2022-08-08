import React from 'react'
import { ThreeDots } from  'react-loader-spinner'

export const Carregando = () => {
  return (
    <div className="loand">
    <ThreeDots
      height = "80"
      width = "80"
      radius = "9"
      color = '#fff'
      ariaLabel = 'three-dots-loading'     
      wrapperStyle
      wrapperClass
    />
    </div>
  )
}
