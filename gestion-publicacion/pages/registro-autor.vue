<template>

    <div class="card" style="width: 30rem;">
        
        <div class="card-body">
          <h5 class="card-title">Registro de autor</h5>
          <form action="javascript:void(0)" onsubmit="">
        
            <div class="form-group">
                <label for="cedula">Cedula</label>
                <input type="text" class="form-control" id="url" placeholder="Ingrese su cedula" required>
            </div>
    
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" required>
            </div>
    
            <div class="form-group">
                <label for="apellidos">Apellidos</label>
                <input type="text" class="form-control" id="apellidos" placeholder="Ingrese sus apellidos" required>
            </div>

            <div class="form-group">
                <label for="edad">Edad</label>
                <input type="text" class="form-control" id="edad" placeholder="Ingrese su edad" required>
            </div>

            <div class="form-group">
                <label for="correo">Correo</label>
                <input type="email" class="form-control" id="correo" placeholder="Ingrese su correo" required>
            </div>

            <div class="form-group">
                <label for="ciudad">Ciudad</label>
                <input type="text" class="form-control" id="ciudad" placeholder="Ingrese su ciudad" required>
            </div>

            <div class="form-group">
                <label for="ocupación">Ocupación</label>
                <input type="text" class="form-control" id="ocupación" placeholder="Ingrese su ocupación" required>
            </div>
    
            <div class="form-group">
                <label for="contraseña">Contraseña</label>
                <input type="password" class="form-control" id="contraseña" placeholder="Ingrese su contreña" required>
            </div>

            <input id="btncrearBookmark" class="btn btn-primary" type="submit" value="Registrarse">
        </form>
        </div>
      </div>
          </template>
        </b-table>
      </b-form>
    </b-card-body>
  </b-card>
</template>