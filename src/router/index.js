import { createRouter, createWebHistory } from 'vue-router';
// import DefaultLayout from '../components/layout/DefaultLayout.vue';
import Top10View from '../views/Top10View.vue';
import FavoritesView from '../views/FavoritesView.vue';
import DetailView from '@/views/DetailView.vue';

const routes = [
  {
    path: '/',
    name: 'Top10',
    component: Top10View,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesView,
  },
  {
    path: '/cryptocurrency/:id',
    name: 'CryptocurrencyDetail',
    component: DetailView,
    props: true,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
