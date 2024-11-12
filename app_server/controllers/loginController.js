var logindb = require('../../src/logindb');
var errorlogin = "ERROR!!!"
module.exports.indexGet = (req, res)=>{
    res.render('login');
};

module.exports.indexPost = (req, res)=>{
    if(req.body.username == logindb.username && req.body.password == logindb.password){
        res.render('userpage', {
            "username": req.body.username,
            "password": req.body.password
        });
    }
    else{
        res.render('login',{errorlogin: errorlogin});
    }
};