<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card class="mt-5" max-width="450" style="margin: auto">
            <v-card-title class="text-uppercase">
              CUENTA DEL {{ user.role }}</v-card-title
            >
            <v-card-text>
              <h2>! Bienvenido !</h2>
              <div class="container">
                <v-img height="320" width="400" v-bind:src="datos.img_cliente">
                </v-img>
              </div>

              <h3 class="mt-2">Nombre: {{ this.datos.nombre_cliente }}</h3>
              <h4 class="mt-2">
                Correo Electronico: {{ this.datos.email_cliente }}
              </h4>
              <h4 class="mt-2">
                Direccion: {{ this.datos.direccion_cliente }}
              </h4>
              <h4 class="mt-2">Dni: {{ this.datos.dni }}</h4>
            </v-card-text>
          </v-card>
          <v-card> </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>


<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cliente from "../apis/Cliente";
export default {
  name: "Profile",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    datos: {},
  }),
  created: async function () {
    try {
      this.user = JSON.parse(sessionStorage.getItem("session"));

      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        const datos_cliente = await Cliente.get(`/get/${this.user.id}`);
        this.datos = datos_cliente.data.data.cliente;
 
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>