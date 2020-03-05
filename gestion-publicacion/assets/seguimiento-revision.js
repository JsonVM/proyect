/**
 * Aquì se encuentran los metodos para el crud de los seguimientos
 */

export default {
    data() {
        return {
            enEdicion: false,
            //se guardan todos los seguimientos nuevos que se ingresan 
            seg: {
                tarea: "",
                fecha: "",
                comentario: "",
                estado: "",
                acciones: true
            },
            //se inicializa el array seguimientos para luego guardar todos los seguimientos ahi
            lista_seguimientos: [
                {
                    tarea: "001",
                    fecha: "04/03/2020",
                    comentario: "Buen trabajo en general",
                    estado: "Pendiente",
                    acciones: true
                },
                {
                    tarea: "002",
                    fecha: "04/03/2020",
                    comentario: "Hay que realizar correcciones ortográficas",
                    estado: "No aprobado",
                    acciones: true
                }
            ]

            , show: true
        }

    },
    //aca apenas se carga la pagina se llama el metodo para guardar en el local storage
    mounted() {
        this.local()
    },
    methods: {
      //creamos los seguimientos y los añadimos al array
        crearSeguimiento() {
            this.lista_seguimientos.push(this.seg);
            this.seg = {
                tarea: "",
                fecha: "",
                comentario: "",
                estado: "",
                acciones: true
            };
            localStorage.setItem('seguimientos', JSON.stringify(this.lista_seguimientos));
        },
        //eliminanos un seguimiento segun el item que se le pase por parametro
        eliminarSeguimiento({ item }) {
            let posicion = this.lista_seguimientos.findIndex(
                seg => seg.tarea == item.tarea
            );
            this.lista_seguimientos.splice(posicion, 1);
            localStorage.setItem('seguimientos', JSON.stringify(this.lista_seguimientos));
        },
        //este metodo nos pone en el formulario todos los datos del seguimiento que quieren editar
        cargarSeguimiento({ item }) {
            let se = this.lista_seguimientos.find(
                seg => seg.tarea == item.tarea
            );
            this.enEdicion = true;
            this.seg = Object.assign({}, se);
            localStorage.setItem('seguimientos', JSON.stringify(this.lista_seguimientos));
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
                fecha: "",
                comentario: "",
                estado: "",
                acciones: true
            };
            localStorage.setItem('seguimientos', JSON.stringify(this.lista_seguimientos));
        },
        //metodo para guardar la lista de seguimientos en el local storage
        local() {
            var datosLocal = JSON.parse(localStorage.getItem('seguimientos'));
            if (datosLocal === null) {
                this.lista_seguimientos = [];
            } else {
                this.lista_seguimientos = datosLocal;
            }
        }
    },
};