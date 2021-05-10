<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card>
            <v-card-title class="text-uppercase">{{ user.role }}</v-card-title>
            <v-card-text>
              <h2>! Hola {{ user.nombre }} !</h2>
              <h4 class="mt-2">{{ user.email }}</h4>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import NavBar from "../components/NavBar";
export default {
  name: "Profile",
  components: {
    NavBar,
  },
  data: () => ({
    user: { role: "", nombre: "", email: "" },
  }),
  created: function () {
    this.user = JSON.parse(sessionStorage.getItem("session"));
    if (this.user == null) {
      this.$router.push("/");
    }
  },
};
</script>