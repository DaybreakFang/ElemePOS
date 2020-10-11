<template>
  <div id="app">
  <left-nav></left-nav>
  <div class="main">
    <router-view/>
  </div>
    
  </div>
</template>
<script>
import LeftNav from './components/common/LeftNav' 
export default {
  name:'app',
  components:{
    LeftNav
  }
}
</script>
<style>
  @import "./assets/css/base.css";
  .main{
    float: left;
    width: 95%;
    background-color: #eff2f7;
    height: 100vh;
    overflow: hidden;
  }
</style>
