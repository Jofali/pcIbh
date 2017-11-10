/**
 * 定义组件
 **/

var list = {
  template: '<ul>\
              <li>全部</li>\
              <li v-for="list in sort">\
                {{ list.TypeName }}\
              </li>\
             </ul>',
  data: function () {
    return {
      sort: {'TypeName': '加载中'}
    }
  },
  created: function () {
    var self = this
    axios.get('http://www.lgwow.com/api/Article/Type').then(function(response) {
      self.sort = response.data; 
    }).catch(function(response){
      console.log(response)
    })
  }
}

// 头部导航
var nav = {
  template: '<div class="nav">\
              <div class="nav-list">\
                <router-link to="/">Smart Black House</router-link>\
                <ibh-sort></ibh-sort>\
              </div>\
              <div class="nav-bg">\
              </div>\
            </div>',
  components: {
    'ibh-sort': list
  }
}

// 页面尾部
var footer = {
  template: '<footer>豫ICP备17025838号</footer>'
}
// 文章列表
var articleList = {
  template: '<div class="article-list">\
  <div class="head">\
    <h3>不聪明</h3>\
    <p>聪明只决定你走的有多快，不决定你走的有多远</p>\
    <p>以大多数人的努力程度之低，根本轮不到拼天赋</p>\
  </div>\
  <ul>\
    <li v-for="art in Article">\
      <router-link :to="\'/\' + art.AId">\
        <div class="article-img">\
          <img src="images/art.svg" >\
        </div>\
        <div class="article-title">{{ art.Title }}</div>\
      </router-link>\
    </li>\
  </ul>\
</div>',
  data: function () {
    return {
      Article: [
        { 'title': '加载中...' }
      ]
    }
  },
  // vue生命周期-->数据注入，但未挂载
  created: function () {
    var self = this
    // ajax请求数据并赋值给组件
    axios.get('http://www.lgwow.com/api/Article/ArticleList?AtId=0')
      .then(function (response) {
        console.log(response)
        self.Article = response.data
      })
      .catch(function (response) {
        console.log(response);
      });
  }
}

var article = {
  template: '<div class="article-wrap" >\
  <div class="article" v-html="content"></div>\
  </div>',
  data: function () {
    return {
      content: '加载中...'
    }
  },
  created: function () {
    var self = this
    axios.get('http://www.lgwow.com/api/Article/ArticleInfo?AId=' + self.$route.params.id)
      .then(function (response) {
        self.content = response.data.Content
      })
      .catch(function (response) {
        console.log(response);
      })
  }
}

module.exports = {
  'nav': nav,
  'article': article,
  'articleList': articleList,
  'list': list,
  'footer': footer
}
