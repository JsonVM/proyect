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

/**
 * Guardando El seguimiento en la base de datos
 * @param {*} seguimiento_publicacion datos de la informacion del seguimiento de una publicacion en forma de JSON
 */
let guardarSeguimiento = async (seguimiento_publicacion) => {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.pu_seguimientos_propuestas(
        id, id_tarea, fecha, comentario, estado, archivo)
        VALUES (
            '${seguimiento_publicacion.id}',
            '${seguimiento_publicacion.tarea}',
            '${seguimiento_publicacion.fecha}',
            '${seguimiento_publicacion.comentario}',
            '${seguimiento_publicacion.estado}',
            '${seguimiento_publicacion.archivo}'
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