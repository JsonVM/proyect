<template>
  <div>
  <b-card
    title="Informacion General de la publicacion"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
  >
    <b-card-body>
  

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Titulo:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          required
          placeholder="Ingrese el titulo de la obra"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Autor:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Ingrese el nombre del autor"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Facultad a la cual se inscribe:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.facultad"
          required
          placeholder="Ingrese la facultad a la cual se inscribe"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Tipo de publicacion:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.tipo_publicacion"
          required
          placeholder="Ingrese el tipo de publicacion"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Area a la que pertenece:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.area"
          required
          placeholder="Ingrese el area a la que pertenece"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>