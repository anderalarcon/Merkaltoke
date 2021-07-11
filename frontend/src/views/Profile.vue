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
                          <v-col cols="12" sm="6" md="7">
                            <v-text-field
                              label="Nombres y apellidos*"
                              outlined
                              required
                              hint="Requerido"
                              :rules="nameRules"
                              v-model="clientToUpdate.nombre_cliente"
                              prepend-icon="mdi-account"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="6" md="5">
                            <v-text-field
                              label="DNI*"
                              outlined
                              hint="Requerido"
                              required
                              :rules="dniRules"
                              v-model="clientToUpdate.dni"
                              type="number"
                              prepend-icon="mdi-account-box-outline"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="7">
                            <v-text-field
                              label="Correo"
                              outlined
                              required
                              hint="Requerido"
                              :rules="emailRules"
                              v-model="clientToUpdate.email_cliente"
                              prepend-icon="mdi-email"
                              disabled
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="5">
                            <v-text-field
                              label="Celular*"
                              outlined
                              hint="Requerido"
                              required
                              v-model="clientToUpdate.dni"
                              type="number"
                              prepend-icon="mdi-phone"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Dirección*"
                              outlined
                              required
                              hint="Requerido"
                              :rules="direccionRules"
                              v-model="clientToUpdate.direccion_cliente"
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

            <!---------------->

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
                              v-model="clientToUpdate.imagen"
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
                <v-img height="320" width="400" v-bind:src="require('../../../backend/public/uploads/' + this.datos.img_cliente)"></v-img>
              </div>

              <h3 class="mt-2">Nombre: {{ this.datos.nombre_cliente }}</h3>
              <h4 class="mt-2">
                Correo Electronico: {{ this.datos.email_cliente }}
              </h4>
              <h4 class="mt-2">
                Direccion: {{ this.datos.direccion_cliente }}
              </h4>
              <h4 class="mt-2">Dni: {{ this.datos.dni }}</h4>
            </v-card-text>
          </v-card>
          <v-card> </v-card>
        </v-col>
      </v-row>
    </v-container>
   <!--  <Footer></Footer> -->
  </div>
</template>


<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cliente from "../apis/Cliente";
export default {
  name: "Profile",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    datos: {},

    dialog1: false,
    dialog2: false,
    nameRules: [(value) => !!value || "Name is required"],
    emailRules: [
      (value) => !!value || "Email is required",
      (value) => /.+@.+\..+/.test(value) || "Email must be valid ",
    ],
    passwordRules: [(value) => !!value || "Password is required"],
    dniRules: [
      (value) => !!value || "DNI || RUC is required",
      (value) =>
        (value && value.length == 8) ||
        (value && value.length == 11) ||
        "El Dni contiene 8  y el RUC 11",
    ],
    direccionRules: [(value) => !!value || "Direccion is required"],

    clientToUpdate: {},

  }),
  created: async function () {
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        if (this.user.role == "cliente") {
          const datos_cliente = await Cliente.get(`/get/${this.user.id}`);
          this.datos = datos_cliente.data.data.cliente;
          console.log(this.datos);
          this.clientToUpdate = datos_cliente.data.data.cliente;
        } else {
          this.$router.push("/ProfileProveedor");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async perfilUpdate() {
      let valid = this.$refs.perfilUpdate.validate();
      console.log(this.clientToUpdate);
      await Cliente.put(
        `/perfilUpdate/${this.clientToUpdate.id_cliente}`,
        this.clientToUpdate
      );
    },

    async imageUpdate() {
      const form = new FormData();
      form.append('file',this.clientToUpdate.imagen);
      form.append('id',this.clientToUpdate.id_cliente);

      let valid = this.$refs.imageUpdate.validate();
      console.log(this.clientToUpdate.imagen);
      await Cliente.put(
        `/imageUpdate/${this.clientToUpdate.id_cliente}`,
        form
      );
      location.reload();
    },
  },
};
</script>