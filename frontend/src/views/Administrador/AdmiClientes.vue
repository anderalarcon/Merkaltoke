<template>
  <div>
   
<NavBarAdmin></NavBarAdmin>
    <v-container>
      <v-alert v-model="alert.show" :type="alert.type" dismissible>
        {{ alert.message }}
      </v-alert></v-container
    >
    <v-container class="mt-5">
      <v-card elevation="15" shaped loading class="pb-3">
        <v-card-title>
          Gestión de Clientes
          <v-spacer></v-spacer>
      
        </v-card-title>
        <v-data-table :headers="headers" :items="clientes">
          <template v-slot:item="row">
            <tr>
              <td>{{ row.item.nombre_cliente }}</td>
              <td>{{ row.item.email_cliente }}</td>
              <td>{{ row.item.direccion_cliente }}</td>
              <td>{{ row.item.dni }}</td>
            <!--   <td :id="`visible${row.item.id_cliente}`">
                {{ row.item.visible }}
              </td> -->

              <td>
                <v-btn
                  color="orange"
                  x-small
                  small
                  dark
                  fab
                  class=""
                  @click="ClienteToUpdate(row.item.id_cliente)"
                >
                  <v-icon small> mdi-pencil </v-icon></v-btn>                 
              </td>
            </tr>
          </template></v-data-table
        >
      </v-card>
    </v-container>
  

    
    <v-dialog v-model="updating" msx-width="600px">
      <v-card>
        <v-form ref="updateCliente" @submit.prevent="updateCliente()">
          <v-card-title>Editar Cliente</v-card-title>
          <v-card-text>
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="clientToUpdate.nombre_cliente"
              label="Nombre"
              :rules="[(v) => !!v || 'Nombre es requerido']"
            >
            </v-text-field>
            <v-text-field
              type="number"
              prepend-icon="mdi-pencil"
              v-model="clientToUpdate.dni"
              label="DNI"
              :rules="[(v) => !!v || 'DNI es requerido']"
            >
            </v-text-field>
            
            
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="clientToUpdate.email_cliente"
              label="Correo"
              :rules="[(v) => !!v || 'Correo es requerido']"
            >
            </v-text-field>
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="clientToUpdate.direccion_cliente"
              label="Direccion"
              :rules="[(v) => !!v || 'Direccion es requerido']"
            >
            </v-text-field>
            <v-btn block class="success ma-2" type="submit"
              >Actualizar datos</v-btn
            >
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
import Cliente from "../../apis/Cliente";
import NavBarAdmin from "../../components/NavBarAdmin.vue"


export default {
  name: "AdmiClientes",
  components: {
    NavBar,
    Footer,
    NavBarAdmin
  },
  data: () => ({
    clientes: [],
    datos: {},
    
    search: "",
    prueba: '',
    
    
    productos: [],
    clientToUpdate: [],
    updating: false,
    deleting: false,
    advertencia: false,
    dialogDelete: false,
    productoToDelete: {},
    alert: { show: false },
    headers: [
      { text: "Nombre", value: "nombre", sortable: false, align: "start"},
      { text: "Correo", value: "Correo", sortable: true },
      { text: "Direccion", value: "Direccion" },
      { text: "DNI", value: "activo", sortable: false },
            { text: "Operaciones", sortable: false },

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
        
        const clientes = await Cliente.get("/get");
        this.clientes = clientes.data.data.clientes;

        const res = await Proveedor.get(`/getProductos-Proveedor2/${id}`);

        this.productos = res.data.data.productos;
        console.log(this.productos)

    /*     const categoria = await Categorias.get("/get");
        this.categorias = categoria.data.data.categorias; */

        if (this.user.role == "administrador") {
        } else {
          this.$router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    
    async ClienteToUpdate(id_cliente) {
        
     // const res = await Proveedor.get(`/get/${id_proveedor}`);
     console.log(id_cliente)
      const res = await Cliente.get(`/getAdmi/${id_cliente}`)
      this.updating = true;
      console.log(res.data.data.clientes)
      this.clientToUpdate = res.data.data.clientes;
      console.log(this.clientToUpdate)
    },
    
    async updateCliente() {
         
      console.log(this.clientToUpdate);
      await Cliente.put(
        `/perfilUpdate/${this.clientToUpdate.id_cliente}`,
        this.clientToUpdate
      );
      
       setTimeout(()=>{
             this.updating = false;
         window.location.reload(); 
       
        },1000)
    },

    //deleteCliente
    async deleteCliente(id_cliente) {
      //console.log(this.prueba)
      const res = await Cliente.delete(`/delete/${id_cliente}`)
      this.deleting = false;
    },
  },
};
</script>