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
          Gestión de Proveedores
          <v-spacer></v-spacer>
      
        </v-card-title>
        <v-data-table :headers="headers" :items="proveedores">
          <template v-slot:item="row">
            <tr>
              <td>{{ row.item.nombre_proveedor }}</td>
              <td>{{ row.item.email_proveedor }}</td>
              <td>{{ row.item.direccion_proveedor }}</td>
              <td>{{ row.item.activo }}</td>
              <td :id="`visible${row.item.id_proveedor}`">
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
                  @click="readProductoToUpdate(row.item.id_proveedor)"
                >
                  <v-icon small> mdi-pencil </v-icon></v-btn
                >
                <v-btn
                  color="red"
                  x-small
                  small
                  dark
                  fab
                  @click="readProductoToDelete(row.item.id_proveedor)"
                >
                  <v-icon small> mdi-delete </v-icon></v-btn>
                
               <v-btn
                  color="red"
                  x-small
                  small
                  dark
                  fab
                  @click="readCuentaToDelete(row.item.id_proveedor)"
                >
                  <v-icon small> mdi-cancel </v-icon>
                </v-btn>
                 <v-btn
                 color="green"
                 x-small
                 small
                 dark
                 fab
                 v-bind:href="'/Productos-Proveedor/' + row.item.id_proveedor"
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

    
    <!--  Modal Editar Producto
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
    </v-dialog>-->

    <!-- Modal Eliminar 
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
    </v-dialog>-->
     <v-dialog v-model="advertencia2" persistent max-width="450">
      <v-card>
        <v-card-title class="headline"> Eliminar la cuenta </v-card-title>

        <v-card-text> ¿Desea eliminar su suscripcion ? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="advertencia2 = false">
            NO
          </v-btn>

          <v-btn color="red" text @click="Cancel(prueba)"> SI </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NavBar from "../../components/NavBarProveedor";

import Proveedor from "../../apis/Proveedor";
import Productos from "../../apis/Productos";
import Categorias from "../../apis/Categorias";


export default {
  name: "AdminProveedores",
  components: {
    NavBar,

  },
  data: () => ({
    proveedores: [],
    datos: {},
    proveedorToUpdate: {},
    search: "",
    prueba: "",
    productos: [],

    productoToUpdate: [],
    advertencia2: false,
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
      { text: "Correo", value: "Correo", sortable: true },
      { text: "Direccion", value: "Direccion" },
      { text: "Activo", value: "activo", sortable: false },
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
        
        const proveedores = await Proveedor.get("/get");
        this.proveedores = proveedores.data.data.proveedores;

        const res = await Proveedor.get(`/getProductos-Proveedor2/${id}`);

        this.productos = res.data.data.productos;
        console.log(this.productos)

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
    
    
    async Cancel(id_proveedor) {
         
          var id =id_proveedor.toString();
          const nuevo_producto = await Productos.put(`/updatecancel/${id}`);
          const c = await Proveedor.put(`/updatecancel/${id}`);

          const a = await Proveedor.get(`/getProductos-Proveedor/${id}`);

        this.productos = a.data.data.productos;
        
          console.log(this.productos)

        this.advertencia2 = false;
          
    },
    async readCuentaToDelete(id_proveedor) {
     
      this.advertencia2 = true;
      this.prueba = id_proveedor;  
    },
  
  },
};
</script>
