<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <h1>Pedidos</h1>
      <v-row justify="center">
        <v-card class="ma-3" max-width="344">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> Pedido 1 </v-card-title>

          <v-card-actions>
            <v-btn color="blue" small dark>Ver</v-btn>
          </v-card-actions>
          
        </v-card>
            <v-card class="ma-3" max-width="344">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> Pedido 2 </v-card-title>

          <v-card-actions>
            <v-btn color="blue" small dark>Ver</v-btn>
          </v-card-actions>
          
        </v-card>
            <v-card class="ma-3" max-width="344">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> Pedido 3 </v-card-title>

          <v-card-actions>
            <v-btn color="blue" small dark>Ver</v-btn>
          </v-card-actions>
          
        </v-card>
            <v-card class="ma-3" max-width="344">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> Pedido 4 </v-card-title>

          <v-card-actions>
            <v-btn color="blue" small dark>Ver</v-btn>
          </v-card-actions>
          
        </v-card>
            <v-card class="ma-3" max-width="344">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> Pedido 5 </v-card-title>

          <v-card-actions>
            <v-btn color="blue" small dark>Ver</v-btn>
          </v-card-actions>
          
        </v-card>
            <v-card class="ma-3" max-width="344">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> Pedido 6 </v-card-title>

          <v-card-actions>
            <v-btn color="blue" small dark>Ver</v-btn>
          </v-card-actions>
          
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "Pedidos",
  components: {
    NavBar,
  },
    created: async function () {
    //al cargar la pagina
    try {
     
      //redireccionar al inicio si no esta logueado
      this.user = JSON.parse(sessionStorage.getItem("session"));
      if (this.user == null) {
        this.$router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>