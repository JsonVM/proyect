export default {
    data() {
        return {
        enEdicion: false,

          publicacion: {
            id:"",
            titulo: "",
            autor: "",
            facultad: "",
            tipo_publicacion: "",
            area: "",
            acciones: true
          },
          
        lista_publicaciones: [
          {
            id:"001",
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
        id:"",
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
      this.publicacion = Object.assign({}, p);
    },
    actualizarPublicacion() {
      let posicion = this.lista_publicaciones.findIndex(
        publicacion => publicacion.titulo == this.publicacion.titulo
      );
      this.enEdicion = false;
      this.lista_publicaciones.splice(posicion, 1, this.publicacion);
      this.publicacion = {
        id:"",
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