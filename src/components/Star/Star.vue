<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc,index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
  export default {
    props:{
      score:Number,
      size:Number
    },
    computed:{
      //返回装有5个五角星的类名的数组
      starClasses(){
        const {score}=this //获取评分
        const scs=[] //定义装有5个五角星的数组

        const scoreInteger=Math.floor(score) //向下取评分的整数
        //装入scoreInteger个全五角星的类名
        for(let i=0;i<scoreInteger;i++){
          scs.push('on')
        }

        //如果评分减去整数获得的小数大于等于0.5，则向数组中添加一个半五角星的类名'half'
        if(score*10-scoreInteger*10>=5){//为了保持精度所以乘十
          scs.push('half')
        }

        //如果数组还没有装满5个，则添加灰色五角星
        while(scs.length<5){
          scs.push('off')
        }

        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
