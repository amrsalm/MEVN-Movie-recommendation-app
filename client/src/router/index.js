import AddPostVue from '@/views/AddPost.vue'
import postVue from '@/views/post.vue'
import editPost from '@/views/editPost.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/edit-post/:id',
    name: 'edit-Post',
    component: editPost
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPostVue,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: postVue,
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
