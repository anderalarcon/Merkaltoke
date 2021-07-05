<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card elevation="15" shaped loading class="mt-5 mb-5">
            <v-card-title class="headline">
              Detalles del Pedido
              <v-spacer></v-spacer>
            </v-card-title>

            <v-data-table
              :headers="headers"
              :items="mostrarProductos"
            >
              <template v-slot:item="row">
                <tr>
                  <td>{{ row.item.nombre }}</td>
                  <td>{{ row.item.cantidad }}</td>
                  <td>{{ row.item.precio }}</td>
                  <td>{{ row.item.cantidad * row.item.precio }}</td>
                </tr>
              </template></v-data-table
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../../components/NavBarProveedor";

import Proveedor from "../../apis/Proveedor";
import Pedidos from "../../apis/Pedidos";

export default {
  name: "Productos-Pedido",
  components: {
    NavBar,
  },
  data: () => ({
    mostrarProductos: [],
    search: "",
    headers: [
      {
        text: "Producto",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Cantidad", value: "cantidad", sortable: true },
      { text: "Precio", value: "precio", sortable: true },
      { text: "Posible Ingreso", value: "Monto", sortable: true },
    ],
  }),

  created: async function () {
    this.user = JSON.parse(sessionStorage.getItem("session"));
    if (this.user == null) {
      this.$router.push("/");
    }

    try {
      const datos_proveedor = await Proveedor.get(`/get/${this.user.id}`);
      this.datos = datos_proveedor.data.data.proveedores;

      const id_pedido = this.$route.params.id;
      const res = await Pedidos.get(
        `/getpedido_productos/${id_pedido}/${this.user.id}`
      );
      this.mostrarProductos = res.data.data.pedidos;
    } catch (error) {
      console.log(error)
    }
  },
};
</script>