/**
 * Aquì se encuentran los metodos para el crud de la información de la publicación
 */

export default {
  data() {
    return {
      enEdicion: false,

      //en este json se almacena la información agregada de las publicaciones(obraas)
      publicacion: {
        id: "",
        titulo: "",
        autor: "",
        facultad: "",
        tipo_publicacion: "",
        area: "",
        acciones: true
      },

      //En este arreglo se meten todas las publicaciones
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
  //Para que llame  el metodo local apenas se cargue la funcion
  mounted() {
    this.local()
  },


  methods: {
    //Para crear una nueva publicacion
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
    //elimina una publicacion dado el parametro item que es la fila donde se encuentra
    eliminarPublicacion({ item }) {
      let posicion = this.lista_publicaciones.findIndex(
        publicacion => publicacion.id == item.id
      );
      this.lista_publicaciones.splice(posicion, 1);
      localStorage.setItem('info-publicacion', JSON.stringify(this.lista_publicaciones));
    },

    //Al llamar este metodo carga los datos de una publicacion seleccionada en los campos de texto para editar
    cargarPublicacion({ item }) {
      let p = this.lista_publicaciones.find(
        publicacion => publicacion.titulo == item.titulo
      );
      this.enEdicion = true;
      this.publicacion = Object.assign({}, p);
      localStorage.setItem('info-publicacion', JSON.stringify(this.lista_publicaciones));
    },

    //Actualiza los datos de una publicacion
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
    //Para cargar los datos del localstorage en nuestro arreglo de publicaciones
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