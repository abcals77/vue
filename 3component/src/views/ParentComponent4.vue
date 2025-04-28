<template>
  <h3>부모컴포넌트4</h3>
  <child-component @send-message="sendMessage"/>
</template>

<script>
import ChildComponent from '../components/ChildComponent4.vue';
export default{
  components : {"ChildComponent" : ChildComponent},
  methods: {
    sendMessage(message){
      console.log(message)
    }
  }
}
</script>