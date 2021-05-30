<template>
  <div>
    <NavBar></NavBar>
    <v-container class="lighten-5">
      <h1 class="mb-5">Mis Productos</h1>
      <v-row no-gutters>
        <v-col>
          <!-- TABLA NUEVA-->
          <v-card>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-data-table
              :headers="headers"
              :items="desserts"
              sort-by="precio"
              class="elevation-1"
              :search="search"
            >
              <template v-slot:top>
                <v-btn
                  @click="add = true"
                  color="red"
                  large
                  right
                  fixed
                  botoom
                  fab
                  dark
                  ><v-icon>mdi-plus</v-icon></v-btn
                >

                <v-dialog v-model="add" max-width="500">
                  <v-card>
                    <v-card-title>Create a new area</v-card-title>
                    <v-card-text>
                      <v-form ref="addForm" @submit.prevent="addArea()">
                        <v-text-field
                          prepend-icon="mdi-biohazard"
                          label="Name"
                          :rules="[(v) => !!v || 'Name is required']"
                        >
                        </v-text-field>
                        <v-text-field
                          type="number"
                          prepend-icon="mdi-biohazard"
                          label="Code"
                          :rules="[(v) => !!v || 'code is required']"
                        >
                        </v-text-field>
                        <v-btn block class="success ma-2" type="submit"
                          >Add</v-btn
                        >
                      </v-form>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </template>

              <template>
                <v-icon small class="mr-2" @click="dialog = true">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
            </v-data-table>

            <!-- TABLA ANTERIOR-->
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Producto</th>
                    <th class="text-left">Precio</th>
                    <th class="text-left">Stock</th>
                    <th class="text-left">Detalle</th>
                    <th class="text-left">Categoria</th>
                    <th class="text-left">Operacion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="producto in productos" :key="producto.id_producto">
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.precio }}</td>
                    <td>{{ producto.stock }}</td>
                    <td>{{ producto.detalle }}</td>
                    <td>{{ producto.categoria }}</td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon small @click="dialog = true">
                          mdi-pencil
                        </v-icon>
                      </v-btn>

                      <v-btn class="mx-2" fab dark small color="pink">
                        <v-icon small @click="dialog = true">
                          <!--<v-icon small @click="">-->
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>

          <v-btn
            @click="add = true"
            color="red"
            large
            right
            fixed
            botoom
            fab
            dark
            ><v-icon>mdi-plus</v-icon></v-btn
          >

          <v-dialog v-model="add" max-width="500">
            <v-card>
              <v-card-title>Create a new area</v-card-title>
              <v-card-text>
                <v-form ref="addForm" @submit.prevent="addArea()">
                  <v-text-field
                    prepend-icon="mdi-biohazard"
                    label="Name"
                    :rules="[(v) => !!v || 'Name is required']"
                  >
                  </v-text-field>
                  <v-text-field
                    type="number"
                    prepend-icon="mdi-biohazard"
                    label="Code"
                    :rules="[(v) => !!v || 'code is required']"
                  >
                  </v-text-field>
                  <v-btn block class="success ma-2" type="submit">Add</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-dialog>
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
export default {
  name: "MisProductos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    productos: [],
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Producto",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Precio", value: "precio" },
      { text: "Stock", value: "stock" },
      { text: "Detalle", value: "detalle" },
      { text: "Operacion", value: "operacion", sortable: false },
    ],
    desserts: [
      {
        name: "Coca cola",
        precio: 159,
        stock: 6.0,
        detalle: 24,
      },
      {
        name: "Chicha Morada",
        precio: 237,
        stock: 9.0,
        detalle: 37,
      },
      {
        name: "Inka Cola",
        precio: 262,
        stock: 16.0,
        detalle: 23,
      },
    ],
    editedIndex: -1,
    editedItem: {
      name: "",
      precio: 0,
      stock: 0,
      detalle: 0,
    },
    defaultItem: {
      name: "",
      precio: 0,
      stock: 0,
      detalle: 0,
    },
    add: false,
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