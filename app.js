
const express = require("express")
const  cors =require("cors")

const bodyParser= require("body-parser")

const axios= require("axios")

const https= require("https")

const app= express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.use(cors())

const PORT = process.env.PORT || 3001; 

app.post("/api", (res,req)=>{
    console.log(res.body)
  axios.post('https://us14.api.mailchimp.com/3.0/lists/bd249748db/members',{

                       email_address:res.body.email,
                       status:"subscribed",
                       merge_fields:{
                           FNAME:res.body.fname,
                           LNAME:res.body.lname,
                       }
                    },{
             auth:{
                username:"buffer",
                password:"94d5146f105f37a8182a397eb01f9946-us14"
            }
         },
         (res,req,next)=>{
            if(res.status===200){
                var redir= {redirect:"/success"};
                return res.json(redir)
            }else{
                var redir= {redirect:"/failure"};
                return res.json(redir)
            }
           
    }
         )
        
         .catch(error=>{
             console.log("error:",error)
             
            })
  
})


       
    

app.listen(PORT, ()=>{
    console.log("server is runnninig")
})