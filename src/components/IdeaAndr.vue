<template>
  <div id="idea">
    <div contentEditable="true" id="idea_text" placeholder="您的反馈会帮助我们更快的成长" :class="{show_line_color:showidea}"
         @focus="isidea" @blur="isidea_empty" ref="input" v-bind:value='innerText' @input="get_idea_text($event)"></div>
  </div>
</template>
<script>
  export default{
    name:'IdeaAndr',
    props: ['value'],
    data:function () {
      return{
        innerText:this.value,
        showidea:false
      }
    },
    methods:{
      isidea:function () {
        this.showidea=true
      },
      get_idea_text:function (event) {
        this.innerText = this.$el.innerText.trim();
        this.$emit('input',this.innerText);
      },
      isidea_empty:function () {
        this.showidea=false
      }
    }
  }
</script>
