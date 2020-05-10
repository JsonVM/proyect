const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/seguimiento-publicacion");

/**
 * Obteniendo los seguimientos de las publicaciones
 */
router.get("/seguimiento-publicacion", (req, res) => {
  _controlador.consultarSeguimientos().then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "seguimientos consultados" });
    }).catch(error => {
      res.send(error);
    });
});

/**
 * Guardando un seguimiento
 */
router.post("/seguimiento-publicacion", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let info_seguimiento = req.body;

    // Valida la información, sino se envia al catch
    _controlador.validarSeguimiento(info_seguimiento);

    // Guardar la pagina en base de datos
    _controlador.guardarSeguimiento(info_seguimiento).then(respuestaDB => {
      res.send({ ok: true, mensaje: "Seguimiento guardado", info: info_seguimiento });
    }).catch(error => {
      res.send(error);
    });

    // Responder
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;