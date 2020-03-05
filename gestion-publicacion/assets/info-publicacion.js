/**
 * Aquì se encuentran los metodos para el crud de la información de la publicación
 */

export default {
  data() {
    return {
      enEdicion: false,

      publicacion: {
        id: "",
        titulo: "",
        autor: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        acciones: true
      },

      lista_publicaciones: [
        {
          id: "001",
          titulo: "Geometría",
          autor: "Jason",
          facultad: "Ciencias básicas",
          tipo_publicacion: "Cientifica",
          area: "Ciencias básicas",
          acciones: true
        }
      ]

      , show: true
    }
  },
  mounted() {
    this.local()
  },


  methods: {
    crearPublicacion() {
      this.lista_publicaciones.push(this.publicacion);
      localStorage.setItem('info-publicacion', JSON.stringify(this.lista_publicaciones));

      this.publicacion = {
        id: "",
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
      localStorage.setItem('info-publicacion', JSON.stringify(this.lista_publicaciones));
    },
    cargarPublicacion({ item }) {
      let p = this.lista_publicaciones.find(
        publicacion => publicacion.titulo == item.titulo
      );
      this.enEdicion = true;
      this.publicacion = Object.assign({}, p);
      localStorage.setItem('info-publicacion', JSON.stringify(this.lista_publicaciones));
    },
    actualizarPublicacion() {
      let posicion = this.lista_publicaciones.findIndex(
        publicacion => publicacion.titulo == this.publicacion.titulo
      );
      this.enEdicion = false;
      this.lista_publicaciones.splice(posicion, 1, this.publicacion);
      this.publicacion = {
        id: "",
        titulo: "",
        autor: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        acciones: true
      };
      localStorage.setItem('info-publicacion', JSON.stringify(this.lista_publicaciones));
    },
    local() {
      var datosLocal = JSON.parse(localStorage.getItem('info-publicacion'));
      if (datosLocal === null) {
        this.lista_publicaciones = [];
      } else {
        this.lista_publicaciones = datosLocal;
      }
    }


  }
};