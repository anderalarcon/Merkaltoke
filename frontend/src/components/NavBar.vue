<template>
  <div>
    <v-toolbar dense dark>
      <v-toolbar-title>Welcome </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text> Ayuda </v-btn>
      <v-btn text to="/"> Salir </v-btn>
    </v-toolbar>

    <v-toolbar color="orange">
      <v-toolbar-title>Merkaltoke</v-toolbar-title>
       <v-btn text to="/Profile"> Mi Perfil </v-btn>
      <v-btn text to="/Landing"> Categorías y Proveedores </v-btn>
      <v-btn text to="/Carrito"> Mi Carrito </v-btn>
      <v-btn text to="/Pedidos"> Pedidos </v-btn>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({}),
};
</script>