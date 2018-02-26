var my_bookmarks_favorite_list = [{
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
  icon: "N",
  title: "NAS",
  href: "https://edmond1210.quickconnect.to",
  note: "群晖，家庭数据中心",
},{
  icon: "cloud",
  title: "百度网盘",
  href: "https://pan.baidu.com/disk/home",
  note: "该用还是要用",
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
  icon: "T",
  title: "Trello",
  href: "https://trello.com",
  note: "任务管理器",
}]

var my_bookmarks_resource_list = [{
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
  icon: "X",
  title: "Xclient",
  href: "http://xclient.info",
  note: "Mac app",
},{
  icon: "book",
  title: "书伴",
  href: "https://bookfere.com/",
  note: "为静心阅读而生",
},{
  icon: "book",
  title: "鸠摩搜书",
  href: "https://www.jiumodiary.com/",
  note: "电子书搜索引擎",
},{
  icon: "V",
  title: "vol",
  href: "http://vol.moe/",
  note: "Kindle 漫画",
},{
  icon: "P",
  title: "Processon",
  href: "https://www.processon.com",
  note: "在线绘图",
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
  category: "version 0.19.2"
},{
  icon: "S",
  title: "Scrapy",
  href: "https://docs.scrapy.org/en/latest/index.html",
  note: "Python爬虫框架",
  category: "version 1.5"
},{
  icon: "D",
  title: "Docker",
  href: "http://www.runoob.com/docker/docker-install-python.html",
  note: "Docker大法好，干净随便走",
  category: "version 17"
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
},{
  icon: "七",
  title: "七牛云",
  href: "https://www.qiniu.com",
  note: "企业级云服务器商",
}]

var my_bookmarks = [{
  page_name: "Favorite",
  page_ico: "favorite",
  page_list: my_bookmarks_favorite_list
},{
  page_name: "Resource",
  page_ico: "grade",
  page_list: my_bookmarks_resource_list
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
