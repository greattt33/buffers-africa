import React,{useState} from 'react'
import styled from "styled-components"
import BigCard from "./BigCard"
import Card from "./Card"
import {Navigate} from "react-router-dom"
import {MdSecurity} from "react-icons/md"
import {FaEye,FaUserAlt,FaLock,FaInfinity} from "react-icons/fa"
import Phone from "../images/phone.png"
import Growth from "../images/growth.png"
import card from "../images/card.png"

const Body = () => {
  const [goToSignUp2,setGoToSignUp2]=useState(false)

  if(goToSignUp2){
    return <Navigate to="/signup"/>
  }
  const bodyStuffs= document.querySelectorAll(".body")
  const observer= new IntersectionObserver(
    entries=>
    entries.forEach(entry=>{
      entry.target.classList.toggle(".show",entry.isIntersecting)
    }),{
      threshold:1
    }
  )
  
  bodyStuffs.forEach(bodyStuff=>{
    observer.observe(bodyStuff)
  })

 

  return (
    <BodyStyle>
      <BigCardSection className='body'>
        <BigCard image={card} main="Onboard Your Staff " text="Pay your company pension contribution with no hassle"/>
        <BigCard image={Growth} main="Grow Your Pension" text="Make your pension work for you with our range of portfolio"/>
      </BigCardSection>
      <PhoneSection className='body'>
        <PhoneImage>
          <img src={Phone} alt="phone"/>
        </PhoneImage>
        <PhoneSectionText className='body'>
           Save, Grow, and Monitor your pension right from your mobile phone
        </PhoneSectionText>
      </PhoneSection>

      <SmallCardSection className='body'>
        <Card image={<MdSecurity/>} main="Built with Security" text="The platform is built with security in mind, managed by the best pension manager in the industry"/>
        <Card image={<FaEye/>} main="Transperency is Top priority" text="You can view and monitor your fund while it grow"/>
        <Card image={<FaUserAlt/>} main="Easy To Use " text="User friendly and responsive platform for quick,easy, and satisfying process "/>
        <Card image={<FaLock/>} main="Your Money Is  In Safe Hand " text="Buffer Africa is regulated by the National Pensions Commission "/>
        <Card image={<FaInfinity/>} main="Reliable Platform " text="Our system operate with 99% runtime and is certified with the highest standard"/>
      </SmallCardSection>  
      <div className="last body">
        <p>Start Saving Today with <span>Buffer</span></p>
        <p><b>Open a pension account in 10 minutes,</b> right from your phone</p>
        <button onClick={()=>setGoToSignUp2(true)}>Save Now</button>
      </div>
    </BodyStyle>
  )
}

const BodyStyle=styled.div`
 width:100%;
 display:flex;
 flex-direction:column;
 gap:30px;
 color: #0c1825;
 height:auto;
 .last{
   width:100%;
   height:auto;
   margin-top:50px;
   margin-bottom:50px;
   display:flex;
   text-align:center;
   justify-content:center;
   flex-direction:column;
   gap:30px;
   p:nth-child(1){
     width:100%;
     font-size:35px;
     font-weight:bold;
     span{
       color:blue;
     }
     @media screen and (max-width){
       font-size:24px;
     }
   }
   p:nth-child(2){
     width:100%;
     font-size:19px;
     @media screen and (max-width){
       font-size:15px;
     }
   }
   button{
      height:60px;
      font-size:large;
      color:white;border-radius:10px;
      width:150px;
      align-self:center;
      background-color:#0c1825;
      margin-top:20px;
      border:none;
      &:hover{
        background-color:darkblue;
      }
      @media screen and (max-width:480px){
        height:40px;
        width:100px;
      }
    }
  }

`
const BigCardSection=styled.div`
.show{
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
 width:90%;
 display:flex;
 flex-direction:row;
 gap:50px;
 justify-content:center;
 height:auto;
 @media screen and (max-width:480px){
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:100%;
 }
`
const PhoneSection=styled.div`
.show{
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
 width:100%;
 display:flex;
 flex-direction:row;
 align-items:center;
 gap:50px;
 height:auto;
 margin-bottom:50px;
 margin-top:50px;
 justify-content:center;
 gap:30px;
 flex-wrap:wrap;
 height:auto;
 @media screen and (max-width:480px){
   gap:10px;
 }
`
const PhoneImage=styled.div`
 width:30%;
 display:grid;
 place-content:center;
 gap:30px;
 height:200px;
 img{
   width:100%;
   height:100%;
 }
 @media screen and(max-width:480px){
   width:80%;
   height:250px;
 }
`
const PhoneSectionText=styled.p`
.show{
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
 width:50%;
 display:grid;
 font-size:24px;
 font-weight:bold;
 place-content:center;
 word-wrap: break-word;
 height:auto;
 @media screen and (max-width){
   font-size:19px;
 }
`
const SmallCardSection=styled.div`
.show{
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
 width:90%;
 display:flex;
 flex-direction:row;
  height:800px;
  gap:30px;
 align-items:center;
 justify-content:center;
 flex-wrap:wrap;
 @media screen and (max-width:480px){
  width:100%;
  flex-direction:column;
  flex-wrap:wrap;
  height:auto;
  justify-content:center;
  gap:20px;
 }
`





export default Body