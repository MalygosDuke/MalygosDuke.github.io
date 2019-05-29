let data = {
  header: [
    {
      span_name: "MalygosDuke Projects",
      img:
        "https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
    }
  ],
  content: [
    {
      heroku: "https://malygosduke.github.io/Complex/index.html",
      project_img: "./img/Profile.PNG",
      name: "Resume",
      explain: ["簡介", "熟悉技能", "學經歷"],
      source:
        "https://github.com/MalygosDuke/Practice/tree/master/Resume_20190518"
    },
    {
      heroku: "https://simpleshopweb.herokuapp.com/index.html",
      project_img: "./img/project1.PNG",
      name: "簡易購物網站",
      explain: ["練習vue.js之資料綁定", "購物車製作", "搜尋商品等功能實作"],
      source:
        "https://github.com/MalygosDuke/Practice/tree/master/Shopping_list_20190518"
    }
  ]
};

let vm = new Vue({
  el: "#app",
  data: data
});
