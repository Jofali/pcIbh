var tem = require('./components.js')
/**
 * 定义路由
 **/
var routes = [
  {
    path: '/',
    component: tem.articleList
  },
  {
    path: '/:id',
    component: tem.article
  }
]

module.exports = routes