import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import Home from './views/Home.vue';

// Layouts
import HomePageLayout from './layouts/HomePageLayout.vue';
import AnimePageLayout from './layouts/AnimePageLayout.vue';

// Views
const AnimeHomePage = () => import('@/views/anime/AnimeHomePage.vue');

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'routes.home',
      component: HomePageLayout,
      children: [
        {
          path: 'anime',
          redirect: 'anime/list',
          name: 'routes.anime',
          component: AnimePageLayout,
          children: [
            {
              path: 'list',
              component: AnimeHomePage
            }

          ],
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
export default router;
