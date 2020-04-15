/*直接更新state的多个方法的对象*/
import {
  DECREMENT_FOODCOUNT,
  INCREMENT_FOODCOUNT,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  CLEAR_CART, RECEIVE_SEARCHSHOPS
} from './mutation-types'
import Vue from 'vue'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address=address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops=shops
  },
  [RECEIVE_USERINFO](state,{userInfo}){
    state.userInfo=userInfo
  },
  [RESET_USERINFO](state){
    state.userInfo={}
  },
  [RECEIVE_INFO](state,{info}){
    state.info=info
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods=goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings=ratings
  },
  [INCREMENT_FOODCOUNT](state,{food}){
    if(!food.count){
      //使新增的属性count也有数据绑定
      Vue.set(food,'count',1)
      //将food添加到cartFoods中
      state.cartFoods.push(food)
    }else {
      food.count++
    }
  },
  [DECREMENT_FOODCOUNT](state,{food}){
    //只有count有值且大于0才去减
    if(food.count>0){
      food.count--
      if(food.count===0){
        //将food添加到cartFoods中
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state){
    //使food中的count为0
    state.cartFoods.forEach(food=>food.count=0)
    //清空cartFoods
    state.cartFoods=[]
  },
  [RECEIVE_SEARCHSHOPS](state,{searchShops}){
    state.searchShops=searchShops
  }
}
