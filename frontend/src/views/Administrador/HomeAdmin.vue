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
      </v-row>
      <v-row justify="center">
        <v-col md="5">
          <v-card v-if="suForm">
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

           
                <v-btn block class="success mt-3" type="submit"
                  >Ingresar
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <v-card v-else>
            <v-card-title>Inicio de Sesión</v-card-title>
    
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
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    alert: { show: false, message: "" },

    user: {
      nombre: "",
      email: "",
      password: "",
      role: "",
      direccion: "",
      dni: "",
    },
    suForm: true,
    user: { role: "", nombre: "", email: "" },
  }),
  created: async function () {
    this.Auth();
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
            this.user.role == "administrador";
            this.$router.push("/Admin-Proveedores")
            
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
