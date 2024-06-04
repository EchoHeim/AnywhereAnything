(function () {
  var div = document.querySelector("#content > div");

  var SearchData = [
    ["bing.png", "https://cn.bing.com/search?q="],
    ["google.png", "https://www.google.com/search?q="],
    ["douban.png", "https://www.douban.com/search?q="],
    ["sinaweibo.png", "https://s.weibo.com/weibo?q="],
    ["googleimage.png", "https://google.com/search?q="],
    ["pinterest.png", "http://pinterest.com/search/pins/?q="],
    ["twitter.png", "https://twitter.com/search?q="],
    ["googlemaps.png", "http://www.google.cn/maps/search/"],
    ["youdict.png", "http://www.youdict.com/w/"],
  ];

  var SearchList = document.querySelector("#searchItem");
  CreateSearch(SearchData, SearchList);

  var resource = [
    {
      header: "知识",
      recommend: ["wikipedia.png", "维基百科", "https://www.wikipedia.org/"],
      content: [
        ["zhihu.png", "知乎", "https://www.zhihu.com/"],
        ["quora.png", "Quora", "https://www.quora.com/"],
        ["baiduzhidao.png", "百度知道", "https://zhidao.baidu.com/"],
        ["googlescholar.png", "Google学术", "https://scholar.google.com/"],
        ["Khan.png", "Khan Academy", "https://www.khanacademy.org/"],
        ["wikihow.png", "wikihow", "https://www.wikihow.com/Main-Page"],
        ["worldcat.png", "WorldCat", "https://www.worldcat.org/"],
        ["ted.png", "TED", "https://www.ted.com/"],
        ["ted.png", "51自学网", "https://www.51zxw.net/"],
      ],
    },
    {
      header: "社交",
      recommend: ["facebook.png", "Facebook", "https://www.facebook.com/"],
      content: [
        ["douban.png", "豆瓣", "https://www.douban.com/"],
        ["twitter.png", "Twitter", "https://twitter.com/"],
        ["sinaweibo.png", "新浪微博", "https://weibo.com/"],
        ["sinaweibo.png", "小红书", "https://www.xiaohongshu.com/"],
        ["sinaweibo.png", "百度贴吧", "https://tieba.baidu.com/"],
        ["sinaweibo.png", "知乎", "https://www.zhihu.com/"],
      ],
    },
    {
      header: "新闻",
      recommend: ["taobao.png", "今日热榜", "https://rebang.today/"],
      content: [
        ["JD.png", "网易新闻", "https://news.163.com/"],
        ["JD.png", "财新网", "https://www.caixin.com/"],
        [
          "JD.png",
          "Google Trends",
          "https://trends.google.com/trends/trendingsearches/daily",
        ],
        ["JD.png", "AP美联社", "https://apnews.com/"],
        ["JD.png", "BBC news", "https://www.bbc.com/news"],
        ["JD.png", "路透社", "https://www.reuters.com/"],
      ],
    },
    {
      header: "购物",
      recommend: ["taobao.png", "淘宝", "https://www.taobao.com/"],
      content: [
        ["JD.png", "京东", "https://www.jd.com/"],
        ["smzdm.png", "什么值得买", "https://www.smzdm.com/"],
        ["tmall.png", "天猫", "https://www.tmall.com/"],
        ["amazon.png", "亚马逊", "https://www.amazon.com/"],
        ["iqiyi.png", "爱奇艺", "https://www.iqiyi.com/"],
        ["MagoTV.png", "芒果TV", "https://www.mgtv.com/"],
        ["letv.png", "乐视视频", "https://www.le.com/"],
      ],
    },
    {
      header: "书籍",
      recommend: ["taobao.png", "Z-library", "https://zh.singlelogin.re/"],
      content: [
        ["JD.png", "微信读书", "https://weread.qq.com/"],
        ["JD.png", "Goodreads", "https://www.goodreads.com/"],
      ],
    },
    {
      header: "编程",
      recommend: [
        "stackoverflow.png",
        "Stack Overflow",
        "https://stackoverflow.com/",
      ],
      content: [
        ["github.png", "Github", "https://github.com/"],
        [
          "appledev.png",
          "Apple Developer",
          "https://developer.apple.com/develop/",
        ],
        ["cocoapods.png", "CocoaPods", "https://cocoapods.org/"],
        ["unity.png", "Unity", "https://unity.com/"],
        ["apisio.png", "APIs", "https://apis.io/"],
        ["codepen.png", "CodePen", "https://codepen.io/"],
        ["codepen.png", "W3Schools", "https://www.w3school.com.cn/"],
        ["codepen.png", "菜鸟教程", "https://www.runoob.com/"],
      ],
    },
    {
      header: "图片",
      recommend: ["Pinterest.png", "Pinterest", "https://www.pinterest.com/"],
      content: [
        ["icon-icons.png", "icons", "https://icon-icons.com/pt/"],
        ["flickr.png", "flickr", "https://www.flickr.com/"],
        ["youku.png", "优酷", "https://youku.com/"],
        ["qqv.png", "腾讯视频", "https://v.qq.com/"],
        ["iqiyi.png", "爱奇艺", "https://www.iqiyi.com/"],
        ["MagoTV.png", "芒果TV", "https://www.mgtv.com/"],
        ["letv.png", "乐视视频", "https://www.le.com/"],
      ],
    },
    {
      header: "音乐",
      recommend: ["163music.png", "网易云音乐", "https://music.163.com/"],
      content: [
        ["spotify.png", "Spotify", "https://open.spotify.com/"],
        ["QQmusic.png", "QQ音乐", "https://y.qq.com/"],
        ["soundcloud.png", "SoundCloud", "https://soundcloud.com/"],
        ["doubanmusic.png", "豆瓣音乐", "https://m.douban.com/music/"],
        ["bandcamp.png", "bandcamp", "https://bandcamp.com/"],
        ["pandora.png", "Pandora", "https://www.pandora.com/"],
      ],
    },
    {
      header: "视频",
      recommend: ["youtube.png", "YouTube", "https://www.youtube.com/"],
      content: [
        ["bilibili.png", "Bilibili", "https://www.bilibili.com/"],
        ["vimeo.png", "Vimeo", "https://vimeo.com/"],
        ["youku.png", "优酷", "https://youku.com/"],
        ["qqv.png", "腾讯视频", "https://v.qq.com/"],
        ["iqiyi.png", "爱奇艺", "https://www.iqiyi.com/"],
        ["MagoTV.png", "芒果TV", "https://www.mgtv.com/"],
        ["letv.png", "乐视视频", "https://www.le.com/"],
      ],
    },
    {
      header: "游戏",
      recommend: ["steam.png", "Steam", "https://store.steampowered.com/"],
      content: [
        ["bilibili.png", "EPIC", "https://www.epicgames.com/"],
        ["vimeo.png", "好玩游戏厅", "https://www.coarcade.com/"],
        ["youku.png", "520switch", "https://www.520switch.com/"],
        ["qqv.png", "byrutor", "https://repack-byrutor.org/"],
        ["iqiyi.png", "资源避难所", "https://www.flysheep6.com/"],
        ["MagoTV.png", "灵动游戏", "https://www.mhhf.com/"],
        ["letv.png", "PacoGames", "https://www.pacogames.com/"],
        ["iqiyi.png", "小霸王", "https://www.yikm.net/"],
        ["MagoTV.png", "KBH Games", "https://kbhgames.com/"],
        ["MagoTV.png", "OldmanEmu", "https://www.oldmantvg.net/"],
      ],
    },
    {
      header: "设计",
      recommend: ["behance.png", "Behance", "https://www.behance.net/"],
      content: [
        ["cargo.png", "Cargo", "https://cargo.site/"],
        ["designboom.png", "designboom", "https://www.designboom.com/"],
        ["nounproject.png", "TheNounProject", "https://thenounproject.com/"],
        ["dribbble.png", "Dribbble", "https://dribbble.com/"],
        ["pinterest.png", "Pinterest", "https://www.pinterest.com/"],
        ["iconmonstr.png", "iconmonstr", "https://iconmonstr.com/"],
        ["tumblr.png", "Tumblr", "https://www.tumblr.com/"],
      ],
    },
    {
      header: "旅行",
      recommend: ["googlemaps.png", "谷歌地图", "https://www.google.com/maps/"],
      content: [
        ["bilibili.png", "Bilibili", "https://www.bilibili.com/"],
        ["vimeo.png", "Vimeo", "https://vimeo.com/"],
        ["youku.png", "优酷", "https://youku.com/"],
        ["qqv.png", "腾讯视频", "https://v.qq.com/"],
        ["iqiyi.png", "爱奇艺", "https://www.iqiyi.com/"],
        ["MagoTV.png", "芒果TV", "https://www.mgtv.com/"],
        ["letv.png", "乐视视频", "https://www.le.com/"],
      ],
    },
  ];

  resource.map(function (val) {
    createItem(val, div, 6);
  });

  window.addEventListener("keydown", function () {
    var keyword = document.querySelector("#searchBox");
    if (event.code == "Enter") {
      window.open("https://cn.bing.com/search?q=" + keyword.value);
    }
  });
})();
