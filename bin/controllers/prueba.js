'use strict';

function hola(req, res){
    let parametros = req.body.msm
    let prueba ='prueba'
    res.status(200).send(parametros);
}

module.exports ={
    hola
}
