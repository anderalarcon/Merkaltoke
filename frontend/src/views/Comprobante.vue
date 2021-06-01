<template>
  <v-app>
    <v-main>
      <NavBar></NavBar>
      <v-container>
        <v-layout class="mt-3">
          <v-flex class=" " md1>
            <v-img
              height="100%"
              width="100%"
              src="https://img.freepik.com/free-vector/finance-service-tax-with-invoice-coins_24877-53397.jpg?size=338&ext=jpg"
            ></v-img>
          </v-flex>
          <v-flex class="border ml-5" md3>
            <h3 class="mb-2">RUC : 12345678912</h3>
            <h3 class="mb-2">Empresa : Merkaltoke</h3>
            <h3 class="mb-2">Dirección: San Isidro 123</h3>
          </v-flex>
          <h1 class="">Comprobante de Pago</h1>
        </v-layout>
        <v-layout>
          <v-flex md-3>
            <h3 class="mt-4">Cliente : {{ this.user.nombre }}</h3>
            <h4 class="mt-4 mb-4">Dni : {{ this.datos.dni }}</h4>
          </v-flex>
          <v-flex md-3>
            <h3 class="mt-4">
              Direccion de Envío: {{ this.datos.direccion_cliente }}
            </h3>
          </v-flex>
          <v-flex md-3>
            <h3 class="mt-4">Fecha de transacción : {{ this.fecha }}</h3>
          </v-flex>
        </v-layout>

        <template>
          <v-simple-table height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Item</th>
                  <th class="text-left">Producto</th>
                  <th class="text-left">Detalle</th>
                  <th class="text-left">Cantidad</th>
                  <th class="text-left">Precio</th>
                  <th class="text-left">Monto</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="producto in productos_del_pedido"
                  :key="producto.id_pedido_detalle"
                >
                  <td>{{ producto.id_pedido_detalle }}</td>
                  <td>{{ producto.nombre }}</td>
                  <td>{{ producto.detalle }}</td>
                  <td>{{ producto.cantidad }}</td>
                  <td>{{ producto.precio }}</td>
                  <td>{{ producto.cantidad * producto.precio }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-container>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>


<script>
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Pedido from "../apis/Pedidos";
import Cliente from "../apis/Cliente";
export default {
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    user: { role: "", nombre: "", email: "" },
    productos_del_pedido: [],
    fecha: {},
    datos: {},
  }),
  created: async function () {
    this.user = JSON.parse(sessionStorage.getItem("session"));
    if (this.user == null) {
      this.$router.push("/");
    }

    try {
      const datos_cliente = await Cliente.get(`/get/${this.user.id}`);
      this.datos = datos_cliente.data.data.cliente;

      console.log(this.datos);
      const id_pedido = this.$route.params.id;
      const data_pedido_detalle = await Pedido.get(
        `/get_pedidos_detalle/${id_pedido}`
      );
      const fecha_pedido = await Pedido.get(`/pedido_fecha/${id_pedido}`);
      this.productos_del_pedido = data_pedido_detalle.data.data.pedido;
      this.fecha = fecha_pedido.data.data.pedido.fecha;
    } catch (error) {}
  },
};
</script>
