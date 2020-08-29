<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <p>
      众所周知，暑期实践2020是一个由于某新部长不给力而炸了好几次的锅，<br>
      而这里正是该部长为了补锅与练习技术而制作的页面——的欢迎页，<br>
      工作进度可<a href="https://github.com/NPER2012/Practice-shijian2020" target="_blank" rel="noopener">在github上查看</a>,欢迎小伙伴们督工
    </p>
    <h3>内部页面快速跳转</h3>
    <ul>
      <li><a href="" target="" rel="noopener">暂</a></li>
      <li><a href="" target="" rel="noopener">无</a></li>
      <li><a href="" target="" rel="noopener">链</a></li>
      <li><a href="" target="" rel="noopener">接</a></li>
    </ul>
    <h3>挑战产品</h3>
    <ul>
      <li><a href="https://tuanwei.xjtu.edu.cn/" target="_blank" rel="noopener">交大青年之声</a></li>
      <li><a href="https://www.tiaozhan.com/" target="_blank" rel="noopener">挑战网首页</a></li>
      <li><a href="https://shijian.tiaozhan.com/home" target="_blank" rel="noopener">社会实践</a></li>
      <li><a href="https://v.tiaozhan.com/" target="_blank" rel="noopener">挑战V网</a></li>
      <li><a href="https://apply.tiaozhan.com/#/" target="_blank" rel="noopener">公共资源申请</a></li>
    </ul>
    <h3>友情链接</h3>
    <ul>
      <li><a href="http://www.xjtu.edu.cn/" target="_blank" rel="noopener">西安交通大学</a></li>
      <li><a href="http://dean.xjtu.edu.cn/" target="_blank" rel="noopener">西安交大教务处</a></li>
      <li><a href="http://newsxq.xjtu.edu.cn/" target="_blank" rel="noopener">交大新闻网</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>

#hello {
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>
