<template>
    <h1>Vista "iNDICADORES"</h1>
</template>

<script>
export default {
  name: "MisProductos",
  components: {
  
  },
  data: () => ({
   
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
};
</script>