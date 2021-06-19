<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card class="mt-5" max-width="450" style="margin: auto">
            <v-card-title class="text-uppercase">
              CUENTA DEL {{ user.role }}</v-card-title
            >
            <v-card-text>
              <h2>! Bienvenido !</h2>
              <div class="container">
                <v-img
                  height="320"
                  width="400"
                  v-bind:src="datos.img_proveedor"
                >
                </v-img>
              </div>

              <h3 class="mt-2">Nombre: {{ this.datos.nombre_proveedor }}</h3>
              <h4 class="mt-2">
                Correo Electronico: {{ this.datos.email_proveedor }}
              </h4>
              <h4 class="mt-2">
                Direccion: {{ this.datos.direccion_proveedor }}
              </h4>
              <h4 class="mt-2">RUC: {{ this.datos.ruc }}</h4>
               <h4 class="mt-2">Activo: {{ this.datos.activo }}</h4>
                 <v-btn
                  color="red"
                  x-small
                  small
                  dark
                  fab
                  @click="Cancel()"
                >
                  <v-icon small> mdi-delete </v-icon>
                </v-btn>
              
              
            </v-card-text>
          </v-card>
          <v-card> </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
    <!-- Modal Eliminar -->
   

  </div>
</template>


<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";
import Proveedor from "../../apis/Proveedor";
import Productos from "../../apis/Productos";
export default {
  name: "Profile",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    productos: [],
    datos: {},
  }),
  created: async function () {
    try {
      if (JSON.parse(sessionStorage.getItem("session")) == null) {
        this.$router.push("/");
      } else {
        this.user = JSON.parse(sessionStorage.getItem("session"));
        const id = this.user.id;

      // const res = await Proveedor.get(`/getProductos-Proveedor/${id}`);

      // this.productos = res.data.data.productos;
       // console.log(this.user.id)

        if (this.user.role == "proveedor") {
          console.log("es proveedor");
          const datos_proveedor = await Proveedor.get(`/get/${this.user.id}`);
          this.datos = datos_proveedor.data.data.proveedores;
        } else {
          this.$router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
   methods: {
     async Cancel() {
          var id = this.user.id;
          
          
          const nuevo_producto = await Productos.put(`/updatecancel/${id}`);
          const c = await Proveedor.put(`/updatecancel/${id}`);

          const a = await Proveedor.get(`/getProductos-Proveedor/${id}`);

        this.productos = a.data.data.productos;
        
          console.log(this.productos)
        
          
    },
   },
};
</script>