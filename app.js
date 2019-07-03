// const { argv } = require('yargs');
const { argv } = require('./config/yargs')
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        // porHacer.guardarDB().then(archivo => console.log(`Archivo creado: ${archivo}`));
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('listado :', listado);
        for (const tarea of listado) {
            console.log('=======Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================'.green);
        }
        console.log('listar');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        console.log('actualizar');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        console.log('borrar');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}