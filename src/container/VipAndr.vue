<template>
  <div id="vip">
    <div id="title">{{msg.title}}</div>
    <!--<div id="des">{{msg.des}}</div>-->
    <div id="summary">{{msg.summary}}</div>
    <div v-for="item in msg.content" class="content">
      <div class="content_title">{{item.title}}</div>
      <div v-for="(value,key) in item.text" class="content_text">
        <span class="key">{{key}}</span>
        <span class="value">{{value}}</span>
      </div>
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
    name:'VipAndr',
    data:function () {
      return{
        msg:vip.vip_andr
      }
    }
  }
</script>
<style scoped>
  #vip{
    font-family: NotoSansCJKsc-DemiLight;
    font-size: 0.27083333rem;
    color: #666666;
    letter-spacing: 0;
    line-height: 0.47916667rem;
    position: relative;
    margin-left: 0.33333333rem;
    width: 6.83333333rem;
    overflow: hidden;
  }
  #title{
    font-family: NotoSansCJKsc-Medium;
    font-size: 0.3125rem;
    color: #333333;
    letter-spacing: 0;
    line-height: 0.375rem;
    margin-top:0.66666667rem;
    margin-left: 1.927083333rem;
    font-weight:700;
  }
  #summary{
    margin-top:0.33333333rem;
  }
  .content{
    margin-top:0.5rem;
  }
  .content_title{
  }
  .content_text{
    margin-top: 0.08333333rem;
  }
  .key{
    margin-left: 0.33333333rem;
    vertical-align: top;

  }
  .value{
    width: 6.13541667rem;
  }
  #company{
    font-family: HYQiHei-GZS;
    color: #666666;
    line-height: 0.27083333rem;
    margin-top: 0.5rem;
    margin-left: 5.75rem;
  }
  #bottom{
    font-family: HelveticaNeue-Light;
    font-size: 0.20833333rem;
    color: #B8B8B8;
    line-height: 0.20833333rem;
    text-align: center;
    margin-top: 0.66666667rem;
    margin-bottom: 0.33333333rem;
  }
  .bottom_text{}
</style>

