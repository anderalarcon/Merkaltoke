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
                    class="mx-2"
                    fab
                    small
                    color="#FF9800"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon dark> mdi-pencil </v-icon>
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
            </v-row>

            <v-row justify="center">
              <v-dialog v-model="dialog2" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-2"
                    fab
                    small
                    color="#FF9800"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon dark> mdi-account-circle </v-icon>
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
            </v-card-text>
          </v-card>
          <v-card> </v-card>
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
export default {
  name: "Profile",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    datos: {},
    proveedorToUpdate: {},

    dialog1: false,
    dialog2: false,

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
      console.log(this.proveedorToUpdate.imagen);
      await Proveedor.put(
        `/imageUpdate/${this.proveedorToUpdate.id_proveedor}`,
        form
      );
      location.reload();
    },
  },
};
</script>