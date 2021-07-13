<template>
  <div>
  <NavBarAdmin></NavBarAdmin>

    <v-container>
      <v-alert v-model="alert.show" :type="alert.type" dismissible>
        {{ alert.message }}
      </v-alert></v-container
    >
    <v-container class="mt-5">
      <v-container>
        <v-card>
          <v-simple-table>
              <thead>
                <td>Cantidad de proveedores</td>
                <td>Utilidad</td>
                <td>Pago Por proveedor</td>
              </thead>
              <tbody>
                <tr v-for="util in utilidad" :key="util.cantidadproveedor">
                  <td>{{util.cantidadproveedor}}</td>
                  <td>{{util.ganancia}} S/.</td>
                  <td>60 S/.</td>
                </tr> 
              </tbody>
          </v-simple-table>   
        </v-card>
      </v-container>
      <v-card elevation="15" shaped  class="pb-3">
        <v-card-title>
          Gestión de Proveedores
          <v-spacer></v-spacer>
           <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
          ></v-text-field>  



        </v-card-title>
        <v-data-table :headers="headers" :items="proveedores" :search="search">
          <template v-slot:item="row">
            <tr>
              <td>{{ row.item.nombre_proveedor }}</td>
              <td>{{ row.item.email_proveedor }}</td>
              <td>{{ row.item.direccion_proveedor }}</td>
              <td>{{ row.item.activo }}</td>
              <td :id="`visible${row.item.id_proveedor}`">
                {{ row.item.visible }}
            
                <v-btn
                  color="orange"
                  x-small
                  small
                  dark
                  fab
                  class=""
                  @click="readProveedorToUpdate(row.item.id_proveedor)"
                >
                  <v-icon small> mdi-pencil </v-icon></v-btn>


            <!--     <v-btn
                  color="red"
                  x-small
                  small
                  dark
                  fab
                  @click="readProductoToDelete(row.item.id_proveedor)"
                >
                  <v-icon small> mdi-delete </v-icon></v-btn> -->
                
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
                 v-bind:href="'/AdmProductos/' + row.item.id_proveedor"
               
            >
 
                  <v-icon small> mdi-eye </v-icon>
                </v-btn>
              </td>
            </tr>
          </template></v-data-table
        >
      </v-card>
    </v-container>
   

    

    
    <v-dialog v-model="updating" max-width="600px">
      <v-card>
        <v-form ref="updateProveedor" @submit.prevent="updateProveedor()">
          <v-card-title>Editar Proveedor</v-card-title>
          <v-card-text>
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="proveedorToUpdate.nombre_proveedor"
              label="Nombre"
              :rules="[(v) => !!v || 'Nombre es requerido']"
            >
            </v-text-field>
            <v-text-field
              type="number"
              prepend-icon="mdi-pencil"
              v-model="proveedorToUpdate.ruc"
              label="RUC"
              :rules="[(v) => !!v || 'RUC es requerido']"
            >
            </v-text-field>
            
            
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="proveedorToUpdate.email_proveedor"
              label="Correo"
              :rules="[(v) => !!v || 'Correo es requerido']"
            >
            </v-text-field>
            <v-text-field
              prepend-icon="mdi-pencil"
              v-model="proveedorToUpdate.direccion_proveedor"
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


import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
import Productos from "../../apis/Productos";
import NavBarAdmin from "../../components/NavBarAdmin.vue"

export default {
  name: "AdminProveedores",
  components: {
    
    NavBarAdmin,
    Footer,
  },
  data: () => ({
    proveedores: [],
    datos: {},
    
    search: "",
    prueba: '',
    
    
    productos: [],
    proveedorToUpdate: [],
    productoToUpdate: [],
    utilidad:[],
    advertencia2: false,
    updating: false,
    advertencia: false,
    dialogDelete: false,
    productoToDelete: {},
    alert: { show: false },
    headers: [
      {
        text: "Proveedor",
        align: "start",
        sortable: false,
        value: "nombre_proveedor",
      },
      { text: "Correo", value: "email_proveedor", sortable: true },
      { text: "Direccion", value: "direccion_proveedor" },
      { text: "Activo", value: "activo", sortable: false },
      { text: "Operaciones",  sortable: false },
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
        
        const UtilidadProvs = await Proveedor.get("/getUtilidad");
        this.utilidad = UtilidadProvs.data.data.proveedores;

        const res = await Proveedor.get(`/getProductos-Proveedor2/${id}`);

        this.productos = res.data.data.productos;
        console.log(this.productos)

       

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
    
    async readProveedorToUpdate(id_proveedor) {
        
     // const res = await Proveedor.get(`/get/${id_proveedor}`);
      const res = await Proveedor.get(`/get/${id_proveedor}`)
      this.updating = true;
     this.proveedorToUpdate = res.data.data.proveedores;
      console.log(this.proveedorToUpdate)
    },
     async updateProveedor() {

         
      console.log(this.proveedorToUpdate);
      await Proveedor.put(
        `/perfilUpdate/${this.proveedorToUpdate.id_proveedor}`,
        this.proveedorToUpdate
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