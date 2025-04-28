<template>
  {{msg}}<br>
  <button type="button" class="btn btn-success" @click="childFunc" ref="btn">Click</button>
</template>

<script>
  export default{
    data(){
      return {msg : '자식컴포넌트 메시지4'}
    },                                                                                                                                                                                                             
    methods:{
      childFunc(){
        this.$emit('send-message', this.msg)
      }
    }
  }
</script>