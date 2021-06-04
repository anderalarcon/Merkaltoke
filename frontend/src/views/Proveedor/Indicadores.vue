<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card class="mt-5" style="margin: auto">
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
                  <td>{{ row.item.total }}</td>
                  <td>
                    <v-btn
                      color="green"
                      x-small
                      small
                      dark
                      fab
                      
                      @click="VerProducto(row.item.id_pedido,row.item.id_proveedor)"
                    >
                      <v-icon small> mdi-eye </v-icon>
                      <v-dialog v-model="dialog" max-width="700">
                        <v-card>
                          <v-card-title class="headline">
                            Productos
                            <v-spacer></v-spacer>
                            <v-text-field
                              v-model="search1"
                              append-icon="mdi-magnify"
                              label="Search"
                              single-line
                            ></v-text-field>
                          </v-card-title>

                          <v-data-table
                            :headers="headers2"
                            :items="mostrarProductos"
                            :search="search1"
                          >
                               <tr>
                                <td>{{ row.item.nombre }}</td>
                                <td>{{ row.item.cantidad }}</td>
                                <td>{{ row.item.precio }}</td>
                             
                               </tr>


<!---->
                          </v-data-table>
                          <v-btn color="green darken-1" text @click="dialog = false"> ok </v-btn>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-btn>
                  </td>
                </tr> </template
            ></v-data-table>
          </v-card>
          <v-card> </v-card>
          <v-card
            class="mx-auto text-center"
            color="green"
            dark
            max-width="600"
          >
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                  :value="value"
                  color="rgba(255, 255, 255, .7)"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                >
                  <template v-slot:label="item"> ${{ item.value }} </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="display-1 font-weight-thin">Sales Last 24h</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="justify-center">
              <v-btn block text> Go to Report </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
import Pedidos from "../../apis/Pedidos";
export default {
  name: "MisPedidos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760],
    dialog: false,
    productos: [],
    mostrarProductos: [],
    pedidos: [],
    search: "",
    search1: "",
    headers: [
      {
        text: "Pedido",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Proveedor", value: "proveedor", sortable: true },
      { text: "Fecha", value: "Fecha", sortable: true },
      { text: "Ingreso", value: "total" },
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
     // { text: "Monto", value: "total", sortable: true },
    ],
  }),
  created: async function () {
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        const id = this.user.id;
        console.log(id);
        const res = await Proveedor.get(`/getProductos-Proveedor/${id}`);
        this.productos = res.data.data.productos;
        console.log(this.productos);

        //Prueba
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
    async VerProducto(id_pedido,id_proveedor) {
      const res = await Pedidos.get(`/getpedido_productos/${id_pedido}/${id_proveedor}`);

      this.dialog = true;
      this.mostrarProductos = res.data.data.pedidos;

    },
  },
};
</script>