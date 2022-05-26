import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/favorieten',
        component: () => import('../pages/Favorites.vue'),
      },
      {
        path: '/team',
        component: () => import('../pages/Team.vue'),
      },
      { path: '/:id', component: () => import('pages/PokemonDetails.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
  {
    path: '/error',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
