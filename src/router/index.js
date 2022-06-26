import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)



const Home = ()=> import('../views/home/Home')
const Cart = ()=> import('../views/cart/Cart')
const Catalog = ()=> import('../views/catalog/Catalog')
const Profile = ()=> import('../views/profile/Profile')

const routes=[
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/catalog',
    component: Catalog
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router
