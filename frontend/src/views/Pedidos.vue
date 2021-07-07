<template>
  <div>
    <NavBar></NavBar>
    <v-container>
      <h1>Pedidos</h1>
      <v-container>
        <v-alert v-model="alert.show" :type="alert.type" dismissible>
          {{ alert.message }}
        </v-alert></v-container
      >
      <v-row justify="center">
        <v-card
          class="mx-3 mt-5 mb-5"
          max-width="344"
          v-for="pedido in pedidos"
          :key="pedido.id_pedido"
        >
          <v-img
            src="https://image.freepik.com/free-vector/food-delivery-cute-man-riding-motorcycles-cartoon-art-illustration_56104-609.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Pedido: {{ pedido.id_pedido }} </v-card-title>

          <v-card-subtitle> Fecha: {{ pedido.fecha }} </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="success"
              class="btn btn"
              v-bind:href="'/Comprobante/' + pedido.id_pedido"
              >Comprobante</v-btn
            >
            <v-spacer> </v-spacer>

            <v-btn
              @click="openModal(pedido.id_pedido)"
              color="red"
              v-if="pedido.estado ==`Por confirmar`"
            >
              Cancelar</v-btn
            >
            <v-btn
                @click="devolverModal(pedido.id_pedido)"
                v-if="pedido.estado==='Entregado'"
                color="red"
                class="pa-2"
              >
                Devolver Pedido
            </v-btn>

          </v-card-actions>

          <v-expand-transition>
            <div>
              <v-divider></v-divider>
              <v-card-text>
                <p>Estado: {{ pedido.estado }}</p>

                <p>Metodo de Pago: {{ pedido.metodo }}</p>
                <p>Monto total: {{ pedido.total }}</p>
                </v-card-text>             

              
            </div>
            
          </v-expand-transition>
        </v-card></v-row
      >
    <h1>Devoluciones</h1>
      <v-row justify="center">
        
        <v-card
          class="mx-3 mt-5 mb-5"
          max-width="344"
          v-for="pedido in pedidos1"
          :key="pedido.id_pedido"
        >
   

          <v-card-title> Pedido: {{ pedido.id_pedido }} </v-card-title>

          <v-card-subtitle> Fecha: {{ pedido.fechapedido }} </v-card-subtitle>
        
          <v-card-actions>
            <v-btn
              color="success"
              class="btn btn"
              v-bind:href="'/Comprobante/' + pedido.id_pedido"
              >Comprobante</v-btn
            >
            <v-spacer> </v-spacer>

          </v-card-actions>

          <v-expand-transition>
            <div>
              <v-divider></v-divider>
              <v-card-text>
                <p>Estado: {{ pedido.estado }}</p>
                <p>Fecha Recepcion: {{pedido.fechadev}}</p>
                <p>Metodo de Pago: {{ pedido.metodo }}</p>
                <p>Monto total: {{ pedido.total }}</p>
                <p>Motivo devolucion: {{pedido.motivo}}</p>
                <p>Detalle: {{pedido.detalle_motivo}}</p>
                <p>¿Procede?: <b>{{pedido.procede}}</b></p>
                <p v-if="pedido.procede=='Si'">Observación: <b>El pedido ha sido devuelto y se ha procedido a la devolucion de {{ pedido.total }} soles </b> </p>
                <p v-if="pedido.procede=='No'">Observación: <b>Se comunicará con usted para informarle del porqué no procedió la devolución </b> </p>
              </v-card-text>             
              
            </div>
            
          </v-expand-transition>
        </v-card></v-row
      >

    </v-container>
    <!--modal devolucion pedido-->
    <v-dialog v-model="modalDevo"  max-width="700" >
      <v-card>
        <v-card-title>Devolución de Pedidos</v-card-title>
          <v-form ref="CrearDevolucion" @submit.prevent="CrearDevolucion(aux_dev)">
            <v-container>

              <v-card-text >
                <v-select
                  :items="motivos"
                  label="motivo"
                  v-model="Devolucion.motivo"
                >
                </v-select>
                <v-textarea
                  name="input-7-1"
                  
                  label="Introduzca detalles (opcional)"
                  v-model="Devolucion.detalle_motivo"
                  auto-grow
                  :counter=500
                  value=""               
                >
                </v-textarea>

                <v-card-actions>
                    <v-btn class="mt-5" @click="modalDevo=false">
                    Salir
                    </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="red"
                    class="mt-5"
                    type="submit"
                  >
                      Confirmar Devolución
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-container>
          </v-form>

      </v-card>
    </v-dialog>
    <!-- modal cancelar pedido -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline"> Cancelar el pedido </v-card-title>

        <v-card-text>
          ¿Desea cancelar el pedido <b>{{ this.aux }}</b> ?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue" @click="dialog = false"> NO </v-btn>

          <v-btn color="red" @click="deleteProductsFromVoucher(aux)">
            SI
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--     <Footer></Footer> -->
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Pedidos from "../apis/Pedidos";
import Footer from "../components/Footer";
export default {
  name: "Pedidos",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({
    alert: { show: false, message: "" },
    DevolucionLista:[],
    pedidos: [],
    pedidos1:[],
    Devolucion:{},
    DevolucionLista1:{},
    show: false,
    dialog: false,
    modalDevo: false,
    aux: {},
    motivos:["Mal estado","Productos abiertos","Productos vencidos"]
  }),

  created: async function () {
    try {
      this.user = JSON.parse(sessionStorage.getItem("session"));
      if (this.user == null) {
        this.$router.push("/");
      }

      const res = await Pedidos.get(`/get_pedidos_cliente/${this.user.id}`);
      this.pedidos = res.data.data.pedido;

      const res1 = await Pedidos.get(`/get_pedidos_devueltos_cliente/${this.user.id}`);
      this.pedidos1 = res1.data.data.pedido;

      const ListaDev = await Pedidos.get(`/getpedido_dev/${this.pedidos.id_pedido}`);
      this.DevolucionLista = ListaDev.data.data.pedidos;
      

      console.log(this.pedidos);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    openModal(id) {
      this.dialog = true;
      this.aux = id;
    },
    devolverModal(id_ped){
      this.aux_dev = id_ped;
      this.modalDevo = true;
    },

   /* async ProcedeoNo(idpedido){
      try{
      const ListaDev1 =await Pedidos.get(`/getpedido_dev_count/${idpedido}`);
      this.DevolucionLista1 = ListaDev1.data.data.pedidos;
      console.log(1);
      console.log(this.DevolucionLista1);
      return this.DevolucionLista1.count;
      }catch(error){
          console.log(error);
      }
    },*/

    async CrearDevolucion(id_ped){
      let valid = this.$refs.CrearDevolucion.validate();
      if (valid) {
        try{
        this.Devolucion.id_pedido = id_ped;
        const devPedido = await Pedidos.post("/create_Devolucion", this.Devolucion);
        this.$refs.CrearDevolucion.reset(); //borrar todo en modal
        this.modalDevo = false; //cerrar modal
        this.alert = {
            show: true,
            type: "success",
            message: "Petición de devolución creada",
        };
        location.reload();
        }catch(error){
          console.log(error);
        }
      }

    },
    async deleteProductsFromVoucher(id) {
      try {
        this.ReponerStock(id); //3 seg 
        const res = await Pedidos.delete(`/cancelar/${id}`);
        const index = this.pedidos.findIndex((c) => c.id_pedido == id);
        this.pedidos.splice(index, 1); //Desaparecer al instante  asyncrono  */

     
     

        this.dialog = false;
        this.alert = {
          show: true,
          type: "success",
          message: res.data,
        };
      } catch (error) {
        this.alert = {
          show: true,
          type: "error",
          message: res.data.message,
        };
      }
    },
    async deletePedido(id) {
      try {
        const res = await Pedidos.delete(`/delete/${id}`);
      } catch (error) {
        this.alert = {
          show: true,
          type: "error",
          message: res.data.message,
        };
      }
    },
    async ReponerStock(id) {
      try {
        const res = await Pedidos.get(`/ProStock/${id}`);
        var productosEnPedido = res.data.data.producto;
        for (var i = 0; i < productosEnPedido.length; i++) {
          const res2 = await Pedidos.put(
            `/update/${productosEnPedido[i].id_producto}/${productosEnPedido[i].cantidad}`
          );
        }
           setTimeout(() => {
         this.deletePedido(id);           
        }, 2000); //2.05seg
      } catch (error) {
        console.log(error);
      }
    }, //Solo falta que desaparezcan asincronamente
  },
};
</script>