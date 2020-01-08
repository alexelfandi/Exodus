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


app.post('/register', (req, res) => {


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
        password: req.body.password
    }

    listaUsuarios.push(user);

    res.send(datauser);
});

let listaProductos = [];
listaProductos.push({ "id": 0, "nombre": "Cazo", "imagenes": ["../../assets/imagenes/1.png"], "descripcion": "Un cazo muy bonito", "valor": 280 });
listaProductos.push({ "id": 1, "nombre": "Lampara", "imagenes": [], "descripcion": "Un Lampara muy bonito", "valor": 280 });
listaProductos.push({ "id": 2, "nombre": "Muñeca", "imagenes": [], "descripcion": "Un Muñeca muy bonito", "valor": 280 });
listaProductos.push({ "id": 3, "nombre": "Paco", "imagenes": [], "descripcion": "Un Paco muy bonito", "valor": 280 });
listaProductos.push({ "id": 4, "nombre": "Oro", "imagenes": [], "descripcion": "Un Oro muy bonito", "valor": 280 });
listaProductos.push({ "id": 5, "nombre": "Plata", "imagenes": [], "descripcion": "Un Plata muy bonito", "valor": 280 });
listaProductos.push({ "id": 5, "nombre": "Plata", "imagenes": [], "descripcion": "Un Plata muy bonito", "valor": 280 });

router.get(`/lista`, (req, res) => {
    res.send(listaProductos);
});

module.exports = router;