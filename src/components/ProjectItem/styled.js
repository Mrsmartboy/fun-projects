import styled from "styled-components";

export const ProjectContainer=styled.li`
 list-style-type: none;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.06);
  margin: 15px;
  width: 30%;
  border-radius: 10px;
  @media screen and (max-width:576px){
    width: 50%;
  }
  @media screen  and (max-width:992px){
    width: 45%;
  }
 
`

export const ProjectImage = styled.img`
  width: 100%;
`

export const Container= styled.div`
 padding: 10px;
`

export const ProjectTitle=styled.h1`
   color: #183b56;
   font-size: 20px;
   font-weight: bold;
`

export const ProjectDescription= styled.p`
 color: #7b8794;
 font-size: 15px;
 font-weight: 500;
 margin-bottom: 0px;
 line-height: 32px;
 padding-bottom: 15px;
 `

