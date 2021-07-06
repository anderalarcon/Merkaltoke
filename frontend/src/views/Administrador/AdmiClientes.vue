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
              <td :id="`visible${row.item.id_cliente}`">
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
                  @click="ClienteToUpdate(row.item.id_cliente)"
                >
                  <v-icon small> mdi-pencil </v-icon></v-btn>


                <v-btn
                  color="red"
                  x-small
                  small
                  dark
                  fab
                  @click="readProductoToDelete(row.item.id_cliente)"
                >
                  <v-icon small> mdi-delete </v-icon></v-btn>
                
               
                 
              </td>
            </tr>
          </template></v-data-table
        >
      </v-card>
    </v-container>
    <Footer></Footer>

    
    <v-dialog v-model="updating" msx-width="600px">
      <v-card>
        <v-form ref="updateProveedor" @submit.prevent="updateProveedor()">
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

    
     <v-dialog v-model="advertencia2"  max-width="450">
      <v-card>
        <v-card-title class="headline"> CUENTA PROVEEDOR </v-card-title>

        <v-card-text> ¿Desea ACTIVAR O DESACTIVAR CUENTA ? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="Activar(prueba)">
            ACTIVAR
          </v-btn>
           

          <v-btn color="red" text @click="Cancel(prueba)"> DESACTIVAR </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
import Cliente from "../../apis/Cliente";


export default {
  name: "AdmiClientes",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    clientes: [],
    datos: {},
    
    search: "",
    prueba: '',
    
    
    productos: [],
    clientToUpdate: [],
    productoToUpdate: [],
    advertencia2: false,
    updating: false,
    advertencia: false,
    dialogDelete: false,
    productoToDelete: {},
    alert: { show: false },
    headers: [
      { text: "Nombre", value: "nombre", sortable: false, align: "start"},
      { text: "Correo", value: "Correo", sortable: true },
      { text: "Direccion", value: "Direccion" },
      { text: "DNI", value: "activo", sortable: false },
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
    
    async ClienteToUpdate(id_cliente) {
        
     // const res = await Proveedor.get(`/get/${id_proveedor}`);
      const res = await Cliente.get(`/get/${id_cliente}`)
      this.updating = true;
      this.clientToUpdate = res.data.data.clientes;
      console.log(this.clientToUpdate)
    },
    
    async updateProveedor() {

         
      console.log(this.clientToUpdate);
      await Proveedor.put(
        `/perfilUpdate/${this.clientToUpdate.id_proveedor}`,
        this.clientToUpdate
      );
      
       setTimeout(()=>{
             this.updating = false;
         window.location.reload(); 
       
        },1000)

    },

    async Cancel(id_proveedor) {
         
          var id =id_proveedor.toString();
             const activo='Inactivo'
             const visible='no'
          
          const nuz = await Productos.put(`/updatecancel/${id}/${visible}`);
          const c = await Proveedor.put(`/updatecancel/${id}/${activo}`);
          console.log('camcel')

       //   const a = await Proveedor.get(`/getProductos-Proveedor/${id}`);


       // this.productos = a.data.data.productos;
        
       //   console.log(this.productos)

        this.advertencia2 = false;
        setTimeout(()=>{
      	
         window.location.reload(); 
        },1000)
          
    },
     async Activar(id_proveedor) {
        const activo='Activo';
        const visible='si'
          var id =id_proveedor.toString();
          const d = await Productos.put(`/updatecancel/${id}/${visible}`);
         
          const f = await Proveedor.put(`/updatecancel/${id}/${activo}`);

        //  const a = await Proveedor.get(`/getProductos-Proveedor/${id}`);


       // this.productos = a.data.data.productos;
        
        //  console.log(this.productos)

        this.advertencia2 = false;
        setTimeout(()=>{
      	
         window.location.reload(); 
        },1000)
          
    },
    async readCuentaToDelete(id_proveedor) {
     
      this.advertencia2 = true;
      this.prueba = id_proveedor;  
    },
  
  },
};
</script>