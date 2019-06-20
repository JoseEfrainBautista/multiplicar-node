const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listrTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listrTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */


/*  */