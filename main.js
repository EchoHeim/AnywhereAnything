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
      header: "社交",
      recommend: ["facebook.png", "Facebook", "https://www.facebook.com/"],
      content: [
        ["douban.png", "豆瓣", "https://www.douban.com/"],
        ["twitter.png", "Twitter", "https://twitter.com/"],
        ["sinaweibo.png", "新浪微博", "https://weibo.com/"],
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
        ["apisio.png", "APIs.io", "https://apis.io/"],
        ["codepen.png", "CodePen.IO", "https://codepen.io/"],
      ],
    },
    {
      header: "音乐",
      recommend: ["163music.png", "网易云音乐", "https://music.163.com/"],
      content: [
        ["spotify.png", "Spotify", "https://open.spotify.com/"],
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
        ["letv.png", "乐视视频", "https://www.le.com/"],
      ],
    },
  ];

  resource.map(function (val) {
    createItem(val, div, 4);
  });
  window.addEventListener("keydown", function () {
    var keyword = document.querySelector("#searchBox");
    if (event.code == "Enter") {
      window.open("https://cn.bing.com/search?q=" + keyword.value);
    }
  });
})();
