// requires

//El fsmódulo proporciona una API para 
//interactuar con el sistema de archivos 
//de manera cercana a las funciones 
//POSIX estándar.
const Fs = require('fs');
const colors = require('colors');

let listrTabla = (base, limite) => {
    console.log('===================='.green);
    console.log(`==== tabla de ${base} ====`.green);
    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        //crea y escribe en el archivo (txt)
        Fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else resolve(`table-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listrTabla
}