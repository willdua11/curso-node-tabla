require('colors');

/* AL PONER ASYNC YA LO HACE PROMESA */
const tablaDe = async (nro, listar, hasta = 10) => {
    /* OP1
    return promesa = new Promise((resolve, reject) => {*/
    try {
        const fs = require('fs');
        const ultimoNumero = hasta;
        let salida = '', consola = '';
        consola += `===================\n`.green;
        salida += `===================\n`;
        consola += `  Tabla del ${nro} \n`.red;
        salida += `  Tabla del ${nro} \n`
        consola += `===================\n`.green;
        salida += `===================\n`;
     
    
        for (let i = 1; i <= ultimoNumero; i++) {
            consola += `${nro} ${'x'.blue} ${i} ${'='.gray} ${ nro * i}\n`;
            salida += `${nro} x ${i} = ${ nro * i}\n`;
        }
    
        if (listar) {
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${nro}.txt`, salida);
        return(`tabla-${nro}.txt`)
    } catch (error) {
        return error;
    }        
}

module.exports = {
    tablaDe
}