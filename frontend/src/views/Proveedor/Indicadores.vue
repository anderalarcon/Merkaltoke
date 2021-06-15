<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card
            elevation="15"
            shaped
            loading
            class="mt-5 mb-5"
            style="margin: auto"
          >
            <v-card-title>
              Gestión de Pedidos
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="pedidos" :search="search">
              <template v-slot:item="row">
                <tr>
                  <td>{{ row.item.id_pedido }}</td>
                  <td>{{ row.item.nombre_proveedor }}</td>
                  <td>{{ row.item.fecha }}</td>
                  <td>{{ row.item.nombre_cliente }}</td>
                  <td>{{ row.item.direccion_cliente }}</td>
                  <td>{{ row.item.estado }}</td>

                  <td>
                    <v-btn
                      color="green"
                      x-small
                      small
                      dark
                      fab
                      v-bind:href="'/Productos-Pedido/' + row.item.id_pedido"
                    >
                      <v-icon small> mdi-eye </v-icon>
                    </v-btn>
                      <v-btn
                      color="orange"
                      x-small
                      small
                      dark
                      fab
                    >
                      <v-icon small> mdi-check </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template></v-data-table
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
   <!--  <Footer></Footer> -->
  </div>
</template>

<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Pedidos from "../../apis/Pedidos";
export default {
  name: "MisPedidos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
    dialog: false,
    productos: [],
    mostrarProductos: [],
    pedidos: [],
    search: "",
    search1: "",
    headers: [
      {
        text: "Pedido",
        align: "start",
        sortable: true,
        value: "id_pedido",
      },
      { text: "Proveedor", value: "proveedor", sortable: false },
      { text: "Fecha de Transaccion", value: "Fecha", sortable: false },

      { text: "Cliente", value: "total" },
      { text: "Direccion", value: "total" },
      { text: "Estado", value: "total" },
      { text: "Operacion", value: "operacion", sortable: false },
    ],
    headers2: [
      {
        text: "Producto",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Cantidad", value: "cantidad", sortable: true },
      { text: "Precio", value: "precio", sortable: true },
    ],
  }),
  created: async function () {
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        const id = this.user.id;

  
        const cos = await Pedidos.get(`/getpedido_proveedor/${id}`);
        this.pedidos = cos.data.data.pedidos;

        if (this.user.role == "proveedor") {
          console.log("es proveedor");
        } else {
          this.$router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async VerProducto(id_pedido, id_proveedor) {
      const res = await Pedidos.get(
        `/getpedido_productos/${id_pedido}/${id_proveedor}`
      );

      this.dialog = true;
      this.mostrarProductos = res.data.data.pedidos;
    },
  },
};
</script>