const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/info-publicacion");

/**
 * Obteniendo las publicaciones
 */
router.get("/registro-autor", (req, res) => {
  _controlador.consultarAutor().then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "publicaciones consultadas" });
    }).catch(error => {
      res.send(error);
    });
});

/**
 * Guardando una publicacion
 */
router.post("/registro-autor", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let autor = req.body;

    // Valida la información, sino se envia al catch
    _controlador.validarPublicacion(autor);

    // Guardar la pagina en base de datos
    _controlador.guardarPublicacion(autor).then(respuestaDB => {
      res.send({ ok: true, mensaje: "autor guardado", info: info_publicacion });
    }).catch(error => {
      res.send(error);
    });

    // Responder
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;