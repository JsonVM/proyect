import Axios from "axios";

export default {
    data() {
        return {
          autor: {
              documento:"2020",
              clave:"123"
          },
          mensaje: null,
          reglas: [(v) => !!v || "El campo es obligatorio."],
        };
      },
    methods: {
        login() {
            Axios.post("http://localhost:3001/login", {
                    documento: this.autor.documento,
                    clave: this.autor.clave
                }).then(res => {

                    if (res) {
                        this.agregarInfoLS({ idautor: this.autor.documento, token: res.data['info'], nombre: res.data['nombre'] })
                        console.log("hola")
                
                        console.log(this.autor.documento)
                        localStorage.setItem('documento', this.autor.documento);

                    }
                    this.$router.push({ path: "info-publicacion", query: { nombre: res.data['nombre'] } });
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
        agregarInfoLS(item) {
            localStorage.setItem('Autor', JSON.stringify(item));
        },

    }
};