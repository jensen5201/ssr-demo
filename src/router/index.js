import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: HelloWorld
      },
      {
        path: '*',
        redirect: '/'
      }
    ]
  })
  if (typeof window !== 'undefined') {
    router.beforeEach((to, from, next) => {
      next()
    })
  }
  return router
}
