const axios = require('axios');
export default {
  //Asigno el layout
  data() {
    return {
      usuario: {
          documento:"2020",
          clave:"123"
      },
      mensaje: null,
      reglas: [(v) => !!v || "El campo es obligatorio."],
    };
  },
  methods: {
    iniciar() {
      this.mensaje = null;
        let url = "http://localhost:3001/login";
        const express = require("express");
        const router = express.Router();
            axios
          .post(url, this.usuario)
          .then((response) => {
            let data = response.data;
            localStorage.setItem("token", data.info);
            cookies.Router("userid", usuario.documento);
            let userid = cookies.get("userid");
            console.log("USERID COOKIE", userid);
            //Enviar al usuario a la página del home
            this.axios.setHeader("token", data.info);
            router.push("C:\Users\Kevin\Music\webxd\proyect\gestion-publicacion\assets\autentificacion.js");
          })
          .catch((error) => {
            console.log(error.response);
            if (error.response && error.response.data) {
              this.mensaje = "Error:" + error.response.data.mensaje;
            } else {
              this.mensaje = "Error:" + error;
            }
          });
    },
  },
};
//<script src="../../gestion-publicacion/assets/login.js"/>
