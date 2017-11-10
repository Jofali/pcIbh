var component = require('./js/components.js')
var routes = require('./js/router.js')
require('!style-loader!css-loader!./css/art.css')
require('!style-loader!css-loader!./css/nav.css')
require('!style-loader!css-loader!./css/footer.css')
require('!style-loader!css-loader!./css/build.css')
var router = new VueRouter({
  routes
})

 // 实例化vue
new Vue({
  el: '#app',
  router,
  components: {
    'ibh-nav': component.nav,
    'ibh-footer': component.footer
  }
})