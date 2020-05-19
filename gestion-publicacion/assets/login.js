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
      //this.$router.push("info-publicacion");

      
    }
  },
  
    data() {
        return {
          title:"INICIAR SESIÓN",
          autor: {
              documento:"",
              clave:"",
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
                    let id_listar = localStorage.getItem("documento");
                    let rol = this.verificarRol(id_listar);
                      if(rol == 6){
                      this.$router.push("info-publicacion");
                      } else if(rol == 2){
                      this.$router.push("seguimiento-publicacion");
                     } 
                    //this.$router.push({ path: "info-publicacion", query: { nombre: res.data['nombre'] } });
                    console.log(res)
                    localStorage.setItem('token', res.data.info);
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

        verificarRol(id){
          let direccion = "http://localhost:3001/registro-autor/rol/"+id;
          axios.get(direccion).then(respuesta => {
            let data = respuesta.data
            if (data.ok) {
              let i = data.info;
              return i[0].rol;
            }
            this.mensaje = data.mensaje;
            console.log(respuesta);
          }).catch(error => {
            console.log(this.mensaje = "Ha ocurrido un error: " + error)
          });

        },
        agregarInfoLS(item) {
            localStorage.setItem('Autor', JSON.stringify(item));
        },

          // Función que se ejecuta antes de cargar el ciclo de vida de vue
  

    }
};