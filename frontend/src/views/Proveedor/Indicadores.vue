<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.min.js"></script> 



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
    <v-container>
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
                  <td>{{venta.mes}}</td>
                  <td>{{venta.totalmes}}</td>

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
                  <td>{{cliente.name_client}}</td>
                  <td>{{cliente.sumacliente}}</td>

                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      
    </v-container>
            

            <div id="app">
              <canvas id="myChart" width="400" height="400"></canvas>
            </div>
              <div class="chart">
    <Chart 
    :chartData="chartData" 
    :chartOptions="chartOptions" 
    :chartType="chartType" />
  </div>
            

   <!--  <Footer></Footer> -->
  </div>
  
</template>



<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
import Pedidos from "../../apis/Pedidos";

import { Bar } from 'vue-chartjs';
import Chart from "chart.js";



export default {
  name: "MisPedidos",
    extends: Bar,
  mounted () {
    //this.renderChart(data, options);
    let {chartType,chartData,chartOptions} = this;
    this.chartConstructor(chartType, chartData, chartOptions);
  },

  
  chartConstructor(chartType, chartData, chartOptions) {
    const chartElement = document.querySelector("canvas");
    const chart = new Chart(chartElement, {
    type: chartType,
    data: chartData,
    options: chartOptions,
  });
},
data: {
    labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7"],
    datasets: [
      {
        label: "This week",
        data:  [12, 19, 10, 17, 6, 3, 7],
        backgroundColor: "rgba(224, 248, 255, 0.4)",
        borderColor: "#5cddff",
        lineTension: 0,
        pointBackgroundColor: "#5cddff",
      },
      {
        label: "Last week",
        data:  [10, 25, 3, 25, 17, 4, 9],
        backgroundColor: "rgba(241, 225, 197, 0.4)",
        borderColor: "#ffc764",
        lineTension: 0,
        pointBackgroundColor: "#ffc764",
      },
    ],
  },

  props:{
  chartType:String,
  chartData:Object,
  chartOptions:Object
},

  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
    dialog: false,
    productos: [],
    ventas:[],
    clientesVentas:[],
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

                const Ventas = await Proveedor.get(`/getVentasPorMes/${id}`);
        this.ventas = Ventas.data.data.productos;
        
        const Clientes = await Proveedor.get(`/getClientePotenciales/${id}`);
        this.clientesVentas = Clientes.data.data.productos;
  
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

