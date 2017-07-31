<template>
  <div id="common">
    <div id="que">
      <span id="que_text">常见问题</span>
    </div>

    <div id="time" class="que_list" :class="{shadow: this.isIos && !(this.showTime)}" @click="isTime">
      <span class="title_text">计时周期说明</span>
      <img class="ic_img"  :src="[showTime? ic_down:ic_right]">
    </div>
    <div class='content' v-if="showTime" :class="{shadow: this.isIos && this.showTime}" >
      <span class="content_text">从购买之日起，一个月会员的有效期为31天，6个月会员的有效期为183天，12个月会员的有效期为366天。</span></div>

    <div id="repeat" class="que_list" :class="{shadow: this.isIos && !(this.showRepeat)}" @click="isRepeat">
       <span class="title_text">购买了两个套餐怎么办？</span>
      <img class="ic_img"  :src="[showRepeat? ic_down:ic_right]">
    </div>
    <div class='content' v-if="showRepeat" :class="{shadow: this.isIos && this.showRepeat}">
      <span class="content_text">同一账号购买两个套餐，VIP会员时长将进行顺延。若您已经完成两次购买，请您查看会员账号的到期时间，是否为顺延两次的会员时长。</span></div>

    <div id="money" class="que_list" :class="{shadow: this.isIos && !(this.showMoney)}" @click="isMoney">
      <span class="title_text">可以退款么？</span>
      <img class="ic_img"  :src="[showMoney? ic_down:ic_right]">
    </div>
    <div class='content' v-if="showMoney" :class="{shadow: this.isIos && this.showMoney}">
      <span class="content_text">抱歉，会员服务一经开通后无法退款。</span>
    </div>

    <div id="continue" class="que_list" @click="isContinue">
      <span class="title_text">如何管理连续包月服务？</span>
      <img class="ic_img"  :src="[showContinue? ic_down:ic_right]">
    </div>
    <div  class='content' v-if="showContinue">
      <span class="content_continue_text">连续包月服务说明：<br/>当开通连续包月服务时，将会在VIP到期前24小时内自动续费，续费成功VIP自动延长31天。</span>
      <span class="content_continue_text_phone">【手机客户端】
        <span class="content_continue_text_andr" v-if="!(isIos)">安卓用户：您可在会员到期前可<a style="color: #497DB8;">点击这里</a>随时关闭或再次开启自动续费，关闭后将不再自动扣款。</span>
        <span class="content_continue_text_ios" v-else>苹果用户：您可使用苹果ID开通自动续费。若您需关闭已开启的自动续费服务，请在手机“设置”→“iTunesStore与App Store”→“Apple ID”→“查看Apple ID”→在账户设置页面点击“订阅”→取消网易有道词典VIP订阅即可。</span>
      </span>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Common',
    data:function () {
      return{
          ic_right:'./static/ic_arrow_right_gray_medium.png',
          ic_down:'./static/ic_arrow_down_gray_medium.png',
          showTime:false,
          showRepeat:false,
          showMoney:false,
          showContinue:false,
          isIos:false,

      }
    },
    mounted:function () {
      if(phone!='ios'){
        this.isIos=false
      }
      else{
        this.isIos=true
      }
    },
    methods:{
      isTime:function () {
        this.showTime=!this.showTime
      },
      isRepeat:function () {
        this.showRepeat=!this.showRepeat
      },
      isMoney:function () {
        this.showMoney=!this.showMoney
      },
      isContinue:function () {
        this.showContinue=!this.showContinue
        this.showshadow=!this.showshadow
      }
    }
  }
</script>
