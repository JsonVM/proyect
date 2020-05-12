
<template>
  <b-row align="center" justify="center">
    <b-col cols="12" sm="8" md="4">
      <!--Card login -->
      <b-card class="elevation-12">
        <b-card-title primary-title></b-card-title>

          <span>Iniciar sesión</span>

        <b-form ref="formularioLogin">
  
                <b-form-group id="id" label="Identificación" label-for="Identificacion">
                <b-form-input
                    id="id"
                    v-model="usuario.documento"
                    required
                    placeholder="Cedula"
                    :rules="reglas"
                ></b-form-input>

            </b-form-group>
            <b-form-group id="in-nombre" label="Nombre:" label-for="nombre">
            <b-form-input
            id="nombre"
            v-model="usuario.clave"
            type="password"
            required
            placeholder="Ingrese su nombre"
            :rules="reglas"></b-form-input>
            </b-form-group> 

          
          <span class="red--text py-2">{{ mensaje }}</span>
          </b-form>
        
          
          <b-btn color="primary" class="text-none" @click="iniciar()">Ingresar</b-btn>
        
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  //Asigno el layout
  data() {
    return {
      usuario: {
        "documento":"",
        "clave":""
      },
      mensaje: null,
      reglas: [(v) => !!v || "El campo es obligatorio."],
    };
  },
  methods: {
    iniciar() {
      this.mensaje = null;
      const axios = require('axios');
     // const cookies = require('js-cookie');
        let url = "http://localhost:3001/login";
        axios
          .post(url, this.usuario)
          .then((response) => {
            let data = response.data;
            localStorage.setItem("token", data.info);
            Cookies.set("userid", usuario.documento);
            let userid = this.$cookies.get("userid");
            console.log("USERID COOKIE", userid);
            //Enviar al usuario a la página del home
            this.$axios.setHeader("token", data.info);
            this.$router.push("/index");
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
</script>

