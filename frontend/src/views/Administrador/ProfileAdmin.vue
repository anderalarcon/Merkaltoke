<template>
  <div>
    <NavBar></NavBar>
    <v-container>
        
    </v-container>
 <!--    <Footer></Footer> -->
  </div>
</template>


<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Administrador from "../../apis/Administrador";

export default {
  name: "Profile",
  components: {
    NavBar,
    Footer,
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
        const id = this.user.id;

        if (this.user.role == "administrador") {
          console.log("es admin");
          const datos_admin = await Administrador.get(`/get/${this.user.id}`);
          this.datos = datos_admin.data.data.administrador;
        } else {
          this.$router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },


};
</script>