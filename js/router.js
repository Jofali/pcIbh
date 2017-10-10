/**
 * 定义路由
 **/

var routes = [
  {
    path: '/',
    component: articleList
  },
  {
    path: '/:id',
    component: article
  }
]

var router = new VueRouter({
  routes
})