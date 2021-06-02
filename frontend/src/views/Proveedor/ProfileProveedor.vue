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
                <v-img
                  height="320"
                  width="400"
                  v-bind:src="datos.img_proveedor"
                >
                </v-img>
              </div>

              <h3 class="mt-2">Nombre: {{ this.datos.nombre_proveedor }}</h3>
              <h4 class="mt-2">
                Correo Electronico: {{ this.datos.email_proveedor }}
              </h4>
              <h4 class="mt-2">
                Direccion: {{ this.datos.direccion_proveedor }}
              </h4>
              <h4 class="mt-2">RUC: {{ this.datos.ruc }}</h4>
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
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
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
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        if (this.user.role == "proveedor") {
          console.log("es proveedor");
          const datos_proveedor = await Proveedor.get(`/get/${this.user.id}`);
          this.datos = datos_proveedor.data.data.proveedores;
        } else {
          this.$router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>