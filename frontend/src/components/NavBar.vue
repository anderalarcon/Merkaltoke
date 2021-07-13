<template>
  <div>
    <v-toolbar dense dark>
      <v-toolbar-title>Welcome </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn  @click="readCuentaToDelete()"> Salir </v-btn>
    </v-toolbar>

    <v-toolbar color="orange">
      <v-toolbar-title>Merkaltoke</v-toolbar-title>
       <v-btn text to="/Profile"> Perfil </v-btn>
      <v-btn text to="/Landing"> Categorías y Proveedores </v-btn>
      <v-btn text to="/Carrito"> Carrito </v-btn>
      <v-btn text to="/Pedidos"> Pedidos </v-btn>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({}),

  methods: {

    async readCuentaToDelete() {
     
      console.log("me dio click")
       setTimeout(()=>{
      	sessionStorage.removeItem("session");
         window.location.reload(); 
        },1000)
     
    },

  },
};


</script>