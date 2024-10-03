// const express = require('express')
import express from "express";
import fs from 'fs' ; 

const app = express()
app.set('view engine', 'ejs'); 

const port = 3000

app.get('/', (req, res) => {
  res.render('index');            

})

app.get('/user/api', (req, res) => {
  res.send({
    name: "M Anfal Khan",
    SNo: "153",
    class: "SMIT" 
  });
});

app.get('/' , function (req , res) {
  fs.readdir('./files' , function(err , files)
   {if (err) {
    console.error("Error reading directory :" , err);
    return res.status(500).send("Internal Server Error");
   }
    console.log(files);
    res.render("index" , {files : files} );
  })
  
}  )

app.get('/user/api01' , (req , res ) => {
  res.send(  console.log("Khan")
   );
  } )

app.listen(port, () => {
  console.log(`KHAN listening on port ${port}`)
})