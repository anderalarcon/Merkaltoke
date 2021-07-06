<template>
  <div>
    
    <v-container>
        hola
    </v-container>
 <!--    <Footer></Footer> -->
  </div>
</template>


<script>
import NavBar from "../../components/NavBarAdmin";
import Footer from "../../components/Footer";
import Administrador from "../../apis/Administrador";

export default {
  name: "Profile",
  components: {
    NavBar,
    Footer

  },
  data: () => ({
    datos: {},

  


  }),
  created: async function () {
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        if (this.user.role == "administrador") {
          const administrador = await Administrador.get(`/get/${this.user.id}`);
          this.datos = administrador.data.data.administrador;
      
        } else {
          this.$router.push("/ProfileAdmin");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },

};
</script>