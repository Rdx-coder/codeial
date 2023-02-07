  
  const { application } = require('express');
const express = require('express');
   
    const app = express();
   
    const port = 5555;

    const expresslayouts= require("express-ejs-layouts");

    app.use(expresslayouts);

    app.use(express.static('./assets'));
//use express router

app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');

app.set('views','./views');


    app.listen(port,function(err){
      
        if(err)
        {
            // console.log('error',err);
          
            console.log(`Erroris runing the server : ${err}`);
           
            return;
        }
       
        console.log(`Server is running i the port : ${port}`);
    
    });
    