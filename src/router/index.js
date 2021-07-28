import Vue from 'vue'
import Router from 'vue-router'

const Login=()=>import("views/login/Login")
const Mall=()=>import("views/mall/Mall")
Vue.use(Router)

const routes = [
  {
    path:"/",
    // redirect: "/login"
  },
  {
    path:"/mall",
    component:Mall,
  },
  {
    path:'/login',
    component:Login,
    meta:{
      title:"登录"
    }
  },
]

const router = new Router({
  mode: 'history',
  routes
})

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


export default router
