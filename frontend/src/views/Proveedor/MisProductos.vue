<template>
<div>
    <NavBar></NavBar>
    <v-container class=" lighten-5">
      <h1 class="mb-5">Mis Productos</h1>
      <v-row no-gutters>
        <v-col>
          <v-card >
          <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Producto</th>
                    <th class="text-left">Precio</th>
                    <th class="text-left">Stock</th>
                    <th class="text-left">Detalle</th>
                    <th class="text-left">Operacion</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Coca Cola</td>
                    <td>11.5</td>
                    <td>500</td>
                    <td>6 und</td>
                    <td>
                      <v-btn @click="add = true" class="mx-2" fab dark small color="primary">
                          <v-icon small @click="dialog=true">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                          <v-dialog v-model="add">
                          <v-card>
                            <v-card-title>Editar Producto</v-card-title>
                            <v-card-text>
                             <v-form ref="MisProductos/update/{{producto:id_producto}}" > 
                                <v-text-field input-value=""
                                  prepend-icon="mdi-pencil"
                                  label="Nombre del Producto"
                                  :rules="[(v) => !!v || 'Se editara el nombre']"
                                  
                                >
                                </v-text-field>
                                <v-text-field 
                                  type="number"
                                  prepend-icon="mdi-pencil"
                                  label="Precio"
                                  :rules="[(v) => !!v || 'Se editara el precio']"
                                
                                >
                                </v-text-field>
                                <v-text-field 
                                  type="number"
                                  prepend-icon="mdi-pencil"
                                  label="Stock"
                                  :rules="[(v) => !!v || 'Se editara el stock']"
                                
                                >
                                </v-text-field>
                                <v-text-field 
                                  prepend-icon="mdi-pencil"
                                  label="Detalle"
                                  :rules="[(v) => !!v || 'Se editara los detalles del producto']"
                                
                                >
                                </v-text-field>
                                <v-file-input 
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Escoja una imagen"
                                    prepend-icon="mdi-camera"
                                    label="Imagen de producto"
                                  ></v-file-input>

                                <v-btn block class="success ma-2" type="submit">Actualizar</v-btn>
                              </v-form>
                            </v-card-text>
                          </v-card>
                        </v-dialog>


                        <v-btn class="mx-2" fab dark small color="pink">
                          <v-icon small @click="dialog=true">
                              <!--<v-icon small @click="">-->
                                mdi-delete
                              </v-icon>
                              
                        </v-btn>
                        
                    </td>
                  </tr>
                  <tr>
                    <td>Chicha Morada</td>
                    <td>11.5</td>
                    <td>500</td>
                    <td>6 und</td>
                    <td>
                        <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon
                          dark
                      
                        >
                          mdi-pencil
                        </v-icon>
                      </v-btn>

                      <v-btn class="mx-2" fab dark small color="pink">
                        <v-icon small @click="dialog=true">
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

          <!--<v-btn @click="add = true" color="red" large right fixed botoom fab dark
          ><v-icon>mdi-plus</v-icon></v-btn>

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
        </v-dialog>-->

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
import axios from 'axios';
export default {
  name: "MisProductos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    add: false
  }),
  created: async function () {
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
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
    editar_producto(id_producto) {
      document.getElementById("cantidad" + id_producto).innerHTML =
        parseInt(document.getElementById("cantidad" + id_producto).innerHTML) +
        1;

      var total = document.getElementById("total" + id_producto);

      total.innerHTML = (
        parseFloat(document.getElementById("precio" + id_producto).innerHTML) *
        parseInt(document.getElementById("cantidad" + id_producto).innerHTML)
      ).toFixed(1);

      this.obtenertotal();
    },

    },



};
</script>