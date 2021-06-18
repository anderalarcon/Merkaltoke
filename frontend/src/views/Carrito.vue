<template>
  <div>
    <NavBar></NavBar>

    <v-container class="lighten-5">
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
                          @click="
                            disminuir_cantidad(
                              carro.producto_id,
                              carro.carrito_id
                            )
                          "
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
                        <v-icon small @click="dialog = true">
                          <!--<v-icon small @click="deleteCarritoItem(carro.carrito_id,carro.producto_id)">-->
                          mdi-delete
                        </v-icon>

                        <!--dialog-->
                        <v-dialog v-model="dialog" max-width="290">
                          <v-card>
                            <v-card-title class="headline">
                              Eliminar el producto
                            </v-card-title>

                            <v-card-text>
                              ¿Desea eliminar el producto
                              <b>{{ carro.nombre }}</b> del carrito?
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer></v-spacer>

                              <v-btn
                                color="green darken-1"
                                text
                                @click="dialog = false"
                              >
                                NO
                              </v-btn>

                              <v-btn
                                color="green darken-1"
                                text
                                @click="
                                  deleteCarritoItem(
                                    carro.carrito_id,
                                    carro.producto_id
                                  ),
                                    (dialog = false)
                                "
                              >
                                SI
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
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
                <v-col cols="12" md="8" sm="6">
                  <h1 class="mt-5 ml-5">Total</h1>
                </v-col>
                <v-col cols="6" md="4"
                  ><v-text-field id="TOTAL" disabled></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                    class="col-6"
                    id="te"
                    :items="items"
                    item-text="metodo"
                    item-value="id_metodo_pago"
                    label="Seleccione el Método de pago*"
                    required
                    v-model="metodo_pago.id"
                    :rules="[(v) => !!v || 'Método requerido']"
                  ></v-select
                ></v-col>
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
import Productos from "../apis/Productos";
import Pedido from "../apis/Pedidos";
import Metodo from "../apis/Metodos";
import Footer from "../components/Footer";

export default {
  name: "Carrito",
  components: {
    NavBar,
    Footer,
  },

  data: () => ({
    items: [],
    carrito: [],
    user: { role: "", nombre: "", email: "", id: "" },
    pedido: {},
    dialog: false,
    metodo_pago: {},
  }),

  created: async function () {
    this.user = JSON.parse(sessionStorage.getItem("session"));
    if (this.user == null) {
      this.$router.push("/");
    }
  
    try {
      const id = this.user.id;
      const idCarrito = await Carrito.get(`/getCarritoId/${id}`);
      const aux = idCarrito.data.data.cliente.id_carrito;
      const idCarritoProductos = await Carrito.get(`/getCarrito_tabla/${aux}`);

      this.carrito = idCarritoProductos.data.data.cliente;

      const metodosDePago = await Metodo.get("/get");
      this.items = metodosDePago.data.data.metodos;

      //redireccionar al inicio si no esta logueado

      if(this.carrito.length>0){
      this.getTotalofCarShop();

      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    obtenertotal() {
      var productos = this.carrito;
      var acu = 0;
      for (var i = 0; i < productos.length; i++) {
        acu =
          acu +
          parseFloat(
            document.getElementById("total" + productos[i].producto_id)
              .innerHTML
          );
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

    disminuir_cantidad: function (id_producto, idCarrito) {
      if (document.getElementById("cantidad" + id_producto).innerHTML == 1) {
        this.dialog = true;
      } else {
        document.getElementById("cantidad" + id_producto).innerHTML =
          parseInt(
            document.getElementById("cantidad" + id_producto).innerHTML
          ) - 1;
        var total = document.getElementById("total" + id_producto);

        total.innerHTML = (
          parseFloat(
            document.getElementById("precio" + id_producto).innerHTML
          ) *
          parseInt(document.getElementById("cantidad" + id_producto).innerHTML)
        ).toFixed(1);
        this.obtenertotal();
      }
    },
    async insertar_tblpedido() {
      if (this.carrito.length == 0) {
        console.log("Carro vacio");
      } else {
        if (this.metodo_pago.id != undefined) {
          this.pedido.id_cliente = this.user.id;
          this.pedido.total = document.getElementById("TOTAL").value;
          this.pedido.id_metodo = this.metodo_pago.id;
          //1ro Hacemos update a la tabla intermedia de carrito
          var productosencarrito = this.carrito;
          this.update(productosencarrito);//ponerle un set time out para que no haya problemas 
          //creamos nuevo pedido
          const nuevo_pedido = await Pedido.post("/create/", this.pedido);
          // disminuimos el stock de esos productos antes de eliminarlos xd
          this.disminuirStock(productosencarrito);
          //insertamos en nuestra tabla que sera nuestro historial
          this.insertIntoTbl_pedido_detalle();
        } else {
          console.log("falta escoger metodo de pago");
        }
      }
    },

    async update(productosencarrito) {
      for (var i = 0; i < productosencarrito.length; i++) {
        await Carrito.put(
          `/update/${this.carrito[i].producto_id}/${
            document.getElementById(
              "cantidad" + productosencarrito[i].producto_id
            ).innerHTML
          }`
        );
      }
    },

    async deleteCarritoItem(idCarrito, IdProducto) {
      console.log(
        "el id del carrito es: " + idCarrito + " y producto " + IdProducto
      );
      const eliminarItem = await Carrito.delete(
        `/deleteItemCarrito/${idCarrito}/${IdProducto}`
      );
      const index = this.carrito.findIndex((c) => c.id_producto == IdProducto);
      this.carrito.splice(index, 1); //Desaparecer al instante  asyncrono
    },

    async deleteAfterBuy() {
      const id = this.user.id;
      const idCarrito = await Carrito.get(`/getCarritoId/${id}`);
      const aux = idCarrito.data.data.cliente.id_carrito;
      const eliminar = await Carrito.delete(`/deleteMid/${aux}`);
      this.carrito = [];
      document.getElementById("TOTAL").value = "";
    },
    async getTotalofCarShop() {
      const id = this.user.id;
      const idCarrito = await Carrito.get(`/getCarritoId/${id}`);
      const aux = idCarrito.data.data.cliente.id_carrito;
      const monto = await Carrito.get(`/getTotal/${aux}`);
      document.getElementById("TOTAL").value = monto.data.data.carrito.sum;
    },

    async insertIntoTbl_pedido_detalle() {
      const id = this.user.id;
      const idCarrito = await Carrito.get(`/getCarritoId/${id}`);
      const aux2 = idCarrito.data.data.cliente.id_carrito;

      const idCarritoProductos = await Carrito.get(`/getCarrito_tabla/${aux2}`);
      var productosencarrito = idCarritoProductos.data.data.cliente;
      const last_id_pedido = await Pedido.get("/getLastIdPedido_detalle");
      var aux = last_id_pedido.data.data.last[0].max;

      for (var i = 0; i < productosencarrito.length; i++) {
        await Pedido.post(
          `/insertPedido_detalle/${aux}`,
          productosencarrito[i]
        );
      }

      this.deleteAfterBuy();
    },
    async disminuirStock(productosencarrito) {
      for (var i = 0; i < productosencarrito.length; i++) {
        await Productos.put(
          `/updateStock/${this.carrito[i].producto_id}/${
            document.getElementById(
              "cantidad" + productosencarrito[i].producto_id
            ).innerHTML
          }`
        );
      }
    },
  },
};
</script>