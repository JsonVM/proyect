<template>
  <b-card
    title="Seguimiento de revision de la publicación"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
    align-self="center"
    v-show="true"
  >
    <b-card-body>
      <b-form action="javascript:void(0)" @submit="crearSeguimiento()">
        <b-form-group id="in-tarea" label="id_tarea:" label-for="id_tarea">
          <b-form-input id="id_tarea" v-model="seg.tarea" required placeholder="id tarea"></b-form-input>
        </b-form-group>
            <b-form-group id="in-id" label="id:" label-for="id">
                  <b-form-input
                    id="id"
                    v-model="seg.id"
                    required
                    placeholder="id"
                  ></b-form-input>
                </b-form-group>

        <b-form-group id="in-fecha" label="Fecha:" label-for="fecha">
          <b-form-input
            id="fecha"
            v-model="seg.fecha"
            required
            placeholder="Ingrese la fecha DD/MM/AAAA"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-comentario" label="Comentario:" label-for="comentario">
          <b-form-input
            id="comentario"
            v-model="seg.comentario"
            required
            placeholder="Comentarios de la obra"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="in-id_propuesta" label="id propuesta:" label-for="id_propuesta">
          <b-form-input
            id="id_propuesta"
            v-model="seg.comentario"
            required
            placeholder="id de la propuesta asociada"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-select v-model="seg.estado" :options="estado"></b-form-select>
        </b-form-group>
        

        <b-button type="submit" variant="primary" v-if="!enEdicion">Registrar</b-button>
        <b-button @click="actualizarSeguimiento()" variant="primary" v-else>Actualizar datos</b-button>
        <b-table striped hover :items="lista_seguimientos">
          <template v-slot:cell(acciones)="row">
            <div>
              <b-button size="sm" @click="cargarSeguimiento(row)" class="mr-2">Modificar</b-button>
              <b-button size="sm" @click="eliminarSeguimiento(row)" class="mr-2">Eliminar</b-button>
              <!---<b-container class="bv-example-row">
                <b-row>
                  <b-col>
                    <b-button size="sm" @click="cargarSeguimiento(row)" class="mr-2">Modificar</b-button>
                  </b-col>
                  <b-col>
                    <b-button size="sm" @click="eliminarSeguimiento(row)" class="mr-2">Eliminar</b-button>
                  </b-col>
                </b-row>
              </b-container>--->
              
            </div>
          </template>
        </b-table>
      </b-form>
    </b-card-body>
    <b-button size="m" @click="buscar()" class ="button">Listar</b-button>
    <b-table striped hover :items="lista_mostrar">
        </b-table>
  </b-card>
</template>

<script src="@/assets/seguimiento-publicacion.js"/>