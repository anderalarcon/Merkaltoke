<template>
  <div>
    <NavBar></NavBar>
    <h1>Pon una tabla con cada producto  del pedido que pertenezca al proveedor</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../../components/NavBarProveedor";
import Footer from "../../components/Footer";

export default {
  name: "Productos-Pedido",
  components: {
    NavBar,
    Footer,
  },
};
</script>
