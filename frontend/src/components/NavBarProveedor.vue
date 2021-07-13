<template>
  <div>
    <v-toolbar dense dark>
      <v-toolbar-title>Welcome </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/"> Salir </v-btn>
    </v-toolbar>

    <v-toolbar color="orange">
      <v-toolbar-title>Merkaltoke</v-toolbar-title>
       <v-btn text to="/ProfileProveedor">Mi Perfil </v-btn>
      <v-btn text to="/MisProductos"> Mis Productos </v-btn>
    
       <v-btn text to="/PedidosProv"> Pedidos </v-btn>
        <v-btn text to="/Indicadores"> Indicadores</v-btn>    

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBarProveedor",

  data: () => ({}),
};
</script>