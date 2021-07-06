<template>
  <div>
    
    <NavBarAdmin></NavBarAdmin>

    
    <v-container class="mt-5">
      <v-card elevation="15" shaped loading class="pb-3">
        <v-card-title>
          Gestión de Productos del Proveedor  {{ user.nombre_proveedor }}
          <v-spacer></v-spacer>
         
        </v-card-title>
        <v-data-table :headers="headers" :items="productos" >
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
    
  </div>
</template>

<script>
import Proveedor from "../apis/Proveedor";
import NavBarAdmin from "../components/NavBarAdmin.vue"



export default {
  name: "Provductos-Proveedor",
  components: {
   NavBarAdmin,
  },
  data: () => ({
    productos: [],
    user:{},
     search: "",
    prueba: '',
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

  methods: {
    
  },
  created: async function () {
        this.user = JSON.parse(sessionStorage.getItem("session"));
  

    try {
      const id = this.$route.params.id;
       const a= await Proveedor.get(`/get/${id}`);
        this.user=a.data.data.proveedores
        console.log(this.user)
      console.log(id);
      const res = await Proveedor.get(`/getProductos-Proveedor/${id}`);
      this.productos = res.data.data.productos;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
