const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }


}

const { argv } = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('borrar', 'Lista los elementos por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', { opts, completado: { alias: 'c', default: true, desc: 'MArca como completada o pendiente la tarea' } })
    .help();


module.exports = {
    argv
}