<template>
  <div>
    <NavBar></NavBar>

    <v-container class="grey lighten-5">
      <h1 class="mb-5">Carrito de compras</h1>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="8">
          <v-card>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Producto</th>
                    <th class="text-left">Precio</th>
                    <th class="text-left">Cantidad</th>
                    <th class="text-left">Total</th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>hola</td>
                  </tr>
                  <tr>
                    <td>Arroz</td>
                    <td><span id="precio">30</span></td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark @click="disminuir_cantidad()"> mdi-minus </v-icon>
                      </v-btn>
                      <a id="cantidad_producto">1</a>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark @click="aumentar_cantidad()"> mdi-plus </v-icon>
                      </v-btn>
                    </td>
                    <td><span id="total">500000</span></td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="pink">
                        <v-icon small @click="deleteItem(item)">
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </td>
                  </tr>

                  <tr>
                    <td>Arroz</td>
                    <td>30</td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark> mdi-minus </v-icon>
                      </v-btn>
                      <a id="cantidad">1</a>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark> mdi-plus </v-icon>
                      </v-btn>
                    </td>
                    <td>500000</td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="pink">
                        <v-icon small @click="deleteItem(item)">
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </td>
                  </tr>

                  <tr>
                    <td>Arroz</td>
                    <td>30</td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark> mdi-minus </v-icon>
                      </v-btn>
                      <a id="cantidad">1</a>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark> mdi-plus </v-icon>
                      </v-btn>
                    </td>
                    <td>500000</td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="pink">
                        <v-icon small @click="deleteItem(item)">
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </td>
                  </tr>

                  <tr>
                    <td>Arroz</td>
                    <td>30</td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark> mdi-minus </v-icon>
                      </v-btn>
                      <a id="cantidad">1</a>
                      <v-btn class="mx-2" fab dark small color="primary">
                        <v-icon dark> mdi-plus </v-icon>
                      </v-btn>
                    </td>
                    <td>500000</td>
                    <td>
                      <v-btn class="mx-2" fab dark small color="pink">
                        <v-icon small @click="deleteItem(item)">
                          mdi-delete
                        </v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
        <v-divider></v-divider>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            <div>
              <v-row>
                <v-col cols="12" md="8" sm="6"> Subtotal </v-col>
                <v-col cols="6" md="4"> 1000000 S/. </v-col>
              </v-row>
            </div>

            <div>
              <v-row>
                <v-col cols="12" md="8" sm="6"> Descuento </v-col>
                <v-col cols="6" md="4"> -10000 S/. </v-col>
              </v-row>
            </div>
            <v-divider  class="mt-3 mb-3"></v-divider>

            <div>
              <v-row>
                <v-col cols="12" md="8" sm="6"> Total </v-col>
                <v-col cols="6" md="4"> 40000 S/. </v-col>
              </v-row>
            </div>

            <div>
              <v-btn color="warning" dark> Realizar compra </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "Carrito",
  components: {
    NavBar,Footer
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

  methods:{
    aumentar_cantidad : function(){
    ///console.log("gola");
    var mas= document.getElementById("cantidad_producto").innerHTML;
    mas++;
    document.getElementById("cantidad_producto").innerHTML=mas;
    var precio=document.getElementById("precio").innerHTML;
    var total = precio * document.getElementById("cantidad_producto").innerHTML;
    document.getElementById("total").innerHTML=(total.toFixed(2));
    
    },

        disminuir_cantidad : function(){
    var menos= document.getElementById("cantidad_producto").innerHTML;
    if(menos>1){
        menos--;
        document.getElementById("cantidad_producto").innerHTML=menos;
    }
    var precio=document.getElementById("precio").innerHTML;
    var total = precio * document.getElementById("cantidad_producto").innerHTML;
    document.getElementById("total").innerHTML=(total.toFixed(2));
  
    },



  }

 



};






</script>