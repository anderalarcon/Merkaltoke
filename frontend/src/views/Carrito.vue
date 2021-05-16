<template>
  <div>
    <NavBar></NavBar>

    <v-container class="grey lighten-5">
      <h1 class="mb-5">Carrito de compras</h1>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="8">
          <v-card>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Producto</th>
                    <th class="text-left">Precio</th>
                    <th class="text-left">Cantidad</th>
                    <th class="text-left">Total</th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="carro in carrito" :key="carro.producto_id">
                    <td>{{ carro.nombre }}</td>
                    <td>
                      <span :id="`precio${carro.producto_id}`">{{
                        carro.precio
                      }}</span>
                    </td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon
                          dark
                          @click="disminuir_cantidad(carro.producto_id)"
                        >
                          mdi-minus
                        </v-icon>
                      </v-btn>
                      <span :id="`cantidad${carro.producto_id}`">{{
                        carro.cantidad_id
                      }}</span>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon
                          dark
                          @click="aumentar_cantidad(carro.producto_id)"
                        >
                          mdi-plus
                        </v-icon>
                      </v-btn>
                    </td>
                    <td>
                      <span :id="`total${carro.producto_id}`">{{
                        carro.precio * carro.cantidad_id
                      }}</span>
                    </td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="pink">
                        <v-icon small @click="deleteItem(item)">
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <div>
              <v-row>
                <v-col cols="12" md="8" sm="6"> Total </v-col>
                <v-col  cols="6" md="4"><v-text-field id="TOTAL"  disabled  ></v-text-field>  </v-col>
              </v-row>
            </div>

            <div>
              <v-btn
                @click="insertar_tblpedido()"
                class="mt-5"
                color="warning"
                dark
              >
                Realizar compra
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Carrito from "../apis/Carrito";
import Pedido from "../apis/Pedidos"
import Footer from "../components/Footer";

export default {
  name: "Carrito",
  components: {
    NavBar,
    Footer,
  },

  data: () => ({
    carrito: [],
    user: { role: "", nombre: "", email: "", id: "" },
    pedido:{}
  }),

  created: async function () {
    //al cargar la pagina
    try {
      //carrito
      this.user = JSON.parse(sessionStorage.getItem("session"));
      const id = this.user.id;
      const idCarrito = await Carrito.get(`/getCarritoId/${id}`);
      const aux = idCarrito.data.data.cliente.id_carrito;
      const idCarritoProductos = await Carrito.get(`/getCarrito_tabla/${aux}`);

      this.carrito = idCarritoProductos.data.data.cliente;

      //redireccionar al inicio si no esta logueado

      this.getTotalofCarShop();
      if (this.user == null) {
        this.$router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    obtenertotal() {
      var productos=this.carrito;
      var acu=0;
  
      for (var i = 0; i < productos.length; i++) {
       acu =acu+ parseFloat (document.getElementById("total"+productos[i].producto_id).innerHTML)
       
      }
      
      document.getElementById("TOTAL").value = acu;

    },
    aumentar_cantidad: function (id_producto) {
      document.getElementById("cantidad" + id_producto).innerHTML =
        parseInt(document.getElementById("cantidad" + id_producto).innerHTML) +
        1;

      var total = document.getElementById("total" + id_producto);

      total.innerHTML = (
        parseFloat(document.getElementById("precio" + id_producto).innerHTML) *
        parseInt(document.getElementById("cantidad" + id_producto).innerHTML)
      ).toFixed(1);

      this.obtenertotal();
    },

    disminuir_cantidad: function (id_producto) {
      document.getElementById("cantidad" + id_producto).innerHTML =
        parseInt(document.getElementById("cantidad" + id_producto).innerHTML) -
        1;
      var total = document.getElementById("total" + id_producto);

      total.innerHTML = (
        parseFloat(document.getElementById("precio" + id_producto).innerHTML) *
        parseInt(document.getElementById("cantidad" + id_producto).innerHTML)
      ).toFixed(1);
         this.obtenertotal();

    },
    async insertar_tblpedido() {
      this.pedido.id_cliente=this.user.id;
      this.pedido.total=document.getElementById("TOTAL").value;
      const nuevo_pedido=await Pedido.post('/create/',this.pedido); 
     
      this.deleteAfterBuy();
    },
    async deleteAfterBuy(){
      const id = this.user.id;
      const idCarrito = await Carrito.get(`/getCarritoId/${id}`);
      const aux = idCarrito.data.data.cliente.id_carrito;
      const eliminar=await Carrito.delete(`/deleteMid/${aux}`); 
      this.carrito=[]
      document.getElementById("TOTAL").value=""
    },
    async getTotalofCarShop(){
      const id = this.user.id;
      const idCarrito = await Carrito.get(`/getCarritoId/${id}`);
      const aux = idCarrito.data.data.cliente.id_carrito;
      const monto=await Carrito.get(`/getTotal/${aux}`); 
      document.getElementById("TOTAL").value=monto.data.data.carrito.sum;
    }
  },
};
</script>