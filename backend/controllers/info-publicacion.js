/**
 * Controlador de info-publicacion
 */

//importar el servicion de postgres
const servicioPg = require('../services/postgres')

/**
 * Validando la informacion de la publicacion
 * @param {*} info_publicacion datos de la publicacion en forma de JSON
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
    if (!info_publicacion.resenia_autores) {
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

/**
 * Guardando la publicacion en la base de datos
 * @param {*} info_publicacion datos de lapublicacion en forma de JSON
 */
let guardarPublicacion = async (info_publicacion) => {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.pu_propuestas_publicaciones(
        id, titulo, facultad, tipo_publicacion, area, resenia_autores, resumen, aspectos_novedosos,
        contribucion_area, publico_objetivo, datos_proyecto_asociado, forma_ajusta_mision_udem, observaciones_finales)
        VALUES (
            '${info_publicacion.id}',
            '${info_publicacion.titulo}',
            '${info_publicacion.facultad}',
            '${info_publicacion.tipo_publicacion}',
            '${info_publicacion.area}',
            '${info_publicacion.resenia_autores}',
            '${info_publicacion.resumen}',
            '${info_publicacion.aspectos_novedosos}',
            '${info_publicacion.contribucion_area}',
            '${info_publicacion.publico_objetivo}',
            '${info_publicacion.datos_proyecto_asociado}',
            '${info_publicacion.forma_ajusta_mision_udem}',
            '${info_publicacion.observaciones_finales}'
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
        let _servicio = new servicioPg();
        let sql = `SELECT titulo, facultad, tipo_publicacion, area from public.pu_propuestas_publicaciones`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) { 
        throw{ok: false };
    }
}

//Eliminando una publicacion
let eliminarPublicacion = async (id) => {
    try{
        let _servicio = new servicioPg();
        let sql = `DELETE FROM public.pu_propuestas_publicaciones WHERE id ='${id}'`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch(error) {
        throw{ok: false};
    }
    
  };

  let modificarPublicacion = async (info_publicacion, id) => {
    if (info_publicacion.id != id) {
        console.log(info_publicacion.id);
      throw {
        ok: false,
        mensaje: "El id de la publicacion no corresponde al enviado.",
      };
    }
    try{
        let _servicio = new servicioPg();
        let sql = `UPDATE public.pu_propuestas_publicaciones
        SET
        titulo= '${info_publicacion.titulo}',
        facultad='${info_publicacion.facultad}',
        tipo_publicacion='${info_publicacion.tipo_publicacion}',
        area='${info_publicacion.area}',
        resenia_autores='${info_publicacion.resenia_autores}',
        resumen='${info_publicacion.resumen}',
        aspectos_novedosos='${info_publicacion.aspectos_novedosos}',
        contribucion_area='${info_publicacion.contribucion_area}',
        publico_objetivo='${info_publicacion.publico_objetivo}',
        datos_proyecto_asociado='${info_publicacion.datos_proyecto_asociado}',
        forma_ajusta_mision_udem='${info_publicacion.forma_ajusta_mision_udem}',
        observaciones_finales='${info_publicacion.observaciones_finales}'
        WHERE id=${info_publicacion.id};`;

        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;

    } catch(error) {
        throw{ok: false ,
        err: error}
    }
  };

//exportando metodos en forma de JSON
module.exports = { validarPublicacion, guardarPublicacion, consultarPublicaciones, eliminarPublicacion, modificarPublicacion };