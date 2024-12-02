function createItem(obj, parent, n) {
  var item = document.createElement("div");
  item.className = "item";
  item.style.height = 12 + 2.6 * n + "rem";
  var wrap = document.createElement("div");
  wrap.className = "wrap";

  var h2 = document.createElement("h2");
  h2.innerHTML = obj.header;
  wrap.appendChild(h2);

  var reco = document.createElement("div");
  reco.className = "recommend";
  var img = document.createElement("img");
  img.src = "header/" + obj.recommend[0];
  img.alt = obj.recommend[1];
  var p = document.createElement("p");
  p.innerHTML = obj.recommend[1];

  reco.addEventListener("click", function () {
    window.open(obj.recommend[2]);
  });

  reco.appendChild(img);
  reco.appendChild(p);
  wrap.appendChild(reco);

  var ul = document.createElement("ul");

  obj.content.map(function (val, index) {
    var li = document.createElement("li");
    var icon = document.createElement("img");
    switch (obj.header) {
      case "知识":
        icon.src = "icon/knowledge/" + val[0];
        break;
      case "设计":
        icon.src = "icon/design/" + val[0];
        break;
      case "社交":
        icon.src = "icon/social/" + val[0];
        break;
      case "购物":
        icon.src = "icon/shopping/" + val[0];
        break;
      case "新闻":
        icon.src = "icon/news/" + val[0];
        break;
      case "书籍":
        icon.src = "icon/books/" + val[0];
        break;
      case "论坛":
        icon.src = "icon/forums/" + val[0];
        break;
      case "编程":
        icon.src = "icon/code/" + val[0];
        break;
      case "图片":
        icon.src = "icon/picture/" + val[0];
        break;
      case "音乐":
        icon.src = "icon/music/" + val[0];
        break;
      case "视频":
        icon.src = "icon/video/" + val[0];
        break;
      case "游戏":
        icon.src = "icon/game/" + val[0];
        break;
      case "旅行":
        icon.src = "icon/travel/" + val[0];
        break;
      case "工具":
        icon.src = "icon/tools/" + val[0];
        break;
      case "网络":
        icon.src = "icon/net/" + val[0];
        break;
      case "其他":
        icon.src = "icon/others/" + val[0];
        break;
    }
    icon.alt = val[1];
    var label = document.createElement("label");
    label.innerHTML = val[1];
    li.appendChild(icon);
    li.appendChild(label);
    li.addEventListener("click", function () {
      window.open(val[2]);
    });
    if (index == n - 1) {
      li.className = "test";
      li.addEventListener("mouseover", function () {
        item.className = "item change";
      });
    }
    ul.appendChild(li);
  });
  wrap.appendChild(ul);
  wrap.addEventListener("mouseleave", function () {
    item.className = "item";
  });
  item.appendChild(wrap);
  parent.appendChild(item);
}

function CreateSearch(arr, ul) {
  var keyword = document.querySelector("#searchBox");
  arr.map(function (val) {
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.src = "search/" + val[0];
    img.alt = val[0];
    li.appendChild(img);
    li.addEventListener("click", function () {
      window.open(val[1] + keyword.value);
    });
    ul.appendChild(li);
  });
}
