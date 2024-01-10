import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../components/HomeView.vue'
import LoginView from '../components/LoginView.vue'
import About from '../components/About.vue'
import Trips from '../components/Trips.vue'
import Reservations from '../components/Reservations.vue'

// import other components

const routes = [
  { 
    name: 'home',
    path: '/', 
    component: HomeView 
  },
  { 
    name: 'login',
    path: '/login', 
    component: LoginView
  },
  { 
    name: 'about',
    path: '/about', 
    component: About
  },
  { 
    name: 'trips',
    path: '/trips', 
    component: Trips
  },
  { 
    name: 'reservations',
    path: '/reservations', 
    component: Reservations
  },
  // define other routes
];

//Init router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
