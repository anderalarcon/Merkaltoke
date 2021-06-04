<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <v-alert v-model="alert.show" :type="alert.type" dismissible>
        {{ alert.message }}
      </v-alert></v-container
    >
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

              <td :id="`visible${row.item.id_producto}`">
                {{ row.item.visible }}
              </td>

              <td>
                <v-btn
                  color="orange"
                  x-small
                  small
                  dark
                  fab
                  class=""
                  @click="readProductoToUpdate(row.item.id_producto)"
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
                <v-btn
                  color="green"
                  x-small
                  small
                  dark
                  fab
                  @click="HacerVisible(row.item.id_producto)"
                >
                  <v-icon small> mdi-eye </v-icon>
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
        <v-card-title>Crear producto</v-card-title>
        <v-card-text>
          <v-form ref="addForm" @submit.prevent="Save()">
            <v-text-field
              prepend-icon="mdi-biohazard"
              v-model="producto.nombre"
              label="Nombre"
              :rules="[(v) => !!v || 'Nombre es requerido']"
            >
            </v-text-field>
            <v-text-field
              type="number"
              prepend-icon="mdi-biohazard"
              v-model="producto.precio"
              label="Precio"
              :rules="[(v) => !!v || 'Precio es requerido']"
            >
            </v-text-field>
            <v-text-field
              type="number"
              prepend-icon="mdi-biohazard"
              v-model="producto.stock"
              label="Stock"
              :rules="[(v) => !!v || 'Stock es requerido']"
            >
            </v-text-field>
            <v-text-field
              prepend-icon="mdi-biohazard"
              v-model="producto.detalle"
              label="Detalle"
              :rules="[(v) => !!v || 'Detalle es requerido']"
            >
            </v-text-field>
            <v-select
              :items="categorias"
              prepend-icon="mdi-biohazard"
              item-text="categoria"
              item-value="id_categoria"
              label="Categoria"
              v-model="producto.id_categoria"
              :rules="[(v) => !!v || 'Categoria es requerido']"
            >
            </v-select>
            <v-text-field
              prepend-icon="mdi-biohazard"
              v-model="producto.img_producto"
              label="Url img "
              :rules="[(v) => !!v || 'Url img es requerido']"
            >
            </v-text-field>

            <v-btn block class="success ma-2" type="submit">Crear</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--  Modal Editar Producto-->
    <v-dialog v-model="updating" max-width="600px">
      <v-card>
        <v-form ref="updateProducto" @submit.prevent="updateProducto()">
          <v-card-title>Editar Producto</v-card-title>
          <v-card-text>
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="productoToUpdate.nombre"
              label="Nombre"
              :rules="[(v) => !!v || 'Nombre es requerido']"
            >
            </v-text-field>
            <v-text-field
              type="number"
              prepend-icon="mdi-pencil"
              v-model="productoToUpdate.precio"
              label="Precio"
              :rules="[(v) => !!v || 'Precio es requerido']"
            >
            </v-text-field>
            <v-text-field
              type="number"
              prepend-icon="mdi-pencil"
              v-model="productoToUpdate.stock"
              label="Stock"
              :rules="[(v) => !!v || 'Stock es requerido']"
            >
            </v-text-field>
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="productoToUpdate.detalle"
              label="Detalle"
              :rules="[(v) => !!v || 'Detalle es requerido']"
            >
            </v-text-field>
            <v-select
              :items="categorias"
              prepend-icon="mdi-pencil"
              item-text="categoria"
              item-value="id_categoria"
              label="Categoria"
              v-model="productoToUpdate.id_categoria"
              :rules="[(v) => !!v || 'Categoria es requerido']"
            >
            </v-select>
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="productoToUpdate.img_producto"
              label="Url img "
              :rules="[(v) => !!v || 'Url img es requerido']"
            >
            </v-text-field>
            <v-btn block class="success ma-2" type="submit"
              >Actualizar datos</v-btn
            >
          </v-card-text>
        </v-form>
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
import Categorias from "../../apis/Categorias";

import { test } from "../../apis/test";

