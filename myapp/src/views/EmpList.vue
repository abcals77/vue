<script>
import axios from 'axios';
export default {
  data() {
    return { emps : []}
  },
  mounted(){
    axios.get("/empdata.json")
    .then(res => this.emps = res.data);
  }
}
</script>
<template>
  <table>
    
  </table>
</template>