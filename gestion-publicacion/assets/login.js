import Axios from "axios";



export default {
  asyncData({ query }) {
    let token = query.token; // Capturamos el token que llega por url
    let token_url = token ? true : false; // Me indica si hay un token en url o no
    return { token, token_url };
  },
  mounted() {
    if (this.token_url == true) {
      // Ingresa a este código si hay un token en url.

      //Asigno la información del token al localstorage
      localStorage.setItem("token", this.token);

      //this.$router.push("PONER AQUÍ LA URL DE LA PÁGINA CUANDO SE REDIRECCION AL HACER LOGIN EXITOSO.");
      // Por ejemplo
      this.$router.push("info-publicacion");
    }
  },
  
    data() {
        return {
          autor: {
              documento:"",
              clave:""
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

          // Función que se ejecuta antes de cargar el ciclo de vida de vue
  

    }
};