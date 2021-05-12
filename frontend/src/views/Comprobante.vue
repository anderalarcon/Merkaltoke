<template>
     <v-app>
      <v-main>
        <v-container>
            <v-layout class="mt-3">

                <v-flex class=" " md1>
                    
                    <v-img
                    height="100"
                    width="100"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  ></v-img>
                </v-flex>
                <v-flex class="border ml-2" md3>
                  <P> RUC 00010120</P>
                <P>NOMBRE : MERKALTOQUE</P>
                <P>UBICACION: LOS ALISOS</P>
                  
                </v-flex>

            </v-layout>
            <v-layout>

              <v-flex md-3>
                <p>SEÑOR: NAME</p>
                <p>RUC : 00000000</p>
              </v-flex>
              <v-flex md-3>
                <p>CIUDAD: LIMA</p>
                <p>DISTRITO: MIRAFLORES</p>
              </v-flex>
              <v-flex md-3>
                <p>FECHA :</p>
                <p>vENCIMIENTO:</p>
              </v-flex>
            </v-layout>


            <template>
              <v-simple-table height="300px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Item
                      </th>
                      <th class="text-left">
                       Nombre
                      </th>
                      <th class="text-left">
                        Detalle
                      </th>
                      <th class="text-left">
                       Unidades
                      </th>
                      <th class="text-left">
                       Precio
                      </th>
                      <th class="text-left">
                        Monto
                       </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      
                    >
                      <td>001</td>
                      <td>Cable</td>
                      <td>Cable ethernet</td>
                      <td>2</td>
                      <td>5</td>
                      <td>10</td>
                    </tr>
                    <tr
                      
                    >
                      <td>a</td>
                      <td>a</td>
                      <td>a</td>
                      <td>a</td>
                      <td>f</td>
                    </tr>
                    
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          


        </v-container>

        
      </v-main>
      
      
      
      
    </v-app>  
</template>
