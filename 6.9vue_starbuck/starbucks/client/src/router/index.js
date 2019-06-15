import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router= new Router({
  routes: [
    {
      path:'/',
      meta:{
        title:'首页'
      },
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        title:'首页'
      },
      component: ()=>import ('../views/home/index'),
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        title:"登录"
      },
      component: ()=>import ('../views/login/index')
    },
    {
      path: '/sort',
      name: 'sort',
      meta:{
        title:"排序"
      },
      component: ()=>import ('../views/sort/index')
    },
    {
      path: '/search',
      name: 'search',
      meta:{
        title:"搜索"
      },
      component: ()=>import ('../views/search/index')
    },
    {
      path:'/detail/:type/:id',
      name: 'detail',
      meta:{
        title:'详情',
      },
      component:()=>import ('../views/detail/index')
    },
    {
      path:'/commit/:type',
      name: 'commit',
      meta:{
        title:'申请表',
      },
      component:()=>import ('../views/apply/index')
    },
  ]
})
router.beforeEach((to,from,next)=>{
  document.title =to.meta.title
  next()
})
export default router