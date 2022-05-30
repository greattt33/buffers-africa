import {createGlobalStyle} from "styled-components"

 const GlobalStyle= createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    @media screen and (max-width:480px){
        overflow-x:hidden;
    }
}
body{
    color:#6c82a3;
    background-color:aliceblue;
    margin:0px;
    width:100vw;
    height:auto;
    font-family:"Fira Sans", sans-serif;
}
   
`
export default GlobalStyle