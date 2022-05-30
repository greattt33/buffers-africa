import React,{useState} from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Navigate} from "react-router-dom"
import styled from "styled-components"


const BigCard = (props) => {
  const [goToSignUp,setGoToSignUp]=useState(false)
   

  if(goToSignUp){
    return <Navigate to="/signup"/>
  }

  return (
    <BigCardStyle>
      <BigImage>
        <img src={props.image} alt="object-image"/>
      </BigImage>
      <BigText>
        <p>{props.main}</p>
        <p>{props.text}</p>
        <button onClick={()=>setGoToSignUp(true)}>Learn More <FaArrowRight/></button>
      </BigText>
    </BigCardStyle>
  )
}

const BigCardStyle=styled.div`
 @media screen and (max-width:480px){
    width:80%;
    height:400px;
  }
  width:40%;
  height:400px;
  background-color: lightskyblue;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  gap:30px;
  align-items:center;
  justify-content:center;
 
`
const BigImage=styled.div`
  width:70%;
  height:30%;
  display:grid;
  place-items:center;
  img{
    width:100%;
    height:100%;
  }
  @media screen and (max-width:480px){
    width:80%;
    height:180px;
  } 
  
`
const BigText=styled.div`
  width:100%;
  height:60%;
  display:flex;
  flex-direction:column;
  gap:20px;
  align-items:center;
  button{
    background-color:skyblue;
    border:none;
    cursor: pointer;
  }
  text-align:center;
  justify-content:center;
  @media screen and (max-width:480px){
    
    p:nth-child(1){
      font-size:19px;
    }
    p:nth-child(2){
      font-size:15px;
    }
  }
  p:nth-child(1){
    width:90%;
    word-wrap:break-word;
    margin:0px;
    font-size:24px;
    font-weight:bold;
  }
  p:nth-child(2){
    width:90%;
    margin:0px;

    word-wrap:break-word;
    font-size:19px;
  }
`



export default BigCard