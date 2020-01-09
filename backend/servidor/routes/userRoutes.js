const express = require("express");
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
app.use(expressjwt({ secret: 'superclave' }).unless({ path: ['/login', '/', '/register'] }));
const SECRET_KEY = "superclave";
var token;

let listaUsuarios = [];
listaUsuarios.push({ "id": 0, "username": "alex", "email": "alex@gmail.com", "password": "123abc", "rol": "admin", "active": true });
listaUsuarios.push({ "id": 1, "username": "aitor", "email": "aitor@gmail.com", "password": "aitor", "rol": "common", "active": true });
listaUsuarios.push({ "id": 2, "username": "admin", "email": "alexelfandi60@gmail.com", "password": "admin", "rol": "admin", "active": true });



router.post('/login', (req, res) => {

    for (const key in listaUsuarios) {
        console.log(listaUsuarios[key].active);

        if (listaUsuarios[key].username == req.body.username) {
            // nombre de usuario encontrado
            console.log("usuario encontrado", listaUsuarios[key].username, "=", req.body.username);

            // usuario activo
            if (listaUsuarios[key].password == req.body.password) {
                // contraseña encontrada
                if (listaUsuarios[key].active == true) {
                    
                    console.log("usuario Encontrado");
                    const expiresIn = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: listaUsuarios[key].id },
                        SECRET_KEY, {
                        expiresIn: expiresIn
                    });
                    const dataUser = {
                        username: req.body.username,
                        email: req.body.email,
                        accessToken: accessToken,
                        expiresIn: expiresIn,
                        rol: listaUsuarios[key].rol
                    }
    
                    res.cookie("SESSIONID", accessToken, { httpOnly: true, secure: true });
                    res.status(203).send({ dataUser });
                    
                    break;
                } else {
                    res.status(409).send("usuario no activo");
                }
            } else {
                res.status(409).send("contraseña incorrecta");
            }
        }
    }
    res.status(409).send("usuario no encontrado");


});


router.post('/register', (req, res) => {


    const expiresIn = 24 * 60 * 60;
    const accessToken = jwt.sign({ id: req.body.id },
        SECRET_KEY, {
        expiresIn: expiresIn
    });

    const datauser = {
        username: req.body.username,
        email: req.body.email,
        accessToken: accessToken,
        expiresIn: expiresIn,
        rol: req.body.rol
    }

    const user = {
        username: req.body.username,
        email: req.body.email,
        rol: req.body.rol,
        password: req.body.password,
        active: true
    }

    listaUsuarios.push(user);

    res.send(datauser);
});

router.post(`/getUsuarioById`, (req, res) => {
    usuario = listaUsuarios.find(e => e.id == req.body)
    res.send(usuario);
});

router.post(`/editarUsuario`, (req, res) => {

    let idUsuario = req.body.id;
    let indiceUsuarioEnLista = listaUsuarios.findIndex((e) => e.id == idUsuario);


    listaUsuarios[indiceUsuarioEnLista] = req.body;

    console.log(listaUsuarios[indiceUsuarioEnLista]);
    res.send(listaUsuarios[indiceUsuarioEnLista]);
});

router.get("/listaUsuarios", (req, res) => {


    res.send(listaUsuarios);

});

module.exports = router;