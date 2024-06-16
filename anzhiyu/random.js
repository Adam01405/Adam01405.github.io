var posts=["2024/05/21/5-月-21-日小记/","2024/05/05/hello-world/","2024/05/21/懒得更新/","2024/04/28/欢迎/","2024/05/03/注意-●-ε´●/","2024/05/21/测试页面-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };