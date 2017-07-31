<template>
  <div id="Ios">
    <Common></Common>
    <UndercommonIos></UndercommonIos>
  </div>
</template>
<script>
  import Common from '@/components/Common'
  import UndercommonIos from '@/components/UndercommonIos'
  import '../css/commonIos.css'
  export default {
    name: 'Ios',
    components: {
      Common,
      UndercommonIos
    },
  }
</script>
