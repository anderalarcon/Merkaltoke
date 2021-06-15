<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <h1>Pedidos</h1>
      <v-container>
        <v-alert v-model="alert.show" :type="alert.type" dismissible>
          {{ alert.message }}
        </v-alert></v-container
      >
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
              >Comprobante</v-btn
            >
            <v-spacer> </v-spacer>

            <v-btn
              @click="openModal(pedido.id_pedido)"
              color="red"
              v-if="pedido.estado != `Entregado`"
            >
              Cancelar</v-btn
            >
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
    <!-- modal cancelar pedido -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline"> Cancelar el pedido </v-card-title>

        <v-card-text>
          ¿Desea cancelar el pedido <b>{{ this.aux }}</b> ?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue" @click="dialog = false"> NO </v-btn>

          <v-btn color="red" @click="deleteProductsFromVoucher(aux)">
            SI
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--     <Footer></Footer> -->
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
    alert: { show: false, message: "" },

    pedidos: [],
    show: false,
    dialog: false,
    aux: {},
  }),

  created: async function () {
    try {
      this.user = JSON.parse(sessionStorage.getItem("session"));
      if (this.user == null) {
        this.$router.push("/");
      }

      const res = await Pedidos.get(`/get_pedidos_cliente/${this.user.id}`);
      this.pedidos = res.data.data.pedido;
      console.log(this.pedidos);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    openModal(id) {
      this.dialog = true;
      this.aux = id;
    },
    async deleteProductsFromVoucher(id) {
      try {
        this.ReponerStock(id);
        const res = await Pedidos.delete(`/cancelar/${id}`);
        const index = this.pedidos.findIndex((c) => c.id_pedido == id);
        this.pedidos.splice(index, 1); //Desaparecer al instante  asyncrono  */
        this.deletePedido(id);

        this.dialog = false;
        this.alert = {
          show: true,
          type: "success",
          message: res.data,
        };
      } catch (error) {
        this.alert = {
          show: true,
          type: "error",
          message: res.data.message,
        };
      }
    },
    async deletePedido(id) {
      try {
        const res = await Pedidos.delete(`/delete/${id}`);
      } catch (error) {
        this.alert = {
          show: true,
          type: "error",
          message: res.data.message,
        };
      }
    },
    async ReponerStock(id) {
      try {
        const res = await Pedidos.get(`/ProStock/${id}`);
        var productosEnPedido = res.data.data.producto;
        for (var i = 0; i < productosEnPedido.length; i++) {
          const res2 = await Pedidos.put(
            `/update/${productosEnPedido[i].id_producto}/${productosEnPedido[i].cantidad}`
          );
        }
      } catch (error) {
        console.log(error);
      }
    }, //Solo falta que desaparezcan asincronamente
  },
};
</script>