<template>
  <div id="vip">
    <div id="title">{{msg.title}}</div>
    <div id="des">{{msg.des}}</div>
    <div id="summary">{{msg.summary}}</div>
    <div v-for="item in msg.content" class="content">
      <div class="content_title">{{item.title}}</div>
      <div v-for="each in item.text" class="content_text">{{each}}</div>
    </div>
    <div id="company">{{msg.company}}</div>
    <div id="bottom">
      <div v-for="item in msg.bottom" class="bottom_text">{{item}}</div>
    </div>
  </div>
</template>
<script>
  import vip from '../js/vip'
  export default{
    name:'VipIos',
    data:function () {
        return{
            msg:vip.vip_ios
        }
    }
  }
</script>
<style scoped>
  #vip{
    font-family: HYQiHei-EES;
    font-size: 0.3rem;
    color: #6F7275;
    letter-spacing: 0;
    line-height: 0.53rem;
    position: relative;
    margin-left: 0.32rem;
    width: 6.86rem;
  }
  #title{
    font-family: HYQiHei-GZS;
    font-size: 0.34rem;
    color: #333A42;
    letter-spacing: 0;
    line-height: 0.34rem;
    margin-top:0.52rem;
  }
  #des{
    color: #333A42;
    letter-spacing: 0;
    margin-top:0.36rem;
  }
  #summary{
  }
  .content{
    margin-top:0.36rem;
  }
  .content_title{
    font-family: HYQiHei-GZS;
    color: #333A42;
  }
  .content_text{}
  #company{
    font-family: HYQiHei-GZS;
    color: #333A42;
    line-height: 0.3rem;
    margin-top: 0.8rem;
    margin-left: 5.5rem;
  }
  #bottom{
    font-family: PingFangSC-Light;
    font-size: 0.24rem;
    color: #B8BCC2;
    line-height: 0.3rem;
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: 0.3rem;
  }
  .bottom_text{}
</style>
