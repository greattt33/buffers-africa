import React from 'react'
import styled from "styled-components"

const Social = (props) => {
  return (
    <SocialStyle>
        <SocialIcon>{props.icons}</SocialIcon>
        <SocialWord>{props.word}</SocialWord>
    </SocialStyle>
  )
}
const SocialStyle=styled.div`
  width:90%;
  height:auto;
  display:flex;
  flex-direction:row;
  gap:20px;
`
const SocialIcon=styled.div`
  width: 30%;
  height: 50px;
  font-size:35px;
@media screen and (max-width:480px){
    font-size:19px;
}
`
const SocialWord=styled.div`
  width:60%;
  height:auto;
  font-size:19px;
`

export default Social