<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <h1>Pedidos</h1>
      <v-row justify="center">
        <v-card
          class="mx-3"
          max-width="344"
          v-for="pedido in pedidos"
          :key="pedido.id_pedido"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Pedido: {{ pedido.id_pedido }} </v-card-title>

          <v-card-subtitle> Fecha: {{ pedido.fecha }} </v-card-subtitle>

          <v-card-actions>
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="orange" dark v-bind="attrs" v-on="on">
                  Comprobante de Pago
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark color="orange">
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Comprobante de Pago</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
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
                      <p> Ruc : 00010120</p>
                      <p>Empresa: Merkaltoke</p>
                      <p>Ubicación: San Isidro</p>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <v-flex md-3>
                      <p>Cliente: Carlos Perez</p>
                      <p>Dni | Ruc : 123456789</p>
                    </v-flex>
                    <v-flex md-3>
                      <p>Ciudad: Lima</p>
                      <p>Distrito: Miraflores</p>
                    </v-flex>
                    <v-flex md-3>
                      <p>Fecha : 05-12-2021</p>
                    </v-flex>
                  </v-layout>

                  <template>
                    <v-simple-table height="300px">
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Producto</th>
                            <th class="text-left">Detalle</th>
                            <th class="text-left">Unidades</th>
                            <th class="text-left">Precio/und</th>
                            <th class="text-left">Monto</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Gaseosa Inca Cola</td>
                            <td>5 und</td>
                            <td>100</td>
                            <td>50</td>
                            <td>5000</td>
                          </tr>
                          <tr>
                            <td>Gaseosa Coca Cola</td>
                            <td>5 und</td>
                            <td>120</td>
                            <td>50</td>
                            <td>6000</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                    <v-btn @click="dialog = false">Ok</v-btn>
                  </template>
                </v-container>
              </v-card>
            </v-dialog>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text> Estado: {{ pedido.estado }} </v-card-text>
              <v-card-text> Monto total: {{ pedido.total }} </v-card-text>
            </div>
          </v-expand-transition>
        </v-card></v-row
      >
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Pedidos from "../apis/Pedidos";
import Footer from "../components/Footer";
export default {
  name: "Pedidos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    pedidos: [],
    show: false,
    dialog: false,
  }),
  /*     watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 3000)
      },
    }, */

  created: async function () {
    //al cargar la pagina
    try {
      //redireccionar al inicio si no esta logueado
      

      console.log(this.pedidos);

      this.user = JSON.parse(sessionStorage.getItem("session"));
      if (this.user == null) {
        this.$router.push("/");
      }


      const res = await Pedidos.get(`/get_pedidos_cliente/${this.user.id}`);
      this.pedidos = res.data.data.pedido;
      
      console.log(this.res)

      

    } catch (error) {
      console.log(error);
    }
  },
};
</script>