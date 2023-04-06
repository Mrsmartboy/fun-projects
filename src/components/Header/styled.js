import styled from 'styled-components'

export const NavContainer=styled.nav`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
margin-top: 25px;
margin-bottom: 25px;
 height: 60px;
 margin-left: 100px;
 margin-right: 100px;
 
`


export const Name = styled.p`
   color: #1d4ed8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbeafe;
  font-size: 30px;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  padding-right: 5px;
  padding-left: 5px;
`

export const ListContainer = styled.ul`
 list-style-type: none;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;

 
`
export const ItemContainer=styled.li`
   width: 100%;
   margin-right: 30px;

`

export const Image=styled.img`
width: 42px;
`