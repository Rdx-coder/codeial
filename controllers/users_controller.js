const User = require('../models/user');

module.exports.profile = (req, res) => {
    //    res.end("<h1>user profile</h1>");
    //    return res.render("./user_profile",{
    //    title :"user profile"
    //    });
    if (req.cookies.user_id) {
        User.findById(req.cookies.user_id, function (err, user) {
            if (user) {
                return res.render('user_profile', {
                    title: "User Profile",
                    user: user
                });
            }
            return res.redirect('/user/sign-in');
        });
    }
    else {
        return res.redirect('/user/sign-in');
    }
};

module.exports.post = (req, res) => {
    res.end("<h1>user post</h1>");
};

// render the sign up page  
module.exports.signUp = function (req, res) {
    return res.render('user-sign-up', {
        title: "codeial | Sign Up"
    })
}

//render the sign in page
module.exports.signIn = function (req, res) {

    return res.render('user-sign-in', {

        title: "codeial | Sign In"

    })
}

//get the sign up data
module.exports.create = function (req, res) {

    if (req.body.password != req.body.confirm_password) {

        return res.redirect('/');
    }
    User.findOne({ email: req.body.email }, function (err, user) {

        if (err) { console.log('error in finding user in signing up'); return }

        if (!user) {
            User.create(req.body, function (err, user) {

                if (err) { console.log('error in creating user while signing up  '); return }

                return res.redirect('/users/sign-in');

            })
        } else {
            return res.redirect('back');
        }
    });

}

//get the  sign in data

module.exports.createSession = function (req, res) {

    //steps to authenticate

    //find the user 

    User.findOne({ email: req.body.email }, function (err, user) {

        if (err) { console.log('error in finding user in signing in'); return; }

        //handle user  found

        if (user) {

            //handle password which does not  match
            if (user.password != req.body.password) {
                return res.redirect('back');

            }
            //handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');


        }

        else {

            //handle user  not found

            return res.redirect('back');

        }

    });



}