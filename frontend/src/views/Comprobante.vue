<template>
  <v-app>
    <v-main>
      <NavBar></NavBar>
      <v-container>
        <v-layout class="mt-3">
          <v-flex class=" " md1>
            <v-img
              height="100"
              width="100"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
          </v-flex>
          <v-flex class="border ml-2" md3>
            <p>RUC : 12345678912</p>
            <p>Empresa : Merkaltoke</p>
            <p>Dirección: San Isidro 123</p>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md-3>
            <p>Cliente : {{ this.user.nombre }}</p>
            <p>Dni | Ruc : Por ahora no tenemos este dato</p>
          </v-flex>
          <v-flex md-3>
            <p>Direccion de Envío: Lima</p>
      
          </v-flex>
          <v-flex md-3>
            <p>Fecha : {{this.fecha}}</p>
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
             <tr v-for="producto in productos_del_pedido" :key="producto.id_pedido_detalle">
                
                  <td>{{producto.id_pedido_detalle}}</td>
                  <td>{{producto.nombre}}</td>
                  <td>{{producto.detalle}}</td>
                  <td>{{producto.cantidad}}</td>
                  <td>{{producto.precio}}</td>
                  <td>{{producto.cantidad*producto.precio}}</td>
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
export default {
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    user: { role: "", nombre: "", email: "" },
    productos_del_pedido:[],
    fecha:{}
  }),
  created: async function () {
    this.user = JSON.parse(sessionStorage.getItem("session"));
    if (this.user == null) {
      this.$router.push("/");
    }

    try {
      const id_pedido = this.$route.params.id;
      const data_pedido_detalle = await Pedido.get(`/get_pedidos_detalle/${id_pedido}`);
      const fecha_pedido= await Pedido.get(`/pedido_fecha/${id_pedido}`);
       this.productos_del_pedido=data_pedido_detalle.data.data.pedido; 
       this.fecha=fecha_pedido.data.data.pedido.fecha
       
       
    } catch (error) {}
  },
};
</script>
