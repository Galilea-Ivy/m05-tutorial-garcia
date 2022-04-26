import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductsDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  { 
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  }, {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductsDetailPage,
  }, {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  }, {
    path: "/",
    redirect: "/products",
  }, {
    path: '/*',
    component: NotFoundPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
