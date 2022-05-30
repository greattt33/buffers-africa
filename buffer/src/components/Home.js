import React from 'react'
import styled from "styled-components"
import Hero from "./Hero"
import Body from "./Body.js"


function Home() {
  return (
    <HomeStyle>
      <Hero/>
      <Body/>
    </HomeStyle>
  )
}
const HomeStyle=styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
  gap:50px;
  justify-content:center;
`

export default Home