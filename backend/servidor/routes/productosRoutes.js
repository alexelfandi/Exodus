const express = require("express");
const router = express.Router();


let listaProductos = [];
listaProductos.push({ "id": 0, "nombre": "Cazo", "imagenes": ["../../assets/imagenes/1.png"], "descripcion": "Un cazo muy bonito", "valor": 280 });
listaProductos.push({ "id": 6, "nombre": "Cazo", "imagenes": ["../../assets/imagenes/1.png"], "descripcion": "Un cazo muy bonito", "valor": 280 });
listaProductos.push({ "id": 1, "nombre": "Lampara", "imagenes": [], "descripcion": "Un Lampara muy bonito", "valor": 280 });
listaProductos.push({ "id": 2, "nombre": "Muñeca", "imagenes": [], "descripcion": "Un Muñeca muy bonito", "valor": 280 });
listaProductos.push({ "id": 3, "nombre": "Paco", "imagenes": [], "descripcion": "Un Paco muy bonito", "valor": 280 });
listaProductos.push({ "id": 4, "nombre": "Oro", "imagenes": [], "descripcion": "Un Oro muy bonito", "valor": 280 });
listaProductos.push({ "id": 5, "nombre": "Plata", "imagenes": [], "descripcion": "Un Plata muy bonito", "valor": 280 });
listaProductos.push({ "id": 5, "nombre": "Plata", "imagenes": [], "descripcion": "Un Plata muy bonito", "valor": 280 });

router.get(`/lista`, (req, res) => {
    res.writeHead(200,{'content-Type':'text/plain'});//No estoy seguro...Alvaro
    res.send(listaProductos);
});

router.post(`/crearProducto`, (req,res)=>{
    listaProductos.push(req.body);
    res.send(listaProductos);
})

router.post(`/borrarProducto`, (req, res) => {

    let indice = listaProductos.findIndex(x => x.id == req.body.id);

    console.log(indice);
    listaProductos.splice(indice, 1)
    res.status(204).send("hecho");

});

module.exports = router;