<template>
  <div>
    <v-toolbar
      src="https://picsum.photos/1920/1080?random"
      dark
      shrink-on-scroll
    >
      <v-toolbar-title>Merkaltoke</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container>
      <v-alert v-model="alert.show" :type="alert.type" dismissible>
        {{ alert.message }}
      </v-alert></v-container
    >

    <v-container>
      <v-row justfify="center">
        <v-col class="text-center">
          <v-btn class="primary" @click="suForm = true"> Registrarse</v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn class="success" @click="suForm = false"> Ingresar</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="5">
          <v-card v-if="suForm">
            <v-card-title>Registro</v-card-title>
            <v-card-text>
              <v-form class="ma-3" @submit.prevent="signUp()" ref="signupForm">
                <v-text-field
                  label="Nombre"
                  :rules="nameRules"
                  v-model="user.nombre"
                  prepend-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  :rules="emailRules"
                  v-model="user.email"
                  prepend-icon="mdi-email"
                >
                </v-text-field>
                <v-text-field
                  label="Password"
                  :rules="passwordRules"
                  v-model="user.password"
                  prepend-icon="mdi-lock"
                  type="password"
                >
                </v-text-field>
                <v-text-field
                  label="Direccion"
                  :rules="direccionRules"
                  v-model="user.direccion"
                  prepend-icon="mdi-home"
                  type="text"
                >
                </v-text-field>
                <v-text-field
                  label="Dni o RUC"
                  :rules="dniRules"
                  v-model="user.dni"
                  prepend-icon="mdi-account-box-outline"
                  type="number"
                >
                </v-text-field>
                <v-radio-group
                  v-model="user.role"
                  row
                  :rules="[(v) => !!v || 'Please chose one']"
                >
                  <v-radio
                    label="Cliente"
                    value="cliente"
                    @click="
                      (vistaSubs = false),
                        (checkSubs = false),
                        (esProveedor = false),
                        (esCliente = true)
                    "
                  ></v-radio>
                  <v-radio
                    label="Proveedor"
                    value="proveedor"
                    @click="
                      (vistaSubs = true),
                        (esProveedor = true),
                        (esCliente = false)
                    "
                  ></v-radio>

                  <!--    <v-btn v-if="vistaSubs" color="green" @click="dialogSubs=true">
                    Realizar suscripción
                </v-btn> -->
                </v-radio-group>
                <span v-if="checkSubs">suscripcion realizada con exito </span>
                <v-btn block class="primary mt-3" type="submit"
                  >Registrarse
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <v-card v-else>
            <v-card-title>Inicio de Sesión</v-card-title>
            <v-card-text>
              <v-form class="ma-3" @submit.prevent="signIn()" ref="signinForm">
                <v-text-field
                  label="Email"
                  :rules="emailRules"
                  v-model="user.email"
                  prepend-icon="mdi-email"
                >
                </v-text-field>
                <v-text-field
                  label="Password"
                  :rules="passwordRules"
                  v-model="user.password"
                  prepend-icon="mdi-lock"
                  type="password"
                >
                </v-text-field>

                <v-radio-group
                  v-model="user.role"
                  row
                  :rules="[(v) => !!v || 'Please chose one']"
                >
                  <v-radio label="Cliente" value="cliente"></v-radio>
                  <v-radio label="Proveedor" value="proveedor"></v-radio>
                </v-radio-group>
                <v-btn block class="success mt-3" type="submit"
                  >Ingresar
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="text-center">
        <v-img
          i
          class="mt-5 carrito"
          src="https://svgsilh.com/svg/294547.svg"
          height="200px"
          width="200px"
          style="margin: auto"
        ></v-img>
      </div>
      <!--Modal de suscripcion de Proveedor-->
      <v-dialog v-model="dialogSubs" max-width="600px">
        <v-card>
          <v-form  @submit.prevent ref="validatePago">
            <v-container>
              <v-card-title>Informacion de Pago</v-card-title>
              <v-card-text>
                <v-row>
                  <v-select
                    class="col-12"
                    id="te"
                    :items="items"
                    item-text="metodo"
                    item-value="id_metodo_pago"
                    label="Seleccione el Método de pago*"
                    required
                    v-model="metodo_pago.id"
                    :rules="[(v) => !!v || 'Método requerido']"
                  ></v-select>
                  <v-text-field
                    class="col-12"
                    label="Numero de tarjeta"
                    :rules="[(v) => !!v || 'Numero de tarjeta es requerido']"
                    required
                  >
                  </v-text-field>
                  <div class="col-12">Fecha de caducidad</div>
                  <v-select
                    class="col-4"
                    label="Mes"
                    :items="meses"
                    :rules="[(v) => !!v || 'Mes es requerido']"
                    required
                  >
                  </v-select>
                  <v-select
                    class="col-4"
                    label="Año"
                    :items="año"
                    :rules="[(v) => !!v || 'Año es requerido']"
                    required
                  >
                  </v-select>
                  <v-text-field
                    class="col-4"
                    type="number"
                    label="Codigo de Seguridad"
                    :counter="3"
                    :rules="codigorules"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    class="col-6"
                    label="Nombre"
                    :rules="[(v) => !!v || 'Nombre es requerido']"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    class="col-6"
                    label="Correo Electronico"
                    :rules="[(v) => !!v || 'Correo es requerido']"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    class="col-6"
                    label="Direccion "
                    :rules="[(v) => !!v || 'Direccion es requerido']"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    class="col-6"
                    type="number"
                    label="Telefono"
                    :counter="9"
                    :rules="telefonorules"
                    required
                  >
                  </v-text-field>
                </v-row>

                <v-btn
                  class="center"
                  color="warning"
                  dark
                  
                  @click="zxc() , dialogSubs=false"
                >
                  Realizar subscripción
                </v-btn>
              </v-card-text>
            </v-container>
          </v-form>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import Metodo from "../apis/Metodos";
