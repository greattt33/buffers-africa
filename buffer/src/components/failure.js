import React from 'react'
import styled from 'styled-components'
import {Navigate} from "react-router-dom"
import SignUp from './SignUp'

const Failure = () => {
    const tryAgain=()=>{
        <Navigate to={<SignUp/>}/>
    }
  return (
    <FailureStyle>
        <p>Ops, Something Wrong or Maybe check your network connection</p>
        <button onClick={tryAgain()}>Try Again</button>
    </FailureStyle>
  )
}

const FailureStyle=styled.div`
  width:100%;
  height:500px;
  display:grid;
  place-items: center;
  button{
                width:150px;
                height:60px;
                border-radius:10px;
                align-self:center;
                color:white;
                border:none;
                margin-top:10px;
                background-color:#0c1825;
                font-size:large;
                &:HOVER{
                    background-color:navy;
                }
                @media screen and (max-width:480px){
                    font-size:medium;
                    height:40px;
                    width:100px;
                } 
  }
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

export default Failure