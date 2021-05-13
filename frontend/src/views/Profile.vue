<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card class="mt-5" max-width="450" style="margin:auto" >
            <v-card-title class="text-uppercase"> CUENTA DEL {{ user.role }}</v-card-title>
            <v-card-text>
              <h2>! Bienvenido !</h2>
              <div class="container">
                  <v-img
                  height="320"
                  width="400"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  >
                  </v-img>
              </div>
              
              <h3 class="mt-2">Nombre:  {{ user.nombre }}</h3>
              <h4 class="mt-2">Correo Electronico: {{ user.email }}</h4>
            </v-card-text>
          </v-card>
          <v-card>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>


<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  name: "Profile",
  components: {
    NavBar,Footer,
  },
  data: () => ({
    user: { role: "", nombre: "", email: "" },
  }),
  created: function () {
    this.user = JSON.parse(sessionStorage.getItem("session"));
    if (this.user == null) {
      this.$router.push("/");
    }
  },
};
</script>