import React,{useState} from 'react'
import styled from "styled-components"

import {Navigate} from "react-router-dom"
import axios from "axios"


const SignUp = () => {
    const [fname,setFname]=useState("")
    const [lname,setLname]=useState("")
    const [email,setEmail]=useState("")
    const [success,setSuccess]=useState(false)
    
    if(success){
        return <Navigate to="/success"/>
      }
    
    
    const postData=async()=>{

       await  axios.post("http://localhost:3001/api",{
           fname:fname,
           lname:lname,
           email:email
         }).then(
             res=>{
                
                 if(res.data.redirect==="/success"){
                    window.location="/success"
                 }
                 else if(res.data.redirect==="/success"){
                    window.location="/failure"
                 }
             }
         )
    }

  return (
    <SignStyle>
        <div>
          <p>
           Get early access.
          </p>
          <p>
            Excited to try Buffer? we are too. Join the waitlist
          </p>

        </div>
        
        <div>
            <section>
                <label>First Name</label>
                <input onChange={(e)=>setFname(e.target.value)} name="fname" required  placeholder="Enter your first name"/>
                <label>Last Name</label>
                <input onChange={(e)=>setLname(e.target.value)} name="lname" required placeholder="Enter your last name"/>
                <label>Email Address</label>
                <input onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter your Email address"/>
                <button onClick={()=>{
                    postData()
                    setSuccess(true)
                }}>Sign Up</button>
            </section>
        </div>
    </SignStyle>
  )
}


const SignStyle=styled.div`
  width:100%;
  height:850px;
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content:center;
  align-items:center;
div:nth-child(1){
      display:flex;
      flex-direction: column;
      align-items:center;
      gap:30px;
      width:35%;
      justify-content:center;
      @media screen and (max-width:480px){
          width:100%;
          height:auto;
      }
  }
  p:nth-child(1){
      font-size:35px;
      font-weight:bold;
      display:grid;
      text-align:center;
      width:80%;
      padding-left:50px;
      place-items:center;
      color:#0c1825;
      @media screen and (max-width:480px){
          font-size:24px;
          font-weight:bold;
          width:90%;
          padding-left:0px;
          height:auto;
          margin:0px;
      }
  }
  p:nth-child(2){
      font-size:24px;
      font-weight:medium;
      display:grid;
      text-align:center;
      width:80%;
      padding-left:50px;
      place-items:center;
      color:#0c1825;
      @media screen and (max-width:480px){
          font-size:19px;
          font-weight:medium;
          width:90%;
          padding-left:0px;
          height:auto;
          margin:0px;
      }
  }


  div:nth-child(2){
      width:60%;
      height:80%;
      display:grid;
      @media screen and (max-width:480px){
          width:80%;
      }
      
      place-content:center;
      section{
        background-color:skyblue;
        align-self:center;
        border-radius:10px;
          label{
              display:block;
              align-self:center;
              color:#0c1825;
              margin-top:10px;
              margin-bottom:10px;
          }
          width:400px;
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
                    background-color:blue;
                }
                @media screen and (max-width:480px){
                    font-size:medium;
                    height:40px;
                    width:100px;
                } 
            }
          height:400px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          input{
            background-color:white;
            align-self:center;
            
            :focus{
                border:2px solid blue;
            }
            border-radius:10px;
            border:none;
            width:60%;
            height:60px;
            @media screen and (max-width:480px){
                height:40px;
            }
            ::placeholder{
                color:steelblue;
                text-align:center;
            }
          }
      }
  }
`

export default SignUp