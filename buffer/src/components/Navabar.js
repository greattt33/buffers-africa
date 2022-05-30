import React from "react"
import styled from "styled-components"
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"
import logo from "../images/bufferMain.jpg"

const Navbar=()=>{
   

    return(
        <Nav >
            <Logo>
             <Link to="/" style={{textDecoration:"none"}}><img src={logo} alt="lsetf brand"/></Link>
            </Logo>  
        </Nav>
    )
}

const Nav=styled.nav`
  width:100vw;
  height:100px;
  position:relative;
  display: flex;
  background-color:white;
  flex-direction:row;
  padding-left:30px;
  padding-right:30px;
  
 
 
`


const Logo=styled.div`
  width:150px;
  height:80px;
  display:grid;
  align-self:flex-start;
  place-items:center;
  img{
      width:100%;
      height:100%;
  }
  @media screen and (max-width:480px){
      width:40%;
      height:80px;
  }
`


export default Navbar