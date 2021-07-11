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
      </v-row>

      <!--
      <v-row justify="center">
        <v-card
          elevation="24"
          max-width="444"
          class="mx-auto"
        >
          <v-system-bar lights-out></v-system-bar>
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
            >
              <v-sheet
                :color="colors[i]"
                height="100%"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="text-h2">
                    <v-img max-width="100%" height="100%" v-bind:src="require('../../../backend/public/uploads/' + slide.img_proveedor)"> </v-img>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img max-width="100%" height="100%" v-bind:src="require('../../../backend/public/uploads/' + slides[0].img_proveedor)"> </v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Author</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch
                  v-model="cycle"
                  label="Cycle Slides"
                  inset
                ></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-row>
      -->

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

    colors: [
      'green',
      'secondary',
      'yellow darken-4',
      'red lighten-2',
      'orange darken-1',
    ],
    cycle: false,
    slides: [],
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
      const res = await Categorias.get("/get");
      this.categorias = res.data.data.categorias;
      const proveedores = await Proveedor.get("/get");
      this.proveedores = proveedores.data.data.proveedores;
      this.slides = proveedores.data.data.proveedores;
      console.log(this.proveedores.in)
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

