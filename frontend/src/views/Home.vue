<template>
  <div>
    <v-toolbar
      
     src="https://picsum.photos/1920/1080?random"
          dark
      shrink-on-scroll
      prominent
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
                <v-radio-group
                  v-model="user.role"
                  row
                  :rules="[(v) => !!v || 'Please chose one']"
                >
                  <v-radio label="Cliente" value="cliente"></v-radio>
                  <v-radio label="Proveedor" value="proveedor"></v-radio>
                </v-radio-group>
                <v-btn block class="primary mt-3" type="submit">Registrarse </v-btn>
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
                <v-btn block class="success mt-3" type="submit">Ingresar </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
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
    user: { nombre: "", email: "", password: "", role: "" }, //mismo que backend
    suForm: true,
  }),
     created: async function () {
    //al cargar la pagina
    try {
     
      //redireccionar al profile si ya esta logueado
      this.user_test = JSON.parse(sessionStorage.getItem("session"));
      if (this.user_test != null) {
        this.$router.push("/Profile");
      }
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async signUp() {
      let valid = this.$refs.signupForm.validate();
      if (valid) {
        try {
          const res = await this.axios.post("/signup", this.user);
          this.$refs.signupForm.reset();
          console.log(res);
          this.alert = {
            show: true,
            type: "success",
            message: res.data.message,
          };
  
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
          console.log(res);

          if (res.data.NotFound) {
            this.alert = {
              show: true,
              type: "error",
              message: res.data.message,
            };
          } else {
            sessionStorage.setItem("session", JSON.stringify(res.data));
      
            this.$router.push("/Profile"); 
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
  },
};
</script>
