import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  },
  {
    path: '/Profile',
    name: 'Profile',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile')
  },
  ,
  {
    path: '/Landing',
    name: 'Landing',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing')
  },,
  {
    path: '/Carrito',
    name: 'Carrito',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Carrito')
  },
  {
    path: '/Pedidos',
    name: 'Pedidos',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos')
  },
  {
    path: '/Productos-Categoria/:id',
    name: 'Productos-Categoria',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Productos-Categoria')
  },

  {
    path: '/Productos-Proveedor/:id',
    name: 'Productos-Proveedor',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Productos-Proveedor')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
