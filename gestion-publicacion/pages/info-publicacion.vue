<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card
            title="Informacion General de la publicacion"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50rem;"
            class="mb-2"
            v-show="true"
          >
            <b-card-body>
              <b-form action="javascript:void(0)" @submit="crearPublicacion()">
                 <b-form-group id="input-group-2" label="id:" label-for="id">
                  <b-form-input
                    id="id"
                    v-model="publicacion.id"
                    required
                    placeholder="Ingrese el id de su obra"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-1" label="Titulo:" label-for="titulo">
                  <b-form-input
                    id="titulo"
                    v-model="publicacion.titulo"
                    required
                    placeholder="Ingrese el titulo de la obra"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Autor:" label-for="autor">
                  <b-form-input
                    id="autor"
                    v-model="publicacion.autor"
                    required
                    placeholder="Ingrese el nombre del autor"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-3"
                  label="Facultad a la cual se inscribe:"
                  label-for="facultad"
                >
                  <b-form-input
                    id="facultad"
                    v-model="publicacion.facultad"
                    required
                    placeholder="Ingrese la facultad a la cual se inscribe"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-4"
                  label="Tipo de publicacion:"
                  label-for="tipo_publicacion"
                >
                  <b-form-input
                    id="tipo_publicacion"
                    v-model="publicacion.tipo_publicacion"
                    required
                    placeholder="Ingrese el tipo de publicacion"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Area a la que pertenece:" label-for="area">
                  <b-form-input
                    id="area"
                    v-model="publicacion.area"
                    required
                    placeholder="Ingrese el area a la que pertenece"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary" v-if="!enEdicion">Registrar</b-button>
                <b-button
                  @click="actualizarPublicacion()"
                  variant="primary"
                  v-else
                >Actualizar datos</b-button>
              </b-form>
              <!--
              <b-card class="mt-3" header="Mostrar datos">
                <pre class="m-0">{{ form }}</pre>
              </b-card>
              -->
              <b-table striped hover :items="lista_publicaciones">
                <template v-slot:cell(acciones)="row">
                  <b-button size="sm" @click="cargarPublicacion(row)" class="mr-2">Modificar</b-button>
                  <b-button size="sm" @click="eliminarPublicacion(row)" class="mr-2">Eliminar</b-button>
                </template>
              </b-table>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            id="card-info-detallada"
            title="Informacion detallada de la publicacion"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 50rem;"
            class="mb-2"
          >
            <b-card-body>
              <b-form-group
                id="input-group-6"
                label="Reseña de autores:"
                label-for="reseña_autores"
              >
                <b-form-input
                  id="reseña_autores"
                  v-model="publicacion.reseña_autores"
                  required
                  placeholder="Reseña de autores"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-7" label="Resumen de la obra:" label-for="resumen_obra">
                <b-form-input
                  id="resumen_obra"
                  v-model="publicacion.resumen_obra"
                  required
                  placeholder="Aquí se adjunta un pdf con el resumen de la obra"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-8"
                label="Aspectos novedosos:"
                label-for="aspectos_novedosos"
              >
                <b-form-input
                  id="aspectos_novedosos"
                  v-model="publicacion.aspectos_novedosos"
                  required
                  placeholder="aspectos novedosos"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-9"
                label="Contribución al estado actual del area:"
                label-for="contribucion_area"
              >
                <b-form-input
                  id="contribucion_area"
                  v-model="publicacion.contribucion_area"
                  required
                  placeholder="Contribucion al estado actual del area"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-10"
                label="Publico objetivo:"
                label-for="publico_objetivo"
              >
                <b-form-input
                  id="publico_objetivo"
                  v-model="publicacion.publico_objetivo"
                  required
                  placeholder="Publico objetivo"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-11"
                label="Forma en que se ajusta a la misión de la UdeM:"
                label-for="ajusta_mision_udem"
              >
                <b-form-input
                  id="ajusta_mision_udem"
                  v-model="publicacion.ajusta_mision_udem"
                  required
                  placeholder="Forma en que se ajusta a la misión de la udem"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-12"
                label="Datos del proyecto al que se asocia:"
                label-for="proyecto_asociado"
              >
                <b-form-input
                  id="proyecto_asociado"
                  v-model="publicacion.proyecto_asociado"
                  required
                  placeholder="Datos del proyecto al que se asocia"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-13"
                label="Observaciones finales:"
                label-for="observaciones_finales"
              >
                <b-form-input
                  id="observaciones_finales"
                  v-model="publicacion.observaciones_finales"
                  required
                  placeholder="Observaciones finales"
                ></b-form-input>
              </b-form-group>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script src="@/assets/info-publicacion.js"/>
