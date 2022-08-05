import Styled from "styled-components";

export const DivCadastro =Styled.div` 
width: 340px;
height: 180px;
margin-left: 17px;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
 
background: #FFFFFF;
border-radius: 5px;
`
export const Cancelar = Styled.button`
width: 84px;
font-size: 15.976px;
height: 35px;
border:none;
color:#52B6FF;
background: #fff;
border-radius: 4.63636px;
cursor: pointer;
`
export const Salvar = Styled.button`
width: 84px;
font-size: 15.976px;
height: 35px;
border:none;
background: #52B6FF;
color:#fff;
border-radius: 4.63636px;
cursor: pointer;
`
export const DivBtns = Styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 23px;
margin-left:115px;
margin-right:16px;
`
export const Day = Styled.div`
min-width: 30px;
min-height: 30px;
font-size: 19.976px;
background: #fff;
border: 1px solid #D5D5D5;
border-radius: 5px;
color: #DBDBDB;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
 
export const DaySemana = Styled.div`
display: flex;
gap: 4px;
margin-right:58px;
padding-bottom: 29px;
`
export const Input2 = Styled.input`
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
    color: #DBDBDB;
  }
`
export default DivCadastro