import Styled from "styled-components";

export const DivHabito = Styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top:20px;
`
export const DivFlex =Styled.div`
display: flex;
flex-direction: column;
align-items: center;

` 
export const  Div1  = Styled.div`
width: 340px;
min-height: 91px;
margin-left: 17px;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
background: #FFFFFF;
border-radius: 5px;
`

export const BotaoAdd = Styled.div`
width: 40px;
height: 35px;
font-size: 27px;
color: #fff;
background: #52B6FF;
border-radius: 4.63636px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 18px;
cursor: pointer;
`
export const H1 = Styled.h1`
margin-left:17px;
font-size: 22.976px;
color: #126BA5;
`
export const P = Styled.p`
margin-left:17px;
margin-top:20px;
`
export const Input3 = Styled.input`
width: 300px;
height: 45px;
margin-bottom:6px;
margin-top:15px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
  ::placeholder{
    padding:11px;
    font-size: 19.976px;
    color: #666666;
  }
`
export const Color = Styled.div` 
color: #FFFFFF;
background-color: red;
`


export default DivHabito
