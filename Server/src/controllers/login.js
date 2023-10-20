const usersArray = require("../utils/users");

const  login = function(req, res) {

    //http://localhost:3001/login?email=gama@gmail.com&password=123456a GET

    //http://localhost:3001/rickandmorty/login?email=gama@gmail.com&password=123456a GET
    const {email, password} = req.query;
    usersArray.forEach(element => { //{}
        if(element.email === email && element.password === password){
            const access = true;
            //return res.status(200).send(JSON.stringify({access:true}));
            return res.status(200).json({access})
        }else{
            const access = false;
            return res.status(200).json({access})
            //return res.status(200).send(JSON.stringify({access:false}));
        }
        
    })
}
  
module.exports = login;