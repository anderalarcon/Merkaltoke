<template>
  <div>
    <NavBarAdmin></NavBarAdmin>

    <v-container>
      <v-alert v-model="alert.show" :type="alert.type" dismissible>
        {{ alert.message }}
      </v-alert></v-container
    >
    <v-container class="mt-5">
      <v-card elevation="15" shaped loading class="pb-3">
        <v-card-title>
          Pedido de Clientes
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
              <td>{{ row.item.fecha }}</td>
              <td>{{ row.item.estado }}</td>
              <td>{{ row.item.total }}</td>
              <td>{{ row.item.nombre_cliente }}</td>
              <td>{{ row.item.metodo }}</td>
              <td>
              <v-btn
                color="green"
                x-small
                small
                dark
                fab
                
              >
                <v-icon small> mdi-eye </v-icon>
              </v-btn>                
              </td>

            </tr>
          </template></v-data-table
        >
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Footer from "../../components/Footer";

import NavBarAdmin from "../../components/NavBarAdmin.vue";
import Pedidos from "../../apis/Pedidos";

export default {
  name: "AdminProveedores",
  components: {
    NavBarAdmin,
    Footer,
  },
  data: () => ({
    pedidos: [],

    search: "",
    prueba: "",

    alert: { show: false },
    headers: [
      {
        text: "Pedido",
        align: "start",
        sortable: true,
        value: "id_pedido",
      },
      { text: "Fecha", value: "fecha", sortable: true },
      { text: "Estado", value: "estado" },
      { text: "Total", value: "total", sortable: true },
      { text: "Cliente", value: "nombre_cliente", sortable: true },
      { text: "Metodo", value: "metodo", sortable: true },
       { text: "Operacion", value: "operacion", sortable: false },
    ],

    add: false,
  }),
  created: async function () {
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        const id = this.user.id;

        const pedidos = await Pedidos.get("/get2");
        this.pedidos = pedidos.data.data.pedidos;

        console.log(this.productos);

        if (this.user.role == "administrador") {
        } else {
          this.$router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>