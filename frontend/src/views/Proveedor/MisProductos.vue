<template>
  <div>
    <NavBar></NavBar>

    <v-container class="mt-5">
      <v-card elevation="15" shaped loading class="pb-3">
        <v-card-title>
          Gestión de Productos
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
          ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="productos" :search="search">
          <template v-slot:item="row">
            <tr>
              <td>{{ row.item.nombre }}</td>
              <td>{{ row.item.precio }}</td>
              <td>{{ row.item.stock }}</td>
              <td>{{ row.item.detalle }}</td>

              <td>{{ row.item.categoria }}</td>

              <td>
                <v-btn
                  color="orange"
                  x-small
                  small
                  dark
                  fab
                  class=""
                  @click="readMemberToUpdate()"
                >
                  <v-icon small> mdi-pencil </v-icon></v-btn
                >
                <v-btn
                  color="red"
                  x-small
                  small
                  dark
                  fab
                  @click="readProductoToDelete(row.item.id_producto)"
                >
                  <v-icon small> mdi-delete </v-icon>
                </v-btn>
              </td>
            </tr>
          </template></v-data-table
        >
      </v-card>
    </v-container>
    <Footer></Footer>

    <v-btn @click="add = true" color="red" large right fixed botoom fab dark
      ><v-icon>mdi-plus</v-icon></v-btn
    >

    <!--  Modal crear Producto -->
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
            <v-btn  block class="success ma-2" type="submit">Add</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Modal Eliminar -->
    <v-dialog v-model="advertencia" persistent max-width="450">
      <v-card>
        <v-card-title class="headline"> Eliminar el producto </v-card-title>

        <v-card-text> ¿Desea eliminar el producto ? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="advertencia = false">
            NO
          </v-btn>

          <v-btn color="red" text @click="deleteProducto()"> SI </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Productos from "../../apis/Productos";
import Proveedor from "../../apis/Proveedor";
import Carrito from "../../apis/Carrito";

export default {
  name: "MisProductos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    productos: [],
    search: "",
    advertencia: false,
    dialogDelete: false,
    productoToDelete: {},
    headers: [
      {
        text: "Producto",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      { text: "Precio", value: "precio", sortable: true },
      { text: "Stock", value: "stock" },
      { text: "Detalle", value: "detalle", sortable: false },
      { text: "Categoria", value: "categoria", sortable: false },
      { text: "Operacion", value: "operacion", sortable: false },
    ],

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

  methods: {
    async readProductoToDelete(id_producto) {
      const res = await Productos.get(`/get/${id_producto}`);

      this.advertencia = true;
      this.productoToDelete = res.data.data.producto;
      console.log(this.productoToDelete);
    },

    async deleteProducto() {
      try {
        //Primero borrar la tabla anterior carrito_producto

        await Carrito.delete(
          `/deleteProductFromAllCars/${this.productoToDelete.id_producto}`
        );
        await Productos.delete(`/delete/${this.productoToDelete.id_producto}`);
        /*  const index = this.productos.findIndex(
          (c) => c.id_producto == this.productoToDelete.id_producto
        );
        this.productos.splice(index, 1); */
        this.advertencia = false;
        /*     this.alert = {
          show: true,
          type: "Completado",
          message: "Completo producto borrado",
        }; */
      } catch (error) {
        /*      this.alert = {
          show: true,
          type: "error",
          message: error,
        }; */
        console.log(error);
      }
    },
  },
};
</script>