var my_bookmarks_favorite_list = [{
  icon: "search",
  title: "Google",
  href: "https://google.com",
  note: "Google一下，全都知道",
},{
  icon: "G",
  title: "Github",
  href: "https://github.com/BigKunLun",
  note: "世界最大的代码仓库，开源应有尽有",
},{
  icon: "K",
  title: "Kaggle",
  href: "https://kaggle.com",
  note: "数据建模和数据分析竞赛平台",
},{
  icon: "J",
  title: "Jupyter",
  href: "http://localhost:8888",
  note: "JUPYTER NOTEBOOK",
},{
  icon: "movie",
  title: "66电影港",
  href: "http://www.dygang.net/",
  note: "生活怎能没有电影？",
},{
  icon: "movie",
  title: "LOL电影天堂",
  href: "http://www.loldytt.com",
  note: "资源丰富",
},{
  icon: "web",
  title: "Iplaysoft",
  href: "http://www.iplaysoft.com/",
  note: "异次元软件世界，软件改变生活",
},{
  icon: "π",
  title: "少数派",
  href: "http://sspai.com",
  note: "基于专业创作社群的数字消费指南平台",
},{
  icon: "知",
  title: "知乎",
  href: "https://www.zhihu.com/",
  note: "知乎，发现更大的世界",
}]


var my_bookmarks_api_list = [{
  icon: "X",
  title: "XGBoost",
  href: "http://xgboost.readthedocs.io/en/latest/python/python_api.html",
  note: "XGBoost eXtreme Gradient Boosting",
  category: "version 0.6-4"
},{
  icon: "S",
  title: "Sklearn",
  href: "http://scikit-learn.org/stable/index.html",
  note: "Machine Learning in Python",
  category: "version 0.19.1"
},{
  icon: "P",
  title: "Python3",
  href: "http://www.runoob.com/python3/python3-tutorial.html",
  note: "Python API",
  category: "version 3.6"
},{
  icon: "P",
  title: "PyCookbook",
  href: "http://python3-cookbook.readthedocs.io/zh_CN/latest/index.html",
  note: "人生苦短，我用 Python！",
  category: "version 3"
},{
  icon: "L",
  title: "Linux",
  href: "http://linuxtools-rst.readthedocs.io/zh_CN/latest/index.html",
  note: " Linux Tools Quick Tutorial",
  category: "version Latest"
}]

var my_bookmarks = [{
  page_name: "Favorite",
  page_ico: "favorite",
  page_list: my_bookmarks_favorite_list
},{
  page_name: "API",
  page_ico: "dashboard",
  page_list: my_bookmarks_api_list
}]

_.each(my_bookmarks, function(page){
  if(page.page_name == "Favorite"){
    _.map(page.page_list, function(bm,i){
      bm.category = i
    })
  }else{
    page.page_list = _.sortBy(page.page_list, 'title');
  }
  _.each(page.page_list, function(bm){
    bm.color = _.sample(['purple','red','blue','green','orange'])
  });
})
