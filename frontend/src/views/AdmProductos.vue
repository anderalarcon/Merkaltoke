<template>
  <div>
    
    <v-container>
        <h1>Productos de  {{ user.nombre_proveedor }}</h1>
      <v-row justify="center">
          
        <v-card
          class="ma-3"
          max-width="344"
          v-for="producto in productos"
          :key="producto.id_producto"
        >
          <v-img height="250" v-bind:src="producto.img_producto"> </v-img>
          <v-card-title>Producto : {{ producto.nombre }} </v-card-title>

          <v-card-subtitle>Precio : {{ producto.precio }} </v-card-subtitle>
          <v-card-subtitle>Stock : {{ producto.stock }} </v-card-subtitle>
          <v-card-subtitle>Detalle : {{ producto.detalle }} </v-card-subtitle>
          <v-card-subtitle>Visbible? : {{ producto.visible }} </v-card-subtitle>
          
        </v-card>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
import Proveedor from "../apis/Proveedor";



export default {
  name: "Provductos-Proveedor",
  components: {
   
  },
  data: () => ({
    productos: [],
    user:{},
    
  }),

  methods: {
    
  },
  created: async function () {
        this.user = JSON.parse(sessionStorage.getItem("session"));
  

    try {
      const id = this.$route.params.id;
       const a= await Proveedor.get(`/get/${id}`);
        this.user=a.data.data.proveedores
        console.log(this.user)
      console.log(id);
      const res = await Proveedor.get(`/getProductos-Proveedor/${id}`);
      this.productos = res.data.data.productos;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
