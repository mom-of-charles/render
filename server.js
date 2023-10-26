    
    //导入express
    const express = require('express')
   const  server=express()
   

    const PORT=3001
   // server.use('/todos',express.static(__dirname +'/todos'))
 
    server.get('/api/',function(req,res){
        res.send('hello world')

    })

    server.use(express.static('todos'))

    server.listen(PORT)
    console.log('server is running at '+PORT)
