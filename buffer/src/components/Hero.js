import React,{useState} from 'react'
import styled from "styled-components"
import  Piggy from "../images/piggy.png"
import {Navigate} from "react-router-dom"

const Hero = () => {
  const [goToSignUp4,setGoToSignUp4]=useState(false)
   

  if(goToSignUp4){
    return <Navigate to="/signup"/>
  }

  return (
    <HeroStyle>
       <HeroImage>
         <img src={Piggy} alt="heropics"/>
       </HeroImage>
       <HeroText>
         <p>
           After <span>Hardwork</span>,Come <span>Retirement</span> <span>Enjoyment</span>
         </p>
         <p>
           Buffer help you and your team to <span>save for retirement</span> with  no stress from your side</p>
           <button onClick={()=>{
             setGoToSignUp4(true)
           }}>Start Now</button>
       </HeroText>
    </HeroStyle>
  )
}

const HeroStyle=styled.div`
  width:100%;
  height:80vh;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
  @media screen and (max-width:480px){
    gap:20px;
    height:auto;
  }
  
`
const HeroImage=styled.div`
  width:40%;
  height:80%;
  img{
    width:100%;
    height:100%;
    animation:fadeIn 5s;
  -webkit-animation:fadeIn 5s;
  -moz-animation:fadeIn 5s;
  -o-animation:fadeIn 5s;
  -ms-animation:fadeIn 5s;
  @keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  @-moz-keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  @-ms-keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  @-o-keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  @-webkit-keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  }
  @media screen and (max-width:480px){
    width:100%;
  }
  
`

const HeroText=styled.div`
button{
      width:100px;
      height:60px;
      font-size:large;
      border-radius:10px;
      color:white;
      border:none;
      margin-top:30px;
      background-color:#0c1825;
      &:hover{
        background-color:blue;
      }
    }
  width:40%;
  height:auto;
  
  font-size:24px;
  text-align:center;
  animation:fadeIn 5s;
  -webkit-animation:fadeIn 5s;
  -moz-animation:fadeIn 5s;
  -o-animation:fadeIn 5s;
  -ms-animation:fadeIn 5s;
  @keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  @-moz-keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  @-ms-keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  @-o-keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  @-webkit-keyframes fadeIn{
    0% {opacity:0;}
    100%{opacity:1;}
  }
  p:nth-child(1){
    line-height:1.35em;
    width:100%;
    color:#0c1825;
    margin:0px;
    font-size:35px;
    font-weight:bold;
    height:auto;
    span:nth-child(1){
      color:blue;
    }
    span:nth-child(2){
      color:blue;
      text-decoration:line-through;
      text-decoration-color:#0c1825;
    }
    span:nth-child(3){
      color:blue;
    }
    
    @media screen and (max-width:480px){
      font-size:24px;
      width:85%;
      margin-bottom:20px;
    
    }
  }
  p:nth-child(2){
    width:100%;
    margin:0px;
    font-size:24px;
    span{
    font-weight:bold;
    color:blue;
    }
     
  }
  @media screen and (max-width:480px){
    width:100%;
    display: grid;
    place-items:center;
    margin-top:50px;
    p:nth-child(2){
      font-size:19px;
      width:85%;
      margin:0px;
      text-align:center;
    }
    button{
      height:40px;
      font-size:medium;
      margin-top:20px;
      &:hover{
        background-color:blue;
      }
    }
  }

`

export default Hero