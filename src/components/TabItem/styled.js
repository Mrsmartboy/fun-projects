import styled from "styled-components";

export const TabItem1 = styled.li`
   margin: 10px;
`
export const Button=styled.button`
  border: none;
  background-color: transparent;
  color: ${props=>props.isActive?'#3e4c59':'#9aa5b1'};  
  cursor: pointer;
  outline: none;
  font-size: 20px;
  font-weight: 500;
   border-bottom: ${props=>props.isActive&&'2px solid #0b69ff'};
`