<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card class="mt-5" max-width="450" style="margin: auto">
            <v-card-title class="text-uppercase">
              CUENTA DEL {{ user.role }}</v-card-title
            >


            <v-row justify="center">
              <v-dialog v-model="dialog1" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ma-2 white--text"
                    color="#FF9800"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon dark> mdi-pencil </v-icon>
                    editar perfil
                  </v-btn>
                </template>
                <v-form
                  @submit.prevent="perfilUpdate()"
                  ref="perfilUpdate"
                  enctype="multipart/form-data"
                >
                  <v-card>
                    <v-card-title>
                      <span class="headline">Editar información cuenta</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              label="Nombre de empresa*"
                              required
                              hint="Requerido"
                              :rules="nameRules"
                              v-model="proveedorToUpdate.nombre_proveedor"
                              prepend-icon="mdi-account"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              label="RUC*"
                              hint="Requerido"
                              required
                              :rules="rucRules"
                              v-model="proveedorToUpdate.ruc"
                              type="number"
                              prepend-icon="mdi-account-box-outline"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Correo*"
                              required
                              hint="Requerido"
                              :rules="emailRules"
                              v-model="proveedorToUpdate.email_proveedor"
                              prepend-icon="mdi-email"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Dirección*"
                              required
                              hint="Requerido"
                              :rules="direccionRules"
                              v-model="proveedorToUpdate.direccion_proveedor"
                              prepend-icon="mdi-home"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog1 = false">
                        Cerrar
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        type="submit"
                        @click="dialog1 = false"
                      >
                        Guardar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>
            

            
              <v-dialog v-model="dialog2" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ma-2 white--text"
                    color="#FF9800"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon dark> mdi-account-circle </v-icon>
                    editar imagen
                  </v-btn>
                </template>
                <v-form
                  @submit.prevent="imageUpdate()"
                  ref="imageUpdate"
                  enctype="multipart/form-data"
                >
                  <v-card>
                    <v-card-title>
                      <span class="headline">Editar imagen</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-file-input
                              accept="image/*"
                              label="Imagen"
                              v-model="proveedorToUpdate.imagen"
                              prepend-icon="mdi-camera"                           
                            ></v-file-input>                         
                          </v-col>
                        </v-row>
                      </v-container>
                      <small>*Máximo 5MB</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog2 = false">
                        Cerrar
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        type="submit"
                        @click="dialog2 = false"
                      >
                        Guardar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>
            </v-row>


            <v-card-text>
              <h2>! Bienvenido !</h2>
              <div class="container">
                <v-img
                  height="320"
                  width="400"
                  v-bind:src="require('../../../../backend/public/uploads/' + this.datos.img_proveedor)"
                >
                </v-img>
              </div>

              <h3 class="mt-2">Nombre: {{ this.datos.nombre_proveedor }}</h3>
              <h4 class="mt-2">
                Correo Electronico: {{ this.datos.email_proveedor }}
              </h4>
              <h4 class="mt-2">
                Direccion: {{ this.datos.direccion_proveedor }}
              </h4>
              <h4 class="mt-2">RUC: {{ this.datos.ruc }}</h4>
               <h4 class="mt-2">Activo: {{ this.datos.activo }}</h4>
                 <v-btn
                  color="red"
                  class="white--text"
                  @click="readCuentaToDelete()"
                >
                  <v-icon small> mdi-cancel </v-icon>
                  Cancelar suscripcion
                </v-btn>
              
              
            </v-card-text>
          </v-card>
          <v-card> </v-card>
        </v-col>
      </v-row>
    </v-container>
 <!--    <Footer></Footer> -->
    <!-- Modal Eliminar -->
   <v-dialog v-model="advertencia" persistent max-width="450">
      <v-card>
        <v-card-title class="headline"> Eliminar la cuenta </v-card-title>

        <v-card-text> ¿Desea eliminar su suscripcion ? </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="advertencia = false">
           No
          </v-btn>

          <v-btn color="red" text @click="Cancel()"> Si </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>


<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
import Productos from "../../apis/Productos";
export default {
  name: "Profile",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    productos: [],
    datos: {},
    proveedorToUpdate: {},
    activo:"",
    visible:"",
    dialog1: false,
    dialog2: false,
    advertencia: false,

    nameRules: [(value) => !!value || "Name is required"],
    emailRules: [
      (value) => !!value || "Email is required",
      (value) => /.+@.+\..+/.test(value) || "Email must be valid ",
    ],
    passwordRules: [(value) => !!value || "Password is required"],
    rucRules: [
      (value) => !!value || "DNI || RUC is required",
      (value) =>
        (value && value.length == 8) ||
        (value && value.length == 11) ||
        "El Dni contiene 8  y el RUC 11",
    ],
    direccionRules: [(value) => !!value || "Direccion is required"],
  }),
  created: async function () {
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        const id = this.user.id;

      // const res = await Proveedor.get(`/getProductos-Proveedor/${id}`);

      // this.productos = res.data.data.productos;
       // console.log(this.user.id)

        if (this.user.role == "proveedor") {
          console.log("es proveedor");
          const datos_proveedor = await Proveedor.get(`/get/${this.user.id}`);
          this.datos = datos_proveedor.data.data.proveedores;
          this.proveedorToUpdate = datos_proveedor.data.data.proveedores;
        } else {
          this.$router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async perfilUpdate() {
      let valid = this.$refs.perfilUpdate.validate();
      console.log(this.proveedorToUpdate);
      await Proveedor.put(
        `/perfilUpdate/${this.proveedorToUpdate.id_proveedor}`,
        this.proveedorToUpdate
      );
    },

    async imageUpdate() {
      const form = new FormData();
      form.append('file',this.proveedorToUpdate.imagen);
      form.append('id',this.proveedorToUpdate.id_proveedor);

      let valid = this.$refs.imageUpdate.validate();
    
      await Proveedor.put(
        `/imageUpdate/${this.proveedorToUpdate.id_proveedor}`,
        form
      );
      location.reload();
    },

    async Cancel() {
          var id = this.user.id;
          
          var id2 =id.toString();
           const activo='Inactivo'
             const visible='no'
          const nuevo_producto = await Productos.put(`/updatecancel/${id}/${visible}`);
          const c = await Proveedor.put(`/updatecancel/${id}/${'Inactivo'}`);

         // const a = await Proveedor.get(`/getProductos-Proveedor/${id}`);

        //this.productos = a.data.data.productos;
        setTimeout(()=>{
      	sessionStorage.removeItem("session");
         window.location.reload(); 
        },1000)

        
          console.log(this.productos)

        this.advertencia = false;
          
    },
    async readCuentaToDelete() {
     
      this.advertencia = true;
     
    },
  },
};
</script>