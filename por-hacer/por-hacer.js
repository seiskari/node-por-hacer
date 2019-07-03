const fs = require('fs');
const colors = require('colors');


let listadoPorHacer = [];
const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile('db/data.json', data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('data.json'.green);
            }
        });
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB().then(archivo => console.log(`Archivo creado: ${archivo}`));
    return porHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer = listadoPorHacer.splice(index);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}