<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <h1>Indicadores</h1>
     
      <v-row>
        <v-col>
          <h2>Ventas por mes</h2>
          <v-card>
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
          </v-card>
        </v-col>
        <v-col>
          <h2>Compras de clientes potenciales</h2>
          <v-card>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>




<script>
import NavBar from "../../components/NavBarProveedor";
import Proveedor from "../../apis/Proveedor";

export default {
  name: "Indicadores",
  components: {
    NavBar,
  },
   data: () => ({
       ventas:[],
       clientesVentas: [],
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
        console.log(this.clientesVentas)
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

};
</script>