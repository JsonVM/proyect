
<template>
  <b-row align="center" justify="center">
    <b-col cols="12" sm="8" md="4">
      <!--Card login -->
      <b-card class="elevation-12">
        <b-card-title primary-title></b-card-title>

          <span>Iniciar sesión</span>

        <b-form ref="formularioLogin">
  
                <b-form-group id="id" label="Identificación" label-for="Identificacion">
                <b-form-input
                    id="documento"
                    v-model="autor.documento"
                    required
                    placeholder="Cedula"
                    :rules="reglas"
                ></b-form-input>

            </b-form-group>
            <b-form-group id="in-nombre" label="Nombre:" label-for="nombre">
            <b-form-input
            id="clave"
            v-model="autor.clave"
            type="password"
            required
            placeholder="Ingrese su nombre"
            :rules="reglas"></b-form-input>
            </b-form-group> 

          
          <span class="red--text py-2">{{ mensaje }}</span>
          </b-form>
        
          
          <b-btn color="primary" class="text-none" @click="login()">Ingresar</b-btn>
        
      </b-card>
    </b-col>
  </b-row>
</template>
<script src="../assets/login.js"/>