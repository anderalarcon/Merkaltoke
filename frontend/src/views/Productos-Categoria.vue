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
          <v-card-subtitle
            >Proveedor : {{ producto.nombre_proveedor }}
          </v-card-subtitle>
          <v-card-subtitle>Precio : {{ producto.precio }} </v-card-subtitle>
          <v-card-subtitle>Stock : {{ producto.stock }} </v-card-subtitle>
          <v-card-subtitle>Detalle : {{ producto.detalle }} </v-card-subtitle>
          
          <v-card-actions>
            <v-btn color="blue" small dark @click="addToCarrito()"
              >Seleccionar</v-btn
            >
          </v-card-actions>
        </v-card>
         <v-card-subtitle>test: {{ this.user.id }} </v-card-subtitle>
      </v-row>
    </v-container>
  <Footer></Footer>
  </div>
</template>

<script>
import Categorias from "../apis/Categorias";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "Provductos-Categoria",
  components: {
    NavBar,Footer
  },
  data: () => ({
    productos: [],

        user: { role: "", nombre: "", email: "",id:"" },

  }),
  methods: {
    async addToCarrito() {
      //1.Obtener el carrito id del cliente 
      
      const id = this.$route.params.id;
      const index = this.productos.findIndex((c) => c.id_producto == 6);//poner el id del producto 
      this.productos.splice(index, 1); //Desaparecer al instante  asyncrono
    },
  },
  created: async function () {
    //extraemos la data del session starage 
        this.user = JSON.parse(sessionStorage.getItem("session"));
        console.log(this.user)

    try {
      const id = this.$route.params.id;
      const res = await Categorias.get(`/getProductos-Categoria/${id}`);
      this.productos = res.data.data.productos;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
