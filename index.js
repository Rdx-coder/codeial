  
  const express = require('express');
   
    const app = express();
   
    const port = 5555;

//use express router

app.use('/',require('./routes'));


    app.listen(port,function(err){
      
        if(err)
        {
            // console.log('error',err);
          
            console.log(`Erroris runing the server : ${err}`);
           
            return;
        }
       
        console.log(`Server is running i the port : ${port}`);
    
    });