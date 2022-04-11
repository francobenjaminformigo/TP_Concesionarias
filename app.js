let concesionaria = require('./modulo/moduloConcesionaria')
let fs = require('fs')
let autosDB = JSON.parse(fs.readFileSync('./data/autos.json', 'utf-8'))
let personasDB = JSON.parse(fs.readFileSync('./data/personas.json', 'utf-8'))

console.log('--------------------');
console.log(concesionaria.autos)
console.log('--------------------');
console.log(concesionaria.buscarAuto('AJK516'))
console.log('--------------------');
console.log(concesionaria.venderAuto('ZPO158'))
console.log('--------------------');
console.log(concesionaria.autosParaLaVenta())
console.log('--------------------');
console.log(concesionaria.autosNuevos())
console.log('--------------------');
console.log(concesionaria.listaDeVentas())
console.log('--------------------');
console.log(concesionaria.totalDeVentas())
console.log('--------------------');
console.log(concesionaria.puedeComprar(autosDB[0], personasDB[1]))
console.log('--------------------');
console.log(concesionaria.autosQuePuedeComprar(personasDB[0]))
console.log('--------------------');