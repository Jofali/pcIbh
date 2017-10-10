/**
 * 定义组件
 **/

// 头部导航
var nav = {
  template: '<div class="nav">\
              <router-link to="/">文章列表</router-link>\
            </div>'
}

// 页面尾部
var footer = {
  template: '<footer>豫ICP备17025838号</footer>'
}

// 文章列表
var articleList = {
  template: '#articleList',
  // template: '<ul class="article-list">\
  //             <li v-for="art in Article">\
  //               <router-link :to="\'/\' + art.AId">\
  //                 <div class="article-img">\
  //                   <img src="images/art.svg" >\
  //                 </div>\
  //                 <div class="article-title">{{ art.Title }}</div>\
  //               </router-link>\
  //             </li>\
  //           </ul>',
  data: function () {
    return {
      Article: [
        {'title': '加载中...'}
      ]
    }
  },
  // vue生命周期-->数据注入，但未挂载
  created: function () {
    var self = this
    // ajax请求数据并赋值给组件
    axios.get('http://www.lgwow.com/api/Article/ArticleList?AtId=0')
    .then(function (response) {
      self.Article = response.data
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}

var article = {
  template: '<div class="article" v-html="content"></div>',
  data: function () {
    return {
      content: '加载中...'
    }
  },
  created: function () {
    var self = this
    axios.get('http://www.lgwow.com/api/Article/ArticleInfo?AId='+ self.$route.params.id)
    .then(function (response) {
      self.content = response.data.Content
    })
    .catch(function (response) {
      console.log(response);
    })
  }
}
