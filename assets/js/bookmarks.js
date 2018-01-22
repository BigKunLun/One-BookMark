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
  title: "电影天堂",
  href: "http://www.loldytt.com",
  note: "资源丰富，下载方式多",
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
  note: "Linux Tools Quick Tutorial",
  category: "version Latest"
},{
  icon: "P",
  title: "Pandas",
  href: "http://usyiyi.cn/translate/Pandas_0j2/index.html",
  note: "强大的Python数据分析工具包",
  category: "0.19.2"
},{
  icon: "S",
  title: "Scrapy",
  href: "https://docs.scrapy.org/en/latest/index.html",
  note: "Python爬虫框架",
  category: "1.5"
},{
  icon: "D",
  title: "Docker",
  href: "https://docs.docker-cn.com/",
  note: "http://www.runoob.com/docker/docker-install-python.html",
  category: "17"
}]

var my_bookmarks_vps_list = [{
  icon: "V",
  title: "Vultr",
  href: "https://my.vultr.com",
  note: "VPS便宜又好用，当然主要是便宜",
},{
  icon: "A",
  title: "阿里云",
  href: "https://ecs.console.aliyun.com/#/home",
  note: "控制台很成熟，花样特别多",
},{
  icon: "F",
  title: "FreeNom",
  href: "https://my.freenom.com",
  note: "免费域名",
},{
  icon: "N",
  title: "Namecheap",
  href: "https://ap.www.namecheap.com",
  note: "域名大全",
},{
  icon: "D",
  title: "Dnspod",
  href: "https://www.dnspod.cn/console/dashboard",
  note: "免费DNS",
}]

var my_bookmarks = [{
  page_name: "Favorite",
  page_ico: "favorite",
  page_list: my_bookmarks_favorite_list
},{
  page_name: "API",
  page_ico: "dashboard",
  page_list: my_bookmarks_api_list
},{
  page_name: "VPS",
  page_ico: "cloud",
  page_list: my_bookmarks_vps_list
}]

_.each(my_bookmarks, function(page){
  if(page.page_name != "API"){
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
