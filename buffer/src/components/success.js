import React from "react"
import styled from "styled-components"

const Success = () => {
    
  return (
    <SuccessStyle>
        <p>Hurrah, You have successfully join the waitlist. You are going to be part of the first to try out our product when it is ready</p>
        
    </SuccessStyle>
  )
}

const SuccessStyle=styled.div`
  width:100%;
  height:500px;
  display:grid;
  place-items: center;
  
  
  p{
      font-size:48px;
      width:80%;
      word-wrap:break-word;
      text-align:center;
      font-weight: bold;
      @media screen and (max-width:480px){
          font-size:24px;
      }
  }
  @media screen and (max-width:480px){
      width:100%;
      height:auto;
      
}
`

export default Success