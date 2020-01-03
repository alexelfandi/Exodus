const express = require("express");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressjwt = require('express-jwt');
var cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const SECRET_KEY = "superclave";
var token;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());
app.use(expressjwt({ secret: 'superclave' }).unless({ path: ['/login', '/', '/register'] }));
const firebase = require("firebase");
// Required for side-effects
require("firebase/functions");

var admin = require("firebase-admin");
/*
var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://exodus-1c469.firebaseio.com"
});
*/
firebase.initializeApp({
    apiKey: 'AIzaSyBR4g0EhBALEb6Ny6U4_QbmyU04lErtkL8',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: 'exodus-1c469',
    databaseURL: 'https://exodus-1c469.firebaseio.com'
  });







// npm run start // inicia servidor
let listaProductos = [];
listaProductos.push({ "id": 0, "nombre": "Cazo", "imagenes": ["../../assets/imagenes/1.png"], "descripcion": "Un cazo muy bonito", "valor": 280 });
listaProductos.push({ "id": 1, "nombre": "Lampara", "imagenes": [], "descripcion": "Un Lampara muy bonito", "valor": 280 });
listaProductos.push({ "id": 2, "nombre": "Muñeca", "imagenes": [], "descripcion": "Un Muñeca muy bonito", "valor": 280 });
listaProductos.push({ "id": 3, "nombre": "Paco", "imagenes": [], "descripcion": "Un Paco muy bonito", "valor": 280 });
listaProductos.push({ "id": 4, "nombre": "Oro", "imagenes": [], "descripcion": "Un Oro muy bonito", "valor": 280 });
listaProductos.push({ "id": 5, "nombre": "Plata", "imagenes": [], "descripcion": "Un Plata muy bonito", "valor": 280 });
listaProductos.push({ "id": 5, "nombre": "Plata", "imagenes": [], "descripcion": "Un Plata muy bonito", "valor": 280 });
let listaUsuarios = [];
listaUsuarios.push({ "id": 0, "username": "alex", "email": "alex@gmail.com", "password": "123abc", "rol": "admin", "active": true });
listaUsuarios.push({ "id": 1, "username": "aitor", "email": "aitor@gmail.com", "password": "aitor", "rol": "common", "active": true });
listaUsuarios.push({ "id": 2, "username": "admin", "email": "alexelfandi60@gmail.com", "password": "admin", "rol": "admin", "active": true });






const router = express.Router();
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
app.get(`/lista`, (req, res) => {
    res.send(listaProductos);
});
app.post(`/getUsuarioById`, (req, res) => {
    usuario = listaUsuarios.find(e => e.id == req.body)
    res.send(usuario);
});
app.post(`/editarUsuario`, (req, res) => {

    let idUsuario = req.body.id;
    let indiceUsuarioEnLista = listaUsuarios.findIndex((e) => e.id == idUsuario);


    listaUsuarios[indiceUsuarioEnLista] = req.body;

    console.log(listaUsuarios[indiceUsuarioEnLista]);
    res.send(listaUsuarios[indiceUsuarioEnLista]);
});
app.post(`/borrarProducto`, (req, res) => {

    let indice = listaProductos.findIndex(x => x.id == req.body.id);

    console.log(indice);
    listaProductos.splice(indice, 1)
    res.status(204).send("hecho");





})
router.get('/', (req, res) => {
    res.send("hello from home");
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

const checkIfAuthenticated = expressjwt({
    secret: SECRET_KEY
});


app.post('/login', (req, res) => {

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

app.get("/listaUsuarios", (req, res) => {


    res.send(listaUsuarios);

});


/*
loginUser = (req, res, next) => {
    const userData = {
        username: req.body.username,
        password: req.body.password,
    }
    // si se encuentra el colega se hace esto
    const resultPassword = userData.password;
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: expiresIn });
    res.send({ userData });
}
*/