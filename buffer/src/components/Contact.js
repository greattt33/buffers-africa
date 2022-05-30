import React from 'react'
import styled from "styled-components"
import {FaFacebook,FaFacebookMessenger,FaTwitter,FaInstagram,FaPhone,FaSearchLocation} from "react-icons/fa"
import Logo from "../images/bufferWhite.png"
//import Social from "./Social"
function Contact() {
  return (
    <ContactStyle>
      <ContactSocial>
        <ContactLogo><img src={Logo} alt="bugger logo"/></ContactLogo>
       
        <SocialMedia>
          
        </SocialMedia>
      </ContactSocial>
      <OtherInfo>
       <Product>
         <p>Product</p>
         <ul>
           <li>Personal</li>
           <li>Remote Workers</li>
           <li>Start Ups</li>
         </ul>
       </Product>
       <Company>
         <p>Company</p>
         <ul>
           <li>About Buffer</li>
           <li>Contact</li>
           <li>Careers</li>
           <li>Blog</li>
           <li>Press</li>
          </ul>
       </Company>
       <Copy>
        Copyright &copy 2022 Buffer Africa. All Right Reserved
      </Copy>
      </OtherInfo>
      
    </ContactStyle>
  )
}

const ContactStyle=styled.div`
  width:100%;
  margin-top:50px;
  height:300px;
  text-align:left;
  color:white;
  display:flex;
  flex-direction:row;
  background-color:#0c1825;
  align-items:center;
  justify-content:space-around;
  @media screen and (max-width:480px){
    flex-direction:column;
    flex-wrap:wrap;
    height:auto;
    gap:50px;
    align-items:space-around;
    justify-content:center;
  }
`
const ContactLogo=styled.div`
   width:100%;
   height:20%;
   display:flex;
   margin-top:30px;
   img{
   width:200px;
   height:60px;
   @media screen and (max-width:480px){
     width: 150px;
     height:50px;
    }
   }
`
const ContactSocial=styled.div`
  width:40%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:space-around;
`
const SocialMedia=styled.div`
  width:100%;
  height:20%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
` 
const OtherInfo=styled.div`
  width:40%;
  height:80%;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  gap:50px;
  justify-content:center;
  @media screen and (max-width:480px){
    width:90%;
    height:auto;
    gap:30px;
  }
`
const Product=styled.div`
  width:80%;
  height:40%;
  display:flex;
  line-height:1.2em;
  flex-direction:column;
 justify-content:center;
 align-items:space-around;
 p{
   margin:0px;
   font-weight:bold;
 }
 ul{
   text-decoration:none;
   li{
     text-decoration:none;
   }
 }
`
const Company=styled.div`
  width:80%;
  height:40%;
  display:flex;
  line-height:1.2em;
  flex-direction:column;
 justify-content:center;
 align-items:space-around;
 p{
   margin:0px;
   font-weight:bold;
 }
 ul{
   text-decoration:none;
   li{
     text-decoration:none;
   }
 }
`
const Copy=styled.div`
 width:100%;
 height:auto;
 display: grid;
 place-content:center;
 margin-bottom:20px;
 font-size:13px;
`
export default Contact