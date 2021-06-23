


<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-alert v-model="alert.show" :type="alert.type" dismissible>
        {{ alert.message }}
      </v-alert></v-container
    >
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
                      class=""
                      @click="readEstadoToUpdate(row.item.id_pedido)"
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
<!--     <v-container>
      <h1>Indicadores</h1>
      <v-row>
        <v-col>
          <h2>Ventas por mes</h2>
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="venta in ventas" :key="venta.mes">
                  <td>{{ venta.mes }}</td>
                  <td>{{ venta.totalmes }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col>
          <h2>Compras de clientes potenciales</h2>
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cliente in clientesVentas" :key="cliente.id_client">
                  <td>{{ cliente.name_client }}</td>
                  <td>{{ cliente.sumacliente }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container> -->

    <!--  <Footer></Footer> -->
    <!--  Modal Actualizar Estado Pedido -->
    <v-dialog v-model="updating" max-width="600px">
      <v-card>
        <v-form ref="updateEstado" @submit.prevent="updateEstado()">
          <v-card-title>Editar Estado</v-card-title>
          <v-card-text>
            <v-select
              :items="estados"
              prepend-icon="mdi-pencil"
              item-text="estado"
              item-value="id_estado"
              label="Estado"
              v-model="estadoToUpdate.id_estado"
              :rules="[(v) => !!v || 'Estado es requerido']"
            >
            </v-select>
            <v-btn block class="success ma-2" type="submit"
              >Actualizar datos</v-btn
            >
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
import Pedidos from "../../apis/Pedidos";
import Estados from "../../apis/Estados";

import { Bar } from "vue-chartjs";
import Chart from "chart.js";

export default {
  name: "MisPedidos",
  extends: Bar,

  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    estadoToUpdate: [],
    updating: false,
    pedidoestado: {},
    estados: [],
    
    alert: { show: false },

    value: [423, 446, 675, 510, 590, 610, 760],
    dialog: false,
    productos: [],
    ventas: [],
    clientesVentas: [],
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
      { text: "Estado", value: "estado" },
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

        const Ventas = await Proveedor.get(`/getVentasPorMes/${id}`);
        this.ventas = Ventas.data.data.productos;

        const Clientes = await Proveedor.get(`/getClientePotenciales/${id}`);
        this.clientesVentas = Clientes.data.data.productos;

        const cos = await Pedidos.get(`/getpedido_proveedor/${id}`);

        this.pedidos = cos.data.data.pedidos;

        const estados = await Estados.get("/get");
        this.estados = estados.data.data.estados;

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

    async readEstadoToUpdate(id_pedido) {
      const est = await Pedidos.get(`/get/${id_pedido}`);
      this.updating = true;
      this.estadoToUpdate = est.data.data.pedido;
    },
    async updateEstado() {
      let valid = this.$refs.updateEstado.validate();

      if (valid) {
        try {
          const res = await Pedidos.put(
            `/update/${this.estadoToUpdate.id_pedido}`,
            this.estadoToUpdate
          );

          const index = this.pedidos.findIndex(
            (c) => c.id_pedido == this.estadoToUpdate.id_pedido
          );

          const aux2 = await Pedidos.get(
            `/getest/${this.estadoToUpdate.id_pedido}`
          );
          this.pedidos[index].estado = aux2.data.data.pedidoestado.estado;
          this.updating = false;
          this.alert = {
            show: true,
            type: "success",
            message: "Pedido editado con éxito",
          };
        } catch (error) {
          this.updating = false;
          this.alert = {
            show: true,
            type: "error",
            message: error,
          };
        }
      } else {
        console.log("falta llenar");
      }
    },
  },
};
</script>

