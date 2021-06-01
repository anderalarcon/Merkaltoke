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
            <v-data-table
              :headers="headers"
              :items="productos"
              :search="search"
            >
              <template v-slot:item="row">
                <tr>
                  <td>{{ row.item.nombre }}</td>
                  <td>{{ row.item.fecha }}</td>
                  <td>{{ row.item.precio }}</td>
                  <td></td>
                  <td></td>
                  <td>{{ row.item.detalle }}</td>
                  <td>Por confirmar</td>
                </tr>
              </template></v-data-table
            >
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
          value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    productos: [],
    search: "",
    headers: [
      {
        text: "Producto",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      { text: "Cantidad", value: "cantidad", sortable: true },
      { text: "Precio", value: "precio", sortable: true },
      { text: "Total", value: "total" },
      { text: "Fecha", value: "fecha" },  
      { text: "Detalle", value: "detalle" },
      { text: "Estado", value: "estado", sortable: false },
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