export default {
  name: "MisProductos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    productos: [],
    producto: {},
    categorias: [],
    search: "",
    productoToUpdate: [],
    updating: false,
    advertencia: false,
    dialogDelete: false,
    productoToDelete: {},
    alert: { show: false },
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

      { text: "Visible", value: "visible", sortable: false },
      { text: "Operacion", value: "operacion", sortable: false },
    ],

    add: false,
  }),
  created: async function () {
    test(); //si funca
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        const id = this.user.id;

        const res = await Proveedor.get(`/getProductos-Proveedor/${id}`);

        this.productos = res.data.data.productos;

        const categoria = await Categorias.get("/get");
        this.categorias = categoria.data.data.categorias;

        if (this.user.role == "proveedor") {
        } else {
          this.$router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async Save() {
      //boton para que se abra modal
      let valid = this.$refs.addForm.validate();
      if (valid) {
        try {
          var id = this.user.id;
          this.producto.id_proveedor = id.toString();
          const nuevo_producto = await Productos.post("/create", this.producto);
          const res = await Proveedor.get(`/getProductos-Proveedor/${id}`);
          this.productos = res.data.data.productos;
          this.$refs.addForm.reset(); //borrar todo en modal
          this.add = false; //cerrar modal
          this.alert = {
            show: true,
            type: "success",
            message: " Producto Creado !",
          };
        } catch (error) {
          this.add = false;
          this.alert = {
            show: true,
            type: "error",
            message: error,
          };
        }
      }
    },

    async readProductoToUpdate(id_producto) {
      const res = await Productos.get(`/get/${id_producto}`);
      this.updating = true;
      this.productoToUpdate = res.data.data.producto;
    },

    async updateProducto() {
      let valid = this.$refs.updateProducto.validate();

      if (valid) {
        try {
          const res = await Productos.put(
            `/update/${this.productoToUpdate.id_producto}`,
            this.productoToUpdate
          );

          const index = this.productos.findIndex(
            (c) => c.id_producto == this.productoToUpdate.id_producto
          );
          this.productos[index].nombre = this.productoToUpdate.nombre;
          this.productos[index].precio = this.productoToUpdate.precio;
          this.productos[index].stock = this.productoToUpdate.stock;
          this.productos[index].detalle = this.productoToUpdate.detalle;
          this.productos[
            index
          ].img_producto = this.productoToUpdate.img_producto;
          const aux2 = await Productos.get(
            `/getcat/${this.productoToUpdate.id_producto}`
          );
          this.productos[index].categoria = aux2.data.data.producto.categoria;
          this.updating = false;
          this.alert = {
            show: true,
            type: "success",
            message: "Producto editado con éxito",
          };
        } catch (error) {
          this.updating = false;
          this.alert = {
            show: true,
            type: "error",
            message: error,
          };
        }
      } else {
        console.log("falta llenar");
      }
    },

    async readProductoToDelete(id_producto) {
      const res = await Productos.get(`/get/${id_producto}`);
      this.advertencia = true;
      this.productoToDelete = res.data.data.producto;
    },

    async deleteProducto() {
      try {
        //Primero borrar la tabla anterior carrito_producto

        await Carrito.delete(
          `/deleteProductFromAllCars/${this.productoToDelete.id_producto}`
        );
        await Productos.delete(`/delete/${this.productoToDelete.id_producto}`);
        const index = this.productos.findIndex(
          (c) => c.id_producto == this.productoToDelete.id_producto
        );
        this.productos.splice(index, 1);
        this.advertencia = false;
        this.alert = {
          show: true,
          type: "success",
          message: "Producto Eliminado",
        };
      } catch (error) {
        this.advertencia = false;
        this.alert = {
          show: true,
          type: "error",
          message: error.response.data.message,
        };
      }
    },
    async HacerVisible(id_producto) {
      var visible = document.getElementById("visible" + id_producto);
      visible.innerHTML = visible.innerHTML == "si" ? "no" : "si";
      //Hacer el update de visible  y ya ps
    },
  },
};
</script>