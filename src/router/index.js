import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/Home.vue'
import PageHomeView from '@/views/PageHomeView.vue'
import PageThreadShow from '@/pages/ThreadShow.vue'
import NotFound from '@/pages/NotFound.vue'
import sourceData from '@/data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/page',
      name: 'page',
      component: PageHomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true,
      beforeEnter(to, from, next) {
        const threadExists = sourceData.threads.find((thread) => thread.id === to.params.id)
        if (threadExists) {
          return next()
        } else {
          next({
            name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') }
            // query: to.query,
            // hash: to.hash
          })
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
