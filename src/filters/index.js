import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'

//自定义过滤器
//id   自定义的字符串标识，再要格式化时间的地方使用，例如： rating.eateTime|date-format
//function    执行的函数
Vue.filter('date-format',function (value,formatStr='YYYY-MM-DD HH:mm:ss') {
  //value 要格式化的值
  //formatStr 自定义的时间的格式

  //moment格式化的方式
  // return moment(value).format(formatStr)

  //date-fns格式化的方式（更轻量化）
  format(value,formatStr)
})
