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
          <v-img height="250" v-bind:src="producto.img_producto"> </v-img>
          <v-card-title>Producto : {{ producto.nombre }} </v-card-title>
          <v-card-subtitle
            >Proveedor : {{ producto.nombre_proveedor }}
          </v-card-subtitle>
          <v-card-subtitle>Precio : {{ producto.precio }} </v-card-subtitle>
          <v-card-subtitle>Stock : {{ producto.stock }} </v-card-subtitle>
          <v-card-subtitle>Detalle : {{ producto.detalle }} </v-card-subtitle>
          <v-card-subtitle>Visible : {{ producto.visible }} </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="blue"
              small
              dark
              @click="addToCarrito(producto.id_producto)"
              >Seleccionar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Categorias from "../apis/Categorias";
import Carrito from "../apis/Carrito";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "Provductos-Categoria",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    productos: [],

    user: { role: "", nombre: "", email: "", id: "" },
  }),
  methods: {
    async addToCarrito(id) {
      //1.Obtener el carrito id del cliente

      const consultar_id_cliente = await Carrito.get(
        `/getCarritoId/${this.user.id}`
      );
      console.log(consultar_id_cliente);
      const id_carrito = consultar_id_cliente.data.data.cliente.id_carrito;

      //2. Hacer el insert a la tabla intermedia a penas le da a seleccionar

      const insertarMid = await Carrito.post(`/insertMid/${id_carrito}/${id}`);

      const index = this.productos.findIndex((c) => c.id_producto == id);
      console.log(id);
      console.log(index);
      this.productos.splice(index, 1); //Desaparecer al instante  asyncrono
    },
  },
  created: async function () {
    //extraemos la data del session starage
    this.user = JSON.parse(sessionStorage.getItem("session"));

    try {
      const id = this.$route.params.id;
      const res = await Categorias.get(`/getProductos-Categoria/${id}`);
      this.productos = res.data.data.productos;
      console.log(this.productos);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
