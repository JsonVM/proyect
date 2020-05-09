/**
 * Controlador del seguimiento-publicacion
 */

//importar el servicion de postgres
const servicioPg = require('../services/postgres')

/**
 * Validando la informacion de la publicacion
 * @param {*} seguimiento_publicacion informacion del seguimiento en forma de JSON
 */
let validarSeguimiento = (seguimiento_publicacion) => {

    if (!seguimiento_publicacion) {
        throw {
            ok: false, mensaje: "El seguimiento de la publicacion está vacio"
        }
    }
}

//TERMINAR el query

/**
 * Guardando El seguimiento en la base de datos
 * @param {*} seguimiento_publicacion datos de la informacion del seguimiento de una publicacion en forma de JSON
 */
let guardarSeguimiento = async seguimiento_publicacion => {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.pu_seguimientos_propuestas(
        id_tarea, fecha, comentario, archivo)
        VALUES (
            '${udem.id_tarea}',
            '${udem.fecha}',
            '${udem.comentario}'
            '${udem.archivo}'
            );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

//Consultando la info del seguimiento de las publicaciones
let consultarSeguimientos = async () => {
    try {
        let _servicio = new servicioPg()
        let sql = `SELECT * from public.pu_seguimientos_propuestas`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

//exportando metodos en forma de JSON
module.exports = { validarSeguimiento, guardarSeguimiento, consultarSeguimientos };