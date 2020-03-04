export default {
    data() {
        return {
          form: {
            titulo: "",
            autor: "",
            facultad: "",
            tipo_publicacion: "",
            area: ""
          },
          
        lista_publicaciones: [
          {
            titulo: "Geometría",
            autor: "Jason",
            facultad: "Ciencias básicas",
            tipo_publicacion: "Cientifica",
            area: "Ciencias básicas",
            acciones: true
          }
        ]

        ,show:true
      };
    },


methods: {
    crearPublicacion() {
      this.lista_publicaciones.push(this.publicacion);
      this.publicacion = {
        titulo: "",
        autor: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        acciones: true
      };
    },
    eliminarPublicacion({ item }) {
      let posicion = this.lista_publicaciones.findIndex(
        publicacion => publicacion.titulo == item.titulo
      );
      this.lista_publicaciones.splice(posicion, 1);
    },
    cargarPublicacion({ item }) {
      let p = this.lista_publicaciones.find(
        publicacion => publicacion.titulo == item.titulo
      );
      this.enEdicion = true;
      this.estudiante = Object.assign({}, p);
    },
    actualizarPublicacion() {
      let posicion = this.lista_publicaciones.findIndex(
        publicacion => publicacion.titulo == this.publicacion.titulo
      );
      this.lista_publicaciones.splice(posicion, 1, this.publicacion);
      this.publicacion = {
        titulo: "",
        autor: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        acciones: true
      };

    }
  }
};