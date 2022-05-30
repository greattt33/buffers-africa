import React,{useState} from 'react'
import styled from "styled-components"
import {Navigate} from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"



const Card = (props) => {
  const [goToSignUp3,setGoToSignUp3]=useState(false)
   

  if(goToSignUp3){
    return <Navigate to="/signup"/>
  }
  return (
    <CardStyle>
      <CardImage>
        {props.image}
      </CardImage>
      <CardText>
        <p>{props.main}</p>
        <p>{props.text}</p>
        <button onClick={()=>setGoToSignUp3(true)}>Learn More <FaArrowRight/></button>
      </CardText>
      
    </CardStyle>
  )
}

const CardStyle=styled.div`
  width:45%;
  height:250px;
  background-color:lavender;
  display:flex;
  flex-direction:row;
  border-radius:10px;
  gap:30px;
  align-items:center;
  justify-content:center;
  @media screen and (max-width:480px){
    flex-direction:column;
    width:80%;   
  }
`
const CardImage=styled.div`
  width:40%;
  display:grid;
  place-items:center;
  height:100%;
  font-size:80px;
  @media screen and (max-width:480px){
    font-size:60px;
    width:100%;
    height:40%;
  }
  
`
const CardText=styled.div`
  width:60%;
  height:80%;
  display:flex;
  gap:10px;
  padding-bottom:20px;
  padding-right:20px;
  padding-top:20px;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  button{
    background-color:lavender;
    border:none;
    cursor: pointer;
  }
  
  p:nth-child(1){
    width:100%;
    margin:0px;
    word-wrap:break-word;
    font-size:24px;
    display:grid;
    font-weight:bold;
  }
  p:nth-child(2){
    width:90%;
    margin:0px;
    word-wrap:break-word;
    font-size:19px;
  }
  @media screen and (max-width:480px){
    width:100%;
    height:40%;
    p:nth-child(1){
      font-size:19px;
      text-align:center; 
    }
    overflow-x:visible;
    p:nth-child(2){
      font-size:15px;
      text-align:center;
      place-content:center;
    }
  }
`
export default Card