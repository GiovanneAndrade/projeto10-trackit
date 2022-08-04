import Styled from "styled-components";

export const Container = Styled.div`
display: flex;
flex-direction: column;

`
export const  Input = Styled.input`
width: 300px;
height: 45px;
margin-left: 36px;
margin-bottom:6px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
  ::placeholder,
 
  ::-webkit-input-placeholder {
    
    padding-left: 11px;
    font-size: 19.976px;
    color: #DBDBDB;
  }
`
export const Button = Styled.button`
width: 306px;
font-size: 20.976px;
color: #FFFFFF;
height: 45px;
margin-top:6px;
background: #52B6FF;
border-radius: 4.63636px;
border: none;
margin-left: 36px;
cursor: pointer;
 
`
export const P = Styled.p`
margin-left: 74px;

color: #52B6FF;
cursor: pointer;

`
 


export default Container 
