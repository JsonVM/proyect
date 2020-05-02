const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/info-publicacion");

/**
 * Obteniendo las publicaciones
 */
router.get("/info-publicacion", (req, res) => {
  _controlador.consultarPublicaciones().then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "publicaciones consultadas" });
    }).catch(error => {
      res.send(error);
    });
});

/**
 * Guardando una publicacion
 */
router.post("/info-publicacion", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let info_publicacion = req.body;

    // Valida la información, sino se envia al catch
    _controlador.validarPublicacion(info_publicacion);

    // Guardar la pagina en base de datos
    _controlador.guardarPublicacion(info_publicacion).then(respuestaDB => {
      res.send({ ok: true, mensaje: "Publicacion guardada", info: info_publicacion });
    }).catch(error => {
      res.send(error);
    });

    // Responder
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;