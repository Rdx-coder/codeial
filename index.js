  
  const { application } = require('express');
const express = require('express');
   const cookieparser = require('cookie-parser');

    const app = express();
   
    const port = 5555;

    const expresslayouts= require("express-ejs-layouts");
const { set } = require('mongoose');



    const db = require('./config/mongoose');

    app.use(express.urlencoded());
    
    app.use(cookieparser());

    app.use(expresslayouts);

    // extrect style  and script  from sub pages  into the layouts

   app.set('layout extractStyles', true)
    app.set('layout extractScripts', true)


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
    