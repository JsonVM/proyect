export default {
    data() {
        return {
            enEdicion: false,

            seg: {
                tarea: "",
                fecha: "",
                comentario: "",
                estado: "",
                acciones: true
            },

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
        };
    },
    methods: {
        crearSeguimiento() {
            this.lista_seguimientos.push(this.seg);
            this.seg = {
                tarea: "",
                fecha: "",
                comentario: "",
                estado: "",
                acciones: true
            };
        },
        eliminarSeguimiento({ item }) {
            let posicion = this.lista_seguimientos.findIndex(
                seg => seg.tarea == item.tarea
            );
            this.lista_seguimientos.splice(posicion, 1);
        },
        cargarSeguimiento({ item }) {
            let se = this.lista_seguimientos.find(
                seg => seg.tarea == item.tarea
            );
            this.enEdicion = true;
            this.seg = Object.assign({}, se);
        },
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

        }
    }/**,
    created: function(){
        if (typeof window !== 'undefined') {
            var datosLocal = JSON.parse(localStorage.getItem('seguimiento'));
        }

        if (typeof window !== 'undefined') {
            if (datosLocal === null) {
                this.lista_seguimientos = [];
            } else {
                this.lista_seguimientos = datosLocal;
            }
        }
    }*/
};