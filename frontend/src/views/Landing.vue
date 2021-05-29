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
            v-bind:src="categoria.img_categoria"
          >
          </v-img>
          <v-card-title>
            <h3>{{ categoria.categoria }}</h3>
          </v-card-title>
          <v-card-actions>
            <v-btn color="blue" v-bind:href="'/Productos-Categoria/' + categoria.id_categoria"
              >Ver</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-container>
      <h1>Proveedores</h1>
      <v-spacer></v-spacer>
      <!--hide-details como atributo en el v-text-field-->
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Búsqueda por el nombre del proveedor"
        single-line
        
      ></v-text-field>
      
      <v-row justify="center">
        <v-card
          class="ma-3"
          max-width="344"
          v-for="proveedor in filteredProveedores"
          :key="proveedor.id"
          
        >
          <v-img
            height="250"
            v-bind:src="proveedor.img_proveedor"
          >
          </v-img>
          
          <v-card-title> {{ proveedor.nombre_proveedor }} </v-card-title>

          <v-card-actions>
          <v-btn color="warning" v-bind:href="'/Productos-Proveedor/' + proveedor.id_proveedor"
              >Ver</v-btn
              >
          </v-card-actions>
        </v-card>
      </v-row>
      <h3 style="height:300px; padding-top:150px" class="text-center" v-if="this.filteredProveedores.length==0">No se encontró al Proveedor :(</h3>
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
    search:'',
    categorias: [],
    proveedores: []
    
  }),

  computed: {
    filteredProveedores(){
      //const proveedores = await Proveedor.get("/get");
      //this.proveedores = proveedores.data.data.proveedores;
      return this.proveedores.filter(proveedores => proveedores.nombre_proveedor.toLowerCase().includes(this.search.toLowerCase()));
    }
  },

  created: async function () {
    //al cargar la pagina
    try {
      //obtenemos categorias
      const res = await Categorias.get("/get");
      this.categorias = res.data.data.categorias;
      console.log(this.categorias)

      //proveedores

      const proveedores = await Proveedor.get("/get");
      this.proveedores = proveedores.data.data.proveedores;
      console.log(this.proveedores)

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

