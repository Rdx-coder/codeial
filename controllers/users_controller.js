module.exports.profile = (req, res) => {
    // res.end("<h1>user profile</h1>");
   return res.render("./user_profile",{
    title :"user profile"
   });
};

module.exports.post = (req, res) => {
    res.end("<h1>user post</h1>");
};

// render the sign up page  
module.exports.signUp=function(req,res){
    return res.render('user-sign-up',{
        title : "codeial | Sign Up"
    })
}

//render the sign in page
module.exports.signIn=function(req,res){
    return res.render('user-sign-in',{
        title : "codeial | Sign In"
    })
}

//get the sign up data
module.exports.create=function(req,res){
    //to do later
}

//get the  sign in data
module.exports.createSession=function(req,res){
    //to do later
}