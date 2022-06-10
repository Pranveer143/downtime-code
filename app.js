const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
let isWebsiteDown = false;
app.get("/",(req,res)=>{
    if(isWebsiteDown){
        res.status(500).send({"error":"website is down"});
    }
    else{
        res.status(200).send({"success":"webiste is up"});
    }
})

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
})