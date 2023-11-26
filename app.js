const { tablaDe } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

tablaDe(argv.b, argv.l, argv.h).then(nombreArchivo => console.log(nombreArchivo.rainbow + ' creado')).catch(err => console.err(err));


/*
MANEJAR ARGUMENTOS EN CONSOLA
console.log(process.argv);
const  [ , , arg3] = process.argv;
const [ , base] = arg3.split('=');

console.log(arg3);
console.log(base);
*/
