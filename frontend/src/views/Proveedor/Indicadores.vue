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
                  <td>{{ venta.totalmes }} S/.</td>
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

            <v-row>
        <v-col>
          <h2>Unidades vendidad por Producto</h2>
          <v-card>
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad vendida</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cant in ProductosCantidad" :key="cant.nombre">
                  <td>{{ cant.nombre }}</td>
                  <td>{{ cant.cantidad }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          </v-card>
        </v-col>
        <v-col>
          <h2>Ventas por producto</h2>
          <v-card>
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="prod in ProductosVentas" :key="prod.nombre">
                  <td>{{ prod.nombre }} </td>
                  <td>{{ prod.totalproducto }}S/.</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h2>Stock</h2>
          <v-card>
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>stock</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="stock in StockProductos" :key="stock.nombre">
                  <td>{{ stock.nombre }} </td>
                  <td>{{ stock.stock }}S/.</td>
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
       StockProductos:[],
       ProductosCantidad: [],
       ProductosVentas:[]
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

          const Stock = await Proveedor.get(`/getStockProducto/${id}`);
          this.StockProductos = Stock.data.data.productos;

          const CantidadProducto = await Proveedor.get(`/getCantidadProducto/${id}`);
          this.ProductosCantidad = CantidadProducto.data.data.productos;

          const VentasProductos = await Proveedor.get(`/getVentasProducto/${id}`);
          this.ProductosVentas = VentasProductos.data.data.productos;


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