<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <h1>Pedidos</h1>
      <v-row justify="center">
        <v-card
          class="mx-3 mt-5 mb-5"
          max-width="344"
          v-for="pedido in pedidos"
          :key="pedido.id_pedido"
        >
          <v-img
            src="https://image.freepik.com/free-vector/food-delivery-cute-man-riding-motorcycles-cartoon-art-illustration_56104-609.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Pedido: {{ pedido.id_pedido }} </v-card-title>

          <v-card-subtitle> Fecha: {{ pedido.fecha }} </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="success"
              class="btn btn"
              v-bind:href="'/Comprobante/' + pedido.id_pedido"
              >Comprobante de Pago</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>

          <v-expand-transition>
            <div>
              <v-divider></v-divider>
              <v-card-text>
                <p>Estado: {{ pedido.estado }}</p>

                <p>Metodo de Pago: {{ pedido.metodo }}</p>
                <p>Monto total: {{ pedido.total }}</p>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card></v-row
      >
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Pedidos from "../apis/Pedidos";
import Footer from "../components/Footer";
export default {
  name: "Pedidos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    pedidos: [],
    show: false,
    dialog: false,
  }),

  created: async function () {
    //al cargar la pagina
    try {
      //redireccionar al inicio si no esta logueado

      this.user = JSON.parse(sessionStorage.getItem("session"));
      if (this.user == null) {
        this.$router.push("/");
      }

      const res = await Pedidos.get(`/get_pedidos_cliente/${this.user.id}`);
      this.pedidos = res.data.data.pedido;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>