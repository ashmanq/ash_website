import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Coding from '@/views/Coding';
import Drawing from '@/views/Drawing';
import Admin from '@/views/Admin';
import ProjectDetail from '@/views/ProjectDetail';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio/:type/:id',
      component: ProjectDetail
    },
    {
      path: '/portfolio/coding',
      name: 'coding',
      component: Coding
    },
    {
      path: '/portfolio/drawing',
      name: 'drawing',
      component: Drawing
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
});

export default router;
