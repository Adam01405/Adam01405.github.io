var posts=["2024/05/05/hello-world/","2024/04/28/欢迎/","2024/05/03/注意-●-ε´●/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };