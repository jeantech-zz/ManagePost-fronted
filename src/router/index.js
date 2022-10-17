import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexPost from '../components/IndexPost'
import CreatePost from '../components/CreatePost'
import EditPost from '../components/EditPost'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/indexPost',
    name: 'indexPost',
    component: IndexPost
  },
  {
    path: '/createPost',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/editPost/:id',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
