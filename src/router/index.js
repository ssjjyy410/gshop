import Vue from 'vue'
import Router from 'vue-router'

//懒加载
const MSite=()=>import('../pages/MSite/MSite')
const Order=()=>import('../pages/Order/Order')
const Profile=()=>import('../pages/Profile/Profile')
const Search=()=>import('../pages/Search/Search')
const Login=()=>import('../pages/Login/Login')

import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'',
          redirect:'/shop/goods'
        },
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop/info',
          component:ShopInfo
        }
      ]
    }
  ]
})
