<template>
  <div id="undercommon">
    <div id="voild"></div>
    <div id="idea_title">问题反馈</div>
    <div id="idea" class="border">
      <textarea id="idea_text" v-model='msg_idea' v-on:input="isidea_empty"></textarea>
    </div>
    <div id="contact" class="border">
      <input id="contact_text" placeholder="您的联系方式 (选填)" v-model='msg_contact'>
    </div>
    <div id="name" class="border">
      <input id="name_text" placeholder="您的称呼 (选填)" v-model='msg_name'>
    </div>
    <div id="sub" v-bind:class="[{not_show_sub_color:!showsub},{show_sub_color:showsub}]">
      <div id="sub_text" >提交</div>
    </div>
    <div id="neatease"><div id="neatease_text">客服反馈邮箱：9823456@eq.com</div></div>
  </div>
</template>
<script>
  export default {
    name: 'UndercommonIos',
    data:function () {
      return{
        showsub:false,
        msg_contact:'',
        msg_name:'',
        msg_idea:'',
      }
    },
    methods:{
      isidea_empty:function () {
        if(this.msg_idea!=''){
          this.showsub=true
        }
        else {
          this.showsub=false
        }
      },
    }
  }
</script>
<style scoped>
  textarea{
    resize: none;
    overflow-y:auto;
    -webkit-overflow-scrolling: auto;
  }

  textarea::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0);
    border-left: 1px solid rgba(0, 0, 0, 0);
  }
  textarea::-webkit-scrollbar {
    width: 2px;
    /*height: 10px;*/
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  textarea::-webkit-scrollbar-thumb {
    background-color: rgba(184,188,194,0.60);
    background-clip: padding-box;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    /*min-height: 28px;*/
  }
  textarea::-webkit-scrollbar-thumb:hover {
    background-color: rgba(184,188,194,0.60);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  #Ios .border{
    border: 1px solid rgba(184,188,194,0.60);
    border-radius: 0.04rem;
  }
  #Ios input::-webkit-input-placeholder { /* WebKit browsers */
    color: #9B9EA3;
  }
  #Ios input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #9B9EA3;
  }
  #Ios input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #9B9EA3;
  }
  #Ios input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #9B9EA3;
  }
  #Ios #undercommon{
    position: relative;
    font-family: HYQiHei-EES;
    font-size: 0.3rem;
    color: #333A42;
    letter-spacing: 0;
    line-height: 0.45rem;
  }
  #Ios #voild{
    width:7.5rem;
    height: 0.2rem;
    background: #F7F7F7;
  }
  #Ios #idea_title{
    font-family: HYQiHei-GZS;
    color: #3B424C;
    letter-spacing: 0;
    line-height: 0.35rem;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
  }
  #Ios #idea{
    width:6.9rem;
    height: 2.5rem;
    margin-top: 0.34rem;
    margin-left: 0.3rem;

  }
  #Ios #idea_text{
    width:6.42rem;
    height:1.75rem;
    margin: 0.24rem 0.24rem 0.51rem;
  }
  #Ios #contact,
  #Ios #name{
    width: 6.9rem;
    height: 0.8rem;
    line-height: 0.8rem;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  #Ios #contact_text,
  #Ios #name_text{
    width: 6.66rem;
    font-size: 0.28rem;
    letter-spacing: 0;
    line-height: normal;
    margin-left: 0.24rem;

  }
  #Ios #sub{
    width: 6.9rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 1rem;
    text-align: center;
    margin-top: 0.4rem;
    margin-left: 0.3rem;
    /*display: table-cell;*/
    /*vertical-align: middle;*/
  }
  #Ios #sub_text{
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 0.4rem;
    padding-top: 0.2rem;
  }
  #Ios #neatease{
    font-size: 0.24rem;
    color: #B8BCC2;
    letter-spacing: 0;
    line-height: 0.24rem;
    display: flex;
    margin: 0.4rem 0 1.38rem;
  }
  #Ios #neatease_text{
    margin: auto;
  }
  #Ios .show_sub_color{
    background: #F03744;
    box-shadow: 0 3px 9px 0 rgba(240,55,68,0.60);
  }
  #Ios .not_show_sub_color{
    background: #B8BCC2;
  }
</style>