export default {
  name: "Home",

  data: () => ({
    alert: { show: false, message: "" },
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
    codigorules: [
      (v) => !!v || "Codigo es requerido",
      (v) => (v && v.length <= 3) || "Codigo debe tener menos de 4 digitos",
    ],
    telefonorules: [
      (v) => !!v || "Telefono es requerido",
      (v) => (v && v.length <= 9) || "Telefono debe tener menos de 10 digitos",
    ],

    metodo_pago: {},
    user: {
      nombre: "",
      email: "",
      password: "",
      role: "",
      direccion: "",
      dni: "",
    },
    suForm: true,
    dialogSubs: false,
    vistaSubs: false,
    esProveedor: false,
    checkSubs: false,
    esCliente: false,
    items: [],
    meses: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    año: [
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
      "2026",
      "2026",
      "2027",
      "2028",
      "2029",
      "2030",
      "2031",
    ],
    user: { role: "", nombre: "", email: "" },
  }),
  created: async function () {
    this.Auth();
    const metodosDePago = await Metodo.get("/get");
    this.items = metodosDePago.data.data.metodos;
  },

  methods: {
    async Auth() {
      try {
        this.user_test = JSON.parse(sessionStorage.getItem("session"));
        if (this.user_test != null) {
          this.$router.push("/Profile");
        }
      } catch (error) {
        console.log(error);
      }
    },

    MostrarMenSub() {
      this.checkSubs = true;
      console.log(this.checkSubs);
    },

    async signUp() {
      let valid = this.$refs.signupForm.validate();
      if (valid) {
        try {
          if (this.user.role == "proveedor") {
            this.dialogSubs = "true";
            //this.zxc();
          } else {
            //Cliente
            const res = await this.axios.post("/signup", this.user);
            this.$refs.signupForm.reset();
            this.alert = {
              show: true,
              type: "success",
              message: res.data.message,
            };
          }
        } catch (error) {
          this.alert = {
            show: true,
            type: "error",
            message: error.response.data.message,
          };
        }
      }
    },
    async signIn() {
      let valid = this.$refs.signinForm.validate();
      if (valid) {
        try {
          const res = await this.axios.post("/signin", this.user);
          this.$refs.signinForm.reset();
          if (res.data.NotFound) {
            this.alert = {
              show: true,
              type: "error",
              message: res.data.message,
            };
          } else {
            sessionStorage.setItem("session", JSON.stringify(res.data));
            this.user = JSON.parse(sessionStorage.getItem("session"));
            if (this.user.role == "cliente") {
              this.$router.push("/Profile");
            } else {
              if (this.user.role == "proveedor") {
                this.$router.push("/ProfileProveedor");
              }
            }
          }
        } catch (error) {
          this.alert = {
            show: true,
            type: "error",
            message: error.response.data.message,
          };
        }
      }
    },
    async zxc() {
   
      try {
     
          const res = await this.axios.post("/signup", this.user);
          this.$refs.signupForm.reset();
          this.alert = {
            show: true,
            type: "success",
            message: res.data.message,
          };
        
      } catch (error) {}
    },
  },
};
</script>

<style>
.carrito {
  max-width: 1000px;
  animation: animate 10s linear infinite;
}

@keyframes animate {
  0% {
    transform: translateX(-1100px);
  }

  100% {
    transform: translateX(1100px);
  }
}
</style>
