import { ToastPlugin } from 'bootstrap-vue';

/**
 * Aquì se encuentran los metodos para el crud de los seguimientos
 */
const axios = require('axios');
export default {
    data() {
        return {
            enEdicion: false,

            //Variable que guarda el id que se quiere eliminar
            id_eliminar: 0,
            id_actualizar: 0,
            //se guardan todos los seguimientos nuevos que se ingresan 
            seg: {
                tarea: "",
                id: "",
                fecha: "",
                comentario: "",
                id_propuesta: "",
                estado: null,
                acciones: true
            },
            //se inicializa el array seguimientos para luego guardar todos los seguimientos ahi
            lista_seguimientos: [
                {
                    tarea: "01",
                    id: "1",
                    fecha: "04/03/2020",
                    comentario: "Buen trabajo en general",
                    estado: "rechazado",
                    id_propuesta:"1",
                    acciones: true
                },
                {
                    tarea: "02",
                    id: "",
                    fecha: "04/03/2020",
                    comentario: "Hay que realizar correcciones ortográficas",
                    estado: "aprobado",
                    id_propuesta:"1",
                    acciones: true
                }
            ],
            //esta lista es utilizada para guardar allí los datos que vamos a listar
            lista_mostrar: [
                {
                    id: "",
                    nombre: "",
                    estado: ""
                }
            ],
            lista_publicaciones: [
                {
                    id: "1",
                    titulo: "Geometría",
                    autor: "Jason",
                    facultad: "Ciencias básicas",
                    tipo_publicacion: "Cientifica",
                    area: "Ciencias básicas",
                    acciones: true
                }
            ],
            fields:["id","id_tarea","fecha","comentario","estado","archivo","id_propuesta","acciones"],
            estado: [
                { value: null, text: "Estado", disabled: true },
                { value: "aprobado", text: "aprobado" },
                { value: "en proceso", text: "en proceso" },
                { value: "rechazado", text: "rechazado" }
            ]

            , show: true
        }

    },
    //aca apenas se carga la pagina se llama el metodo para listar los seguimientos
    mounted() {
        //this.local()
        this.cargar()
    },
    methods: {

        //creamos los seguimientosy lo agregamos a la BD
        crearSeguimiento() {
            this.lista_seguimientos.push(this.seg);
            let direccion = "http://localhost:3001/seguimiento-publicacion";
            axios
                .post(direccion, this.seg)
                .then((response) => {
                console.log("Seguimiento agregado correctamente");
                alert("El seguimiento se creo correctamente");
                console.log(response);
                })
                .catch((error) => {
                console.log(error);
                });
            this.seg = {
                tarea: "",
                id: "",
                fecha: "",
                comentario: "",
                id_propuesta: "",
                estado: null,
                acciones: true
            };
            
            //guardando en el localstorage
            localStorage.setItem('seguimientos', JSON.stringify(this.lista_seguimientos));
            
        },

        //cargar el seguimiento que quiere editar
        cargarSeguimientoEditar({ item }) {
            console.log(this.item)
            let editar = this.lista_seguimientos.find(seg => seg.id == item.id);
            this.enEdicion = true;
            console.log(this.editar)
            this.seg = Object.assign({}, editar);
            console.log(this.seg)
        },

        //editar un seguimiento especifico
        actualizarSeguimientoBD() {
            let id_Editar = this.seg.id;
            console.log(this.seg)
            let direccion = "http://localhost:3001/seguimiento-publicacion/" + id_Editar;
            axios
              .put(direccion, this.seg)
              .then((response) => {
                console.log("Seguimiento editado correctamente");
                alert("El seguimiento se edito correctamente");
                console.log("hola")
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
                alert("Lo sentimos, el seguimiento no se pudo editar correctamente");
              });
      
            this.seg = {
                tarea: "",
                id: "",
                fecha: "",
                comentario: "",
                id_propuesta: "",
                estado: null,
                acciones: true
            };
          },
      
       
        //eliminanos un seguimiento segun el id que se le pase por parametro
        eliminarSeguimiento({item}) {
            console.log(item.id);
            let i = item.id;
            console.log("id: " + i)
            //this.seg= this.lista_seguimientos[i];
            //console.log(this.seg);
            //this.id_eliminar = this.lista_seguimientos[item].id;
            let direccion = "http://localhost:3001/seguimiento-publicacion/" + id_eliminar;
            console.log(this.id_eliminar)
            axios
                .delete(direccion, this.id_eliminar)
                .then((response) => {
                console.log("Seguimiento eliminado");
                console.log(response);
                })
                .catch((error) => {
                console.log(error);
                });
        },
        //este metodo nos pone en el formulario todos los datos del seguimiento que quieren editar
        cargarSeguimiento() {
            enEdicion = true;
            
            let url = "http://localhost:3001/seguimiento-publicacion/";
            axios.get(url).then(respuesta => {
              let data = respuesta.data;
              let lista = data.info;
              let l = [];

              if(data.ok){
                this.lista_seguimientos = lista;
              }
              this.mensaje = data.mensaje;
              console.log(respuesta);
            }).catch(error => {
              console.log(this.mensaje = "Ha ocurrido un error")});
         

            /*let se = this.lista_seguimientos.find(
                seg => seg.tarea == item.tarea
            );*/

            this.enEdicion = true;
            this.seg = Object.assign({}, se);
            localStorage.setItem('seguimientos', JSON.stringify(this.lista_seguimientos));
        },

        cargar(){
            let url = "http://localhost:3001/seguimiento-publicacion";
            axios.get(url).then(respuesta => {
              let data = respuesta.data;
              let lista = data.info;
              let l = [];

              if(data.ok){
                this.lista_seguimientos = lista;
              }
              this.mensaje = data.mensaje;
              console.log(respuesta);
            }).catch(error => {
              console.log(this.mensaje = "Ha ocurrido un error")});
         
          },
        //estes metodo se llama luego de que se hace un cambio en un seguimiento ya existente,
        //para que quede guardado con sus nuevos valores
        actualizarSeguimiento() {
            let seg1 = this.lista_seguimientos.findIndex(
                seg => seg.tarea == this.seg.tarea
            );
            this.enEdicion = false;
            this.lista_seguimientos.splice(seg1, 1, this.seg);
            this.seg = {
                tarea: "",
                id: "",
                fecha: "",
                comentario: "",
                id_propuesta: "",
                estado: null,
                acciones: true
            };
            localStorage.setItem('seguimientos', JSON.stringify(this.lista_seguimientos));
        },
        //metodo para guardar la lista de seguimientos en el local storage
        local() {
            var datosLocal = JSON.parse(localStorage.getItem('seguimientos'));
            var datosInfo = JSON.parse(localStorage.getItem('info-publicacion'));
            if (datosLocal === null) {
                this.lista_seguimientos = [];
            } else {
                this.lista_seguimientos = datosLocal;
            }
            //llenamos la lista de publicaciones con la informacion del local storage
            //para poder recorrerla y compararla con la lista de seguimientos
            if (datosInfo === null) {
                this.lista_publicaciones = [];
            } else {
                this.lista_publicaciones = datosInfo;
            }
        },
    }

};