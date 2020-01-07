const User = require("./auth.dao");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const SECRET_KEY = "secretkey123456";

exports.createUser = (req, res, next) =>{
    const newUser = {
        id: req.body.id,
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }

    User.create(newUser, (err, user)=>{
        if (err) {
            return res.status(500).send("server Error");
        } else {
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({id: user.id}, 
                SECRET_KEY, {
                expiresIn: expiresIn
            });

            res.send({user});
        }
    });
}

