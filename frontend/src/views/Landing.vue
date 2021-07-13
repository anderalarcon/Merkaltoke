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
          <v-img height="250" v-bind:src="categoria.img_categoria"> </v-img>
          <v-card-title>
            <h3>{{ categoria.categoria }}</h3>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="blue"
              v-bind:href="'/Productos-Categoria/' + categoria.id_categoria"
              >Ver</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-container>
      <div class="row">
        <div class="col-4">
          <h1>Proveedores</h1>
        </div>
        <div class="col-8">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Búsqueda por el nombre del proveedor"
            single-line
          ></v-text-field>
        </div>
      </div>

      <!--
      <v-spacer></v-spacer>
      <v-row justify="center">
        <v-card
          class="ma-3"
          max-width="344"
          v-for="proveedor in filteredProveedores"
          :key="proveedor.id"
        >
          <v-img height="250" v-bind:src="require('../../../backend/public/uploads/' + proveedor.img_proveedor)"> </v-img>

          <v-card-title> {{ proveedor.nombre_proveedor }} </v-card-title>

          <v-card-actions>
            <v-btn
              color="warning"
              v-bind:href="'/Productos-Proveedor/' + proveedor.id_proveedor"
              >Ver</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-row>-->

      
      <v-carousel v-model="model">
        <v-carousel-item
          v-for="(slide, i) in filteredProveedores"
          :key="i"
        >
          <v-sheet
            
            color="#FFD6AF"
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              justify="center"
            >
              <div class="text-h2">
                <v-img height="100%" v-bind:src="require('../../../backend/public/uploads/' + slide.img_proveedor)">
                  <v-btn
                  color="warning"
                   class="success ma-12"
                  v-bind:href="'/Productos-Proveedor/' + slide.id_proveedor"
                  >Ver: {{ slide.nombre_proveedor }}</v-btn>
                </v-img>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      

      <h3
        style="height: 300px; padding-top: 150px"
        class="text-center"
        v-if="this.filteredProveedores.length == 0"
      >
        No se encontró al Proveedor :(
      </h3>
    </v-container>
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
    NavBar,
    Footer,
  },
  data: () => ({
    search: "",
    categorias: [],
    proveedores: [],

    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    slides: [
      '1',
      '2'
    ],
  }),

  computed: {
    filteredProveedores() {
      return this.proveedores.filter((proveedores) =>
        proveedores.nombre_proveedor
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
    },
  },

  created: async function () {
    try {
  
     
     if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        if (this.user.role == "cliente") {
              const res = await Categorias.get("/get");
      this.categorias = res.data.data.categorias;
      const proveedores = await Proveedor.get("/get");
      this.proveedores = proveedores.data.data.proveedores;
      this.slides = proveedores.data.data.proveedores;
        } else {
          this.$router.push("/ProfileProveedor");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

