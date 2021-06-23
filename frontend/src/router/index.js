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
  ,

  {
    path: '/Comprobante/:id',
    name: 'Comprobante',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Comprobante')
  }
  ,

  {
    path: '/ProfileProveedor/',
    name: 'ProfileProveedor',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Proveedor/ProfileProveedor')
  } ,

  {
    path: '/MisProductos/',
    name: 'MisProductos',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Proveedor/MisProductos')
  },

  {
    path: '/PedidosProv/',
    name: 'PedidosProv',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Proveedor/PedidosProv')
  } 
  ,

  {
    path: '/Indicadores/',
    name: 'Indicadores',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Proveedor/Indicadores')
  }  ,

  {
    path: '/Productos-Pedido/:id',
    name: 'Productos-Pedido',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/Proveedor/Productos-Pedido')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
