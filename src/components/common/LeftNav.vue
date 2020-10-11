<template>
  <div class="left-nav">
    <ul>
      <li>
          <i class="icon iconfont icon-huiyuanqia"></i>
          <div>收 银</div>
      </li>
      <li>
          <i class="icon iconfont icon-dianpu"></i>
          <div>店 铺</div>
      </li>
      <li>
          <i class="icon iconfont icon-canyin"></i>
          <div>商 品</div>
      </li>
      <li>
          <i class="icon iconfont icon-huiyuanqia"></i>
          <div>会 员</div>
      </li>
      <li>
          <i class="icon iconfont icon-shezhi"></i>
          <div>设 置</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'LeftNav',
  components: {},
 
}

</script>
<style  scoped>
.left-nav{
  color: #fff;
  font-size: 10px;
  height: 100vh;
  background-color: #1D8CE0;
  float: left;
  width: 5%;
}
.iconfont{
  font-size: 24px;
}
.left-nav li{
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
.left-nav li div{
  margin-top: 3px;
}
</style>