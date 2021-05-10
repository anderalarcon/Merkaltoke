<template>
  <div>
    <NavBar></NavBar>
    <h1>Carrito</h1>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "Carrito",
  components: {
    NavBar,
  },
    created: async function () {
    //al cargar la pagina
    try {
     
      //redireccionar al inicio si no esta logueado
      this.user = JSON.parse(sessionStorage.getItem("session"));
      if (this.user == null) {
        this.$router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>