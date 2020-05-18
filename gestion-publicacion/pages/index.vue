<template>
  <div class="body">
    <b-container>
      <b-col>
        <!-- Content here -->

        <div class="container_login">
          <b-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Escudo_Universidad_de_Medellin.svg/240px-Escudo_Universidad_de_Medellin.svg.png"
            fluid
            alt="Fluid image"
            width="80px"
          ></b-img>
          <div class="title">{{ title }}</div>
        </div>

        <br />

        <b-form action="javascript:void(0)">
          <b-form-group @submit.stop.prevent label="Documento" label-for="id">
            <b-form-input
              class="form-control"
              v-model="autor.documento"
              type="number"
              placeholder="Ingrese su documento de identidad"
              id="id"
              :rules="reglas"
            />
          </b-form-group>

          <b-form-group
            @submit.stop.prevent
            label="Contraseña"
            label-for="password"
          >
            <b-form-input
              class="form-control"
              type="password"
              v-model="autor.clave"
              placeholder="Ingrese su contraseña"
              id="password"
            />
          </b-form-group>

          <b-button @click="login()" type="submit" block variant="danger"
            >Ingresar</b-button
          >
          <b-btn color="primary" class="text-none" href="registrar-autor" block variant="danger">Registrarse</b-btn>

          <span class="red--text py-2">{{ mensaje }}</span>
          <div class="text">
            <br />
          </div>
        </b-form>
        <br />
      </b-col>
    </b-container>
  </div>
</template>

<script src="../assets/login.js" />

<style src="../css/index.css" />