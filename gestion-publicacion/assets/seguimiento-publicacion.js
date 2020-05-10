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
                    estado: "",
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
            estado: [
                { value: null, text: "Estado", disabled: true },
                { value: "aprobado", text: "aprobado" },
                { value: "en proceso", text: "en proceso" },
                { value: "rechazado", text: "rechazado" }
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
        //eliminanos un seguimiento segun el item que se le pase por parametro
        eliminarSeguimiento({ item }) {
            let posicion = this.lista_seguimientos.findIndex(
                seg => seg.id == item.id
            );
            this.lista_seguimientos.splice(posicion, 1);
            //guardando en el localstorage
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
        //metodo para llenar la lista mostrar con el nombre de la obra, el id de la obra y el estado
        buscar() {
            for (let index = 0; index < this.lista_seguimientos.length; index++) {
                for (let j = 0; j < this.lista_seguimientos.length; j++) {
                    if (this.lista_publicaciones[index].id == this.lista_seguimientos[j].tarea) {
                        var temp = {
                            id: this.lista_publicaciones[index].id,
                            nombre: this.lista_publicaciones[index].titulo,
                            estado: this.lista_seguimientos[index].estado
                        }
                        this.lista_mostrar.push(temp)
                    }
                }
            }

        }


    }

};