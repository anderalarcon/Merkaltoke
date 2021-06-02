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
        <v-card-title>Create a new area</v-card-title>
        <v-card-text>
          <v-form ref="addForm" @submit.prevent="Save()">
            <v-text-field
              prepend-icon="mdi-biohazard"
              v-model="producto.nombre"
              label="Nombre"
              :rules="[(v) => !!v || 'Name is required']"
            >
            </v-text-field>
            <v-text-field
              type="number"
              prepend-icon="mdi-biohazard"
              v-model="producto.precio"
              label="Precio"
              :rules="[(v) => !!v || 'code is required']"
            >
            </v-text-field>
            <v-text-field
              type="number"
              prepend-icon="mdi-biohazard"
              v-model="producto.stock"
              label="Stock"
              :rules="[(v) => !!v || 'code is required']"
            >
            </v-text-field>
            <v-text-field
              prepend-icon="mdi-biohazard"
              v-model="producto.detalle"
              label="Detalle"
              :rules="[(v) => !!v || 'Name is required']"
            >
            </v-text-field>
            <v-select
            :items="categorias"
            item-text="categoria"
            
            item-value="id_categoria"
              label ="Categoria"
             v-model="producto.id_categoria"
              :rules="[(v) => !!v || 'categoria is required']"
            >
            </v-select>
              <v-file-input 
              
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Escoja una imagen"
              
              label="Imagen de producto"
            ></v-file-input>

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
import Categorias from "../../apis/Categorias";

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
         console.log(this.categorias[1]);
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
      
      //console.log(this.productos.nombre);
      //console.log(this.productos.precio);
      //console.log(this.productos.stock);
      //console.log(this.productos.detalle);
      var id=this.user.id;
      
     this.producto.id_proveedor=id.toString();
     // console.log(this.productos.id_proveedor)
     // console.log(this.productos.id_categoria);
      console.log(this.producto)
     // console.log(id);
      const nuevo_producto=await Productos.post("/create",this.producto); 
      
      
      
    },
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