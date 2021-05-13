<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row justify="center">
        <v-card
          class="ma-3"
          max-width="344"
          v-for="producto in productos"
          :key="producto.id_producto"
        >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title>Producto : {{ producto.nombre }} </v-card-title>
        
          <v-card-subtitle>Precio : {{ producto.precio }} </v-card-subtitle>
          <v-card-subtitle>Stock : {{ producto.stock }} </v-card-subtitle>
          <v-card-subtitle>Detalle : {{ producto.detalle }} </v-card-subtitle>
            <v-card-actions>
            <v-btn color="blue" small dark>Seleccionar</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Proveedor from "../apis/Proveedor";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "Provductos-Proveedor",
  components: {
    NavBar,Footer
  },
  data: () => ({
    productos: [],
  }),

  created: async function () {
    try {
      const id = this.$route.params.id;
      const res = await Proveedor.get(`/getProductos-Proveedor/${id}`);
      this.productos = res.data.data.productos;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
