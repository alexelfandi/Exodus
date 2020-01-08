
const express = require("express");
const bodyParser = require('body-parser');
var cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

const firebase = require("firebase");
// Required for side-effects
require("firebase/functions");


// Routes
var usuariosRoutes = require("./routes/userRoutes");
app.use("/", usuariosRoutes);
var productosRouter = require("./routes/productosRoutes")
app.use("/", productosRouter);
// Routes


var admin = require("firebase-admin");
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/', (req, res) => {
    res.send("hello from home");
});





