const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/registro-autor");

/**
 * Obteniendo las publicaciones
 */
router.get("/registro-autor", (req, res) => {
  _controlador.consultarAutor().then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "autores consultadas" });
    }).catch(error => {
      res.send(error);
    });
});

/**
 * Guardando una autor
 */
router.post("/registro-autor", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let autor = req.body;

    // Valida la información, sino se envia al catch
    //_controlador.validarPublicacion(autor);

    // Guardar la pagina en base de datos
    _controlador.guardarAutor(autor).then(respuestaDB => {
      res.send({ok: true, mensaje: "autor guardado", info: autor});
    }).catch(error => {
      res.send(error.response);
    });

    // Responder
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;