var jwt = require ('jsonwebtoken');

const JWT_SIGN_SECRET = "keltiAppByHugoEtMaybePierreLeBgDu16e"

module.exports = {
    generateTokenForUser: function(userData){
        console.log(userData);
        return jwt.sign({
            data : userData
        },
        JWT_SIGN_SECRET,
        {
          expiresIn:"1m"  
        });
    }
}