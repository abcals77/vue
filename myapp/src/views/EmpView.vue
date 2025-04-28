<script>
import EmpList from './EmpList.vue';
import EmpForm from './EmpForm.vue';

export default {
  components: { EmpList, EmpForm},
  data(){return{}},
  methods:{}
}
</script>

<template>
  <div>
    <div class="left">
      <EmpList />
    </div>
    <div class="right">
      <EmpForm />
    </div>
  </div>
</template>

<style scoped>
.left {
  float: left;
  width: 60%;
}

.right {
  float: left;
  width: 40%;
}

div::after {
  content: "";
  display: block;
  clear: both;
}
</style>