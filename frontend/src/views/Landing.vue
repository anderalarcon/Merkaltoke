<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <h1>Productos</h1>
      <v-row justify="center">
        <v-card
          class="ma-3"
          max-width="344"
          v-for="producto in productos"
          :key="producto.id"
        >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> {{ producto.nombre }} </v-card-title>
          <v-card-subtitle> {{ producto.precio }} </v-card-subtitle>
          <v-card-subtitle> {{ producto.detalle }} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="blue" small dark>Ver</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-container>
      <h1>Proveedores</h1>
      <v-row justify="center">
        <v-card
          class="ma-3"
          max-width="344"
          v-for="proveedor in proveedores"
          :key="proveedor.id"
        >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> {{ proveedor.nombre_proveedor }} </v-card-title>

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
import Productos from "../apis/Productos";
import Proveedor from "../apis/Proveedor";

export default {
  name: "Landing",
  components: {
    NavBar,
  },
  data: () => ({
    productos: [],
    proveedores: [],
  }),

  created: async function () {
    //al cargar la pagina
    try {
      const res = await Productos.get("/get");
      this.productos = res.data.data.productos;

      //proveedores

      const proveedores = await Proveedor.get("/get");
      this.proveedores = proveedores.data.data.proveedores;

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