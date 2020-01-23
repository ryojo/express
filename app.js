const express = require('express');
 const app = express();
// agora estamos a prendendo a mexer no express utilizando rotas

app.get( "/", function(req,res){
  res.send("<b>bem vindo!</b> ")  
})

app.get( '/ola' , function(req,res){
  res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req,res){
 res.send("sou um rapaz de 22 anos aprendendo express")   
})

// aprendendo paramêtros

app.get("/ola/:nome/:profissao/:cor",  function(req,res){

res.send("<h1>"+"Olá "+req.params.nome+ " Profissao: " + req.params.profissao + " cor: " + 
req.params.cor+ "</h1>") 
})


//isso serve para criar o nosso servidor de acordo com express
//ele utiliza o método callback para disparar um evento.
 app.listen(8081, function(){
     console.log("a porta do servidor esta se comunicando")
 });