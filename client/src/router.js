import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Portfolio from '@/views/Portfolio';
import Coding from '@/views/Coding';
import Art from '@/views/Art';
import Contact from '@/views/Contact';
import AboutMe from '@/views/AboutMe';
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
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/coding',
      name: 'coding',
      component: Coding
    },
    {
      path: '/portfolio/art',
      name: 'art',
      component: Art
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMe
    }
  ]
});

export default router;
