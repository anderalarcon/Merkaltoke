<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <h1>Pedidos</h1>
      <v-row justify="center">
        <v-card class="ma-3" max-width="344">
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          >
          </v-img>
          <v-card-title> Pedido 1 </v-card-title>

          <v-card-actions>
            <v-btn
              color="orange"
              x-small
              small
              dark
              fab
              class=""
              @click="dialog = true"
            >
              <v-icon small> mdi-pencil </v-icon></v-btn
            >
            <span> Ver Detalle</span>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
   
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "Pedidos",
  data: () => ({
    dialog: false,
  }),

  components: {
    NavBar,
  },
  methos: {
  
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