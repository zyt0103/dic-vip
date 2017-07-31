<template>
  <div id="undercommon">
    <div id="idea_title">
      <div id="idea_title_text">您对VIP服务的问题或建议</div>
    </div>
    <!--<div id="idea">-->
      <!--<div contentEditable="true" id="idea_text" placeholder="您的反馈会帮助我们更快的成长" :class="{show_line_color:showidea_line}" @focus="isidea" @blur="isidea_empty_about_line" @keyup="isidea_empty($event)">{{msg_idea}}</div>-->
    <!--</div>-->
    <IdeaAndr v-model='msg_idea'></IdeaAndr>
    <div id="contact">
      <div id="contact_title" >
        <div class="appear_text" id="contact_title_text" v-if="showcontact_title">您的联系方式 (选填)</div>
      </div>
      <div id="contact_text" :class="{show_line_color:showcontact}" >
        <input id="contact_textin" placeholder="您的联系方式 (选填)" v-model="msg_contact"  @focus="iscontact" @blur="iscontact_empty">
      </div>
    </div>
    <div id="name">
      <div id="name_title">
        <div class="appear_text" id="name_title_text" v-if="showname_title">您的称呼 (选填)</div>
      </div>
      <div id="name_text" :class="{show_line_color:showname}" >
        <input id="name_textin" placeholder="您的称呼（选填)" v-model="msg_name"  @focus="isname" @blur="isname_empty">
      </div>
    </div>
    <div id="sub" v-bind:class="[{not_show_sub_color:!showsub},{show_sub_color:showsub}]">
      <div id="sub_text" >提交</div>
    </div>
    <div id="neatease">客服反馈邮箱：9823456@eq.com</div>
  </div>
</template>
<script>
  import IdeaAndr from '@/components/IdeaAndr'
  export default {
    name: 'UndercommonAndr',
    data:function () {
      return{
        showcontact_title:false,
        showname_title:false,
        showcontact:false,
        showname:false,
        showsub:false,
        msg_contact:'',
        msg_name:'',
        msg_idea:'',
      }
    },
    components: {
      IdeaAndr
    },
    watch:{
      msg_idea:function (val) {
        if(val!=''){
          this.showsub=true
        }
        else{
          this.showsub=false
        }
      }
    },
    methods:{
      iscontact:function () {
        this.showcontact=true
        this.showcontact_title=true
      },
      iscontact_empty:function () {
        this.showcontact=false
        if (this.msg_contact==''){
          this.showcontact_title=false
        }
      },
      isname:function () {
        this.showname=true
        this.showname_title=true
      },
      isname_empty:function () {
        this.showname=false
        if (this.msg_name==''){
          this.showname_title=false
        }
      },
//      isidea:function () {
//        this.showidea_line=true
//      },
//      isidea_empty:function (event) {
//        this.msg_idea = event.srcElement.innerText;
//        if(this.msg_idea!=''){
//          this.showsub=true
//        }
//        else {
//          this.showsub=false
//        }
//      },
//      isidea_empty_about_line:function (event) {
//        this.msg_idea = event.srcElement.innerText;
//        if(this.msg_idea!=''){
//          this.showidea_line=true
//        }
//        else {
//          this.showidea_line=false
//        }
//      }
    }
  }
</script>

<style >
  #Andr #idea_title{
    width: 7.5rem;
    height: 1rem;
    margin-top: 0.26041667rem;
    position: relative;
  }
  #Andr #idea_title_text{
    font-family: NotoSansCJKsc-Medium;
    font-size: 0.25rem;
    color: #B8B8B8;
    line-height: 0.25rem;
    position: absolute;
    top:0.5rem;
    left:0.33333333rem;
  }
  #Andr #idea{
    margin-top:0.33333333rem;
    margin-bottom:0.66666667rem ;
  }
  #Andr #idea_text{
    -webkit-user-select: auto;
    outline: none;
    margin-left:0.33333333rem ;
    border-bottom: 1px  solid #E1E1E1;
    width: 6.83333333rem;
    overflow: hidden;
    font-family: NotoSansCJKsc-DemiLight;
    font-size: 0.29166667rem;
    color: #333333;
    line-height: 0.4375rem;
    padding-bottom: 0.08333333rem;
  }
  #Andr #idea_text:empty:before{
    content: attr(placeholder);
    color: #B8B8B8;
  }
  #Andr #idea_text:focus:before{
    content: none;
  }
  #Andr #contact{
    margin-bottom:0.66666667rem ;
  }
  #Andr #name{
    margin-bottom:1rem ;
  }
  #Andr input:focus::-webkit-input-placeholder{
    color:transparent;
  }
  #Andr input:focus:-moz-placeholder{
    color:transparent;
  }
  #Andr input:focus::-moz-placeholder{
    color:transparent;
  }
  #Andr input:focus:-ms-input-placeholder
  {
    color:transparent;
  }
  #Andr input::-webkit-input-placeholder{
    color: #B8B8B8;
  }
  #Andr input:-moz-placeholder {
    color: #B8B8B8;
  }
  #Andr input::-moz-placeholder{
    color: #B8B8B8;
  }
  #Andr input:-ms-input-placeholder
  {
    color: #B8B8B8;
  }
  #Andr #contact_title,
  #Andr #name_title{
    height: 0.33333333rem;
    font-family: NotoSansCJKsc-DemiLight;
    font-size: 0.25rem;
    color: #999999;
    line-height: 0.25rem;
    margin-left:0.33333333rem ;
  }
  #Andr #contact_text,
  #Andr #name_text{
    font-family: NotoSansCJKsc-DemiLight;
    font-size: 0.29166667rem;
    color: #333333;
    line-height: 0.4375rem;
    margin-left:0.33333333rem ;
    border-bottom: 1px  solid #E1E1E1;
    width: 6.83333333rem;
    padding-bottom: 0.08333333rem;
  }
  #Andr #sub{
    border-radius: 2px;
    width: 6.833333333rem;
    height: 0.833333333rem ;
    position: relative;
    margin-left: 0.33333333rem;
  }
  #Andr #sub_text{
    font-family: NotoSansCJKsc-Regular;
    font-size: 0.29166667rem;
    line-height: 0.29166667rem;
    position: absolute;
    top: 0.27083333rem ;
    left: 3.09375rem;
  }
  #Andr #neatease{
    font-family: NotoSansCJKsc-DemiLight;
    font-size: 0.20833333rem;
    color: #B8B8B8;
    line-height: 0.20833333rem;
    margin-top: 0.25rem;
    margin-left: 0.33333333rem;
    margin-bottom: 0.5rem;
  }
  #Andr #contact_textin,
  #Andr #name_textin{
    width: 100%;
  }
  #Andr .show_sub_color{
    background: #E1B763;
    color: #FFFFFF;
  }
  #Andr .not_show_sub_color{
    color: #B8B8B8;
    background: #F0F1F3;
  }
  #Andr .show_line_color{
    border-bottom: 1px  solid #497DB8 !important;
  }
</style>
