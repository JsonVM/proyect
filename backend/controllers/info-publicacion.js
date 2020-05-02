/**
 * Controlador de info-publicacion
 */

//importar el servicion de postgres
const servicioPg = require('../services/postgres')

/**
 * Validando la informacion de la publicacion
 * @param {*} info_publicacion pagina en forma de JSON
 */
let validarPublicacion = (info_publicacion) => {
    if (!info_publicacion) {
        throw {
            ok: false, mensaje: "La info de la publicación es obligatoria"
        }
    }

    //haciendo obligatorio el titulo de la obra
    if (!info_publicacion.titulo) {
        throw {
            ok: false, mensaje: "El titulo es obligatorio"
        }
    }

    //haciendo obligatorio el tipo de publicacion de la obra
    if (!info_publicacion.tipo_publicacion) {
        throw {
            ok: false, mensaje: "El tipo de publicacion es obligatorio"
        }
    }

    //haciendo obligatoria la facultad a la que se inscribe
    if (!info_publicacion.facultad) {
        throw {
            ok: false, mensaje: "La facultad a la que se inscribe es obligatoria"
        }
    }

    //haciendo obligatoria la info de los autores
    if (!info_publicacion.autores) {
        throw {
            ok: false, mensaje: "La info de los autores es obligatoria"
        }
    }

    //haciendo obligatoria el area a la que se inscribe
    if (!info_publicacion.area) {
        throw {
            ok: false, mensaje: "El area a la que se inscribe es obligatoria"
        }
    }
}

//TERMINAR el query

/**
 * Guardando la publicacion en la base de datos
 * @param {*} info_publicacion datos de lapublicacion en forma de JSON
 */
let guardarPublicacion = async info_publicacion => {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.paginas(
        url, nombre, descripcion)
        VALUES (
            '${pagina.url}',
            '${pagina.nombre}',
            '${pagina.descripcion}'
            );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

//Consultando la info de las publicaciones
let consultarPublicaciones = async () => {
    try {
        let _servicio = new servicioPg()
        let sql = `SELECT * from info_publicacion`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

//exportando metodos en forma de JSON
module.exports = { validarPublicacion, guardarPublicacion, consultarPublicaciones };