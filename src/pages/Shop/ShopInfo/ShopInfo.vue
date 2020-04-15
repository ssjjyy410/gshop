<template>
  <div class="shop-info">
    <div class="info-content">
      <section class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="delivery">
          <div>
            <span class="delivery-icon">{{info.description}}</span>
            <span>由商家配送提供配送，约 {{info.deliveryTime}} 分钟送达，距离 {{info.distance}}</span>
          </div>
          <div class="delivery-money">配送费￥{{info.deliveryPrice}}</div>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="activity">
          <div class="activity-item" :class="supportClasses[support.type]" v-for="(support,index) in info.supports" :key="index">
            <span class="content-tag">
              <span class="mini-tag">{{support.name}}</span>
            </span>
            <span class="activity-content">{{support.content}}</span>
          </div>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper">
          <ul class="pic-list" ref="picsUl">
            <li class="pic-item" v-for="(pic,index) in info.pics" :key="index">
              <img width="120" height="90" :src="pic"/>
            </li>
          </ul>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li>
            <span class="bold">品类</span>
            <span>{{info.category}}</span>
          </li>
          <li>
            <span class="bold">商家电话</span>
            <span>{{info.phone}}</span>
          </li>
          <li>
            <span class="bold">地址</span>
            <span>{{info.address}}</span>
          </li>
          <li>
            <span class="bold">营业时间</span>
            <span>{{info.workTime}}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name:'ShopInfo',
    data(){
      return {
        supportClasses: ['activity-green','activity-red','activity-orange']
      }
    },
    computed:{
      ...mapState(['info'])
    },
    mounted () {
      /*
        在该组件被渲染后再创建滚动
          -因为在我们点击进入Shop组件时，info中的信息就已经获取到了，
          所以在我们点击到ShopInfo组件时，只需要等待info中的信息被渲染到页面上后，
          就可以创建滚动条了
          拓展：但是当我们重新刷新该组件的路由时，info是为空的，因为获得info的ajax请求是异步的，所以我们需要判断info是否已经获取到
      */
      if(!this.info.pics){//如果图片不存在，就直接结束，不创建滚动条
        return
      }

      //创建滚动条
      this._initScroll()
    },
    watch:{
      //监视info
      //解决重新刷新该组件时，info为空造成无法创建滚动条的问题
      info(){
        //创建滚动条
        this._initScroll()
      }
    },
    methods:{
      _initScroll(){
        new BScroll('.shop-info')

        //因为图片的父元素ul的宽度被指定了，正好和图片的祖父级元素div宽度相等而图片无法滚动，所以我们还需要动态的改变ul的宽度使其大于div的宽度
        const ul=this.$refs.picsUl
        const liWidth=120 //每张图片的宽度
        const space=6 //每张图片的右边距
        const count=this.info.pics.length //图片的数量
        ul.style.width=(liWidth+space)*count-space+'px' //ul的宽度样式
        new BScroll('.pic-wrapper',{
          scrollX:true
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .shop-info
    position: absolute
    top: 195px
    bottom: 0
    left: 0
    width: 100%
    background: #fff;
    overflow: hidden
    .section
      padding 16px 14px 14px
      font-size 16px
      background-color #fff
      color #666
      border-bottom 1px solid #eee
      position relative
      .section-title
        color #000
        font-weight 700
        line-height 16px
        > .iconfont
          float right
          color #ccc
      .delivery
        margin-top 16px
        font-size 13px
        line-height 18px
        .delivery-icon
          width 55px
          font-size 11px
          margin-right 10px
          display inline-block
          text-align center
          color #fff
          background-color #0097ff
          padding 1px 0
          border-radius 4px
        .delivery-money
          margin-top 5px

      .activity
        margin-top 16px
        .activity-item
          margin-bottom 12px
          display flex
          font-size 13px
          align-items center
          &.activity-green
            .content-tag
              background-color rgb(112, 188, 70)
          &.activity-red
            .content-tag
              background-color rgb(240, 115, 115)
          &.activity-orange
            .content-tag
              background-color: rgb(241, 136, 79)
          .content-tag
            display inline-block
            border-radius 2px
            width 36px
            height: 18px
            margin-right 10px
            color #fff
            font-style normal
            position relative
            .mini-tag
              position absolute
              left 0
              top 0
              right -100%
              bottom -100%
              font-size 24px
              transform scale(.5)
              transform-origin 0 0
              display flex
              align-items center
              justify-content center
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        margin-top 16px
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0
      .detail
        margin-bottom -16px
        > li
          display flex
          justify-content space-between
          align-items center
          margin-right -10px
          padding 16px 12px 16px 0
          line-height 16px
          bottom-border-1px(#ddd)
          font-size 13px
          > .bold
            font-weight 700
            color #333
          &:last-child
            border-none()


    .split
      width: 100%
      height: 16px
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #f3f5f7
</style>
