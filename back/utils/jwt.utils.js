var jwt = require ('jsonwebtoken');

const JWT_SIGN_SECRET = "CountOfMoney"

module.exports = {
    generateTokenForUser: function(userData){
        let user = {id:userData};
        console.log(user);
        let token = jwt.sign(user,JWT_SIGN_SECRET,{expiresIn:86399});
        return token;
    },

    verifToken(req){
        let token = req;
        let res;
        jwt.verify(token, JWT_SIGN_SECRET, function(err,decoded){
            if(err){
                res = err; 
            }else{
                res = true; 
            };
        });
        return res;
    }
}