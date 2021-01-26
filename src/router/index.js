import Vue from 'vue'
import VueRouter from 'vue-router'
import { Paginas } from '../Config'


Vue.use(VueRouter)

function toPascal(kebabStr) {
  return kebabStr.split("-").reduce((prev, cur) => prev + cur.charAt(0).toUpperCase() + cur.slice(1), "")
}

function genRoutes(g) {
  let routesList =  []
  g.forEach(route => {
    routesList.push({
        path: `/${route.slug}`,
        name: toPascal(route.slug),
        meta: {
          title: route.title,
          icon: route.icon
        },
        component: () => import(`../views/${toPascal(route.slug)}.vue`)
      })
  })
  if (g.length > 0) {
    routesList.push({ path: '/', redirect: `/${g[0].slug}` })
  }
  return routesList
}

let routes = genRoutes(Paginas)



const router = new VueRouter({
  routes: routes
})

export default router
