<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <h1>Categorías</h1>
      <v-row justify="center">
        <v-card
          class="ma-3"
          max-width="344"
          v-for="categoria in categorias"
          :key="categoria.id_categoria"
        >
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title>
            <h3>{{ categoria.categoria }}</h3>
          </v-card-title>
          <v-card-actions>
            <a v-bind:href="'/Productos-Categoria/' + categoria.id_categoria"
              >Ver</a
            >
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
          <a v-bind:href="'/Productos-Proveedor/' + proveedor.id_proveedor"
              >Ver</a
              >
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  <Footer></Footer>
  </div>
</template>


<script>
import NavBar from "../components/NavBar";
import Categorias from "../apis/Categorias";
import Proveedor from "../apis/Proveedor";
import Footer from "../components/Footer";

export default {
  name: "Landing",
  components: {
    NavBar,Footer
  },
  data: () => ({
    categorias: [],
    proveedores: [],
  }),

  created: async function () {
    //al cargar la pagina
    try {
      //obtenemos categorias
      const res = await Categorias.get("/get");
      this.categorias = res.data.data.categorias;

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

