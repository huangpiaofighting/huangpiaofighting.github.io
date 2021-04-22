
require('./css/index.css')
import $ from './../../component/myTree'
let $container = $('#container');
let data = [{
  'title': "css",
  "data": ['css3 动画', 'less', 'sass']
}, {
  'title': 'js',
  'data': [{
    'title': 'js前端',
    'data': [{
      'title': 'vue',
      'data': ["vue", "vue-router"]
    },{
      'title': 'canvas',
      'data': ["konva"]
    },{
      'title': 'SVG',
      'data': ["konva"]
    }]
  },{
    'title': 'js后端',
    'data': ["nodejs", "koaJs"]
  }]
},{
  'title': "dom",
  "data": ['dom']
}]
$container.hTree({ "data": data })
$container.find('dd').hide()