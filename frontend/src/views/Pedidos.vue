<template>
  <div>
    <NavBar></NavBar>

    <v-card
    class="mx-auto"
    max-width="344"
    v-for="pedido in pedidos"
    :key="pedido.id_pedido"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Pedido: {{pedido.id_pedido}}
    </v-card-title>

    <v-card-subtitle> 
      Fecha: {{pedido.fecha}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Comprobante
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Estado: {{pedido.estado}}
        </v-card-text>
        <v-card-text>
          Precio total: {{pedido.total}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

    
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Pedidos from "../apis/Pedidos"

export default {
  name: "Pedidos",
  components: {
    NavBar,
  },
  data: () => ({
    pedidos: [],
    show: false,
  }),
  
  
  /* methos: {
  
  }, */

  created: async function () {
    //al cargar la pagina
    try {
      //redireccionar al inicio si no esta logueado
      const res = await Pedidos.get("/get");
      this.pedidos = res.data.data.pedidos;

      console.log (this.pedidos)

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