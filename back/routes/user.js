var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
var sql = require("mssql");
var sha256 = require("sha256");
var jwtUtils = require('../utils/jwt.utils')

router.use(bodyParser.json());

router.post('/register', async function (req, res) {
    try {
        var username = req.body.username;
        var password = req.body.password;

        if( username == null || password == null){
            return res.status(400).json({ 'error': 'missing parameters'});
        }

        await getUser(async function(data){
            await data.forEach(element => {
                if(req.body.username == element.username){
                    return res.status(401).json({'error':'user already exists'});
                } 
            });
            let param = [username,sha256(password),1];
            db.query('INSERT INTO User (username,password,role) values (?,?,?)',param,function(err,result){
                if(err){ console.log("Erreur INSERT:"+err); }else { console.log("Insert ok"); }
            });
            return res.status(200).json({'message':'Success'});
        });

    } catch (err) {
        res.sendStatus(500);
    }
});

router.post('/login', async function (req, res) {
    try {
        let body={login:req.body.username ,password:req.body.password};
        let erreur;
        let id;
        
        if(req.body.username != null && req.body.password != null){
            await getUser(async function(data){
                await data.forEach(element => {
                    cpt = 0;
                    if(req.body.username == element.username){
                        if(sha256(req.body.password) == element.password){
                            cpt = 1;
                            id = element.id;
                        }else{
                            erreur = "mot de passe incorrect";
                        }
                    }else{
                        erreur = "utilisateur introuvable";
                    }
                });
                if(cpt == 1){
                    let token = jwtUtils.generateTokenForUser(req.body.username);
                    db.query('UPDATE User SET token = \'' + token + '\' WHERE User.id =\''+id+'\'', token, function(err,result){
                        if(err){ console.log("Erreur INSERT:"+err); }else { console.log("Insert ok"); }
                    });
                    res.status(200).json({
                        'response' : 'Connexion',
                        'token' : jwtUtils.generateTokenForUser(req.body.username)
                    });
                }
                else
                {
                    res.json(erreur);
                }
            });

        }
        else
        {
            res.json(erreur);
        }
        
    } catch(err) {
        res.sendStatus(500);
    }
});

async function getUser(callback){
    let result="";
        db.query("SELECT id,username,password FROM User",function(err, result){
            if(err) console.log(err)
            result = JSON.parse(JSON.stringify(result));
            callback(result);
        });
}
module.exports = router